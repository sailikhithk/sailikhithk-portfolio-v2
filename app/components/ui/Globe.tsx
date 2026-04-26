"use client";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Globe from "react-globe.gl";
import * as satellite from "satellite.js";

const EARTH_RADIUS_KM = 6371; // km
const TIME_STEP = 3 * 1000; // per frame

export default function GlobeSatellites() {
  const globeEl = useRef<any>();
  const [satData, setSatData] = useState<any[]>();
  const [time, setTime] = useState(new Date());

  // Time ticker
  useEffect(() => {
    let animFrame: number;
    (function frameTicker() {
      animFrame = requestAnimationFrame(frameTicker);
      setTime((t) => new Date(+t + TIME_STEP));
    })();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // Load satellite data
  useEffect(() => {
    fetch("//unpkg.com/globe.gl/example/datasets/space-track-leo.txt")
      .then((r) => r.text())
      .then((rawData) => {
        const tleData = rawData
          .replace(/\r/g, "")
          .split(/\n(?=[^12])/)
          .filter((d) => d)
          .map((tle) => tle.split("\n"));

        const parsedSatData = tleData
          .map(([name, ...tle]) => ({
            satrec: satellite.twoline2satrec(tle[0], tle[1]),
            name: name.trim().replace(/^0 /, ""),
          }))
          // Exclude those that can't be propagated
          .filter((d) => !!satellite.propagate(d.satrec, new Date())?.position);

        setSatData(parsedSatData);
      });
  }, []);

  // Set initial point of view to North America
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 39.8, lng: -98.5, altitude: 2 }, 1000);
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  const particlesData = useMemo(() => {
    if (!satData) return [];

    // Update satellite positions
    const gmst = satellite.gstime(time);
    return satData
      .map((d) => {
        const eci = satellite.propagate(d.satrec, time);
        if (eci?.position) {
          const gdPos = satellite.eciToGeodetic(
            eci.position as satellite.EciVec3<number>,
            gmst
          );
          const lat = satellite.radiansToDegrees(gdPos.latitude);
          const lng = satellite.radiansToDegrees(gdPos.longitude);
          const alt = gdPos.height / EARTH_RADIUS_KM;
          return { ...d, lat, lng, alt };
        } else {
          d.lat = NaN;
          d.lng = NaN;
          d.alt = NaN;
        }
        return d;
      })
      .filter((d) => !isNaN(d.lat) && !isNaN(d.lng) && !isNaN(d.alt));
  }, [satData, time]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
      }}
    >
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        particlesData={particlesData}
        particleLabel="name"
        particleLat="lat"
        particleLng="lng"
        particleAltitude="alt"
        particlesColor={useCallback(() => "palegreen", [])}
        backgroundColor="rgba(0,0,0,0)"
        width={500}
        height={500}
      />
    </div>
  );
}
