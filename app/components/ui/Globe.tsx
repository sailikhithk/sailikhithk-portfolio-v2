"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 4.4; // ~-100° lon → starts centered on North America
    let animFrame: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = canvas.offsetWidth * 2; // hi-dpi

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: size,
      height: size,
      phi,
      theta: 0.25, // tilt — equator visible, North America prominent
      dark: 1,
      diffuse: 1.5,
      scale: 1,
      mapSamples: 20000,
      mapBrightness: 5,
      baseColor: [0.06, 0.07, 0.15], // deep navy — matches --bg
      markerColor: [0.1, 0.74, 0.61], // teal — matches --teal #18bc9c
      glowColor: [0.1, 0.74, 0.61], // teal glow
      markers: [
        { location: [37.7595, -122.4367], size: 0.07 }, // San Francisco ← you
        { location: [40.7128, -74.006], size: 0.05 }, // New York
        { location: [47.6062, -122.3321], size: 0.04 }, // Seattle
        { location: [34.0522, -118.2437], size: 0.04 }, // Los Angeles
      ],
    });

    // Slow auto-rotation via rAF + globe.update()
    function animate() {
      phi += 0.003;
      globe.update({ phi });
      animFrame = requestAnimationFrame(animate);
    }
    animFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrame);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        display: "block",
      }}
    />
  );
}
