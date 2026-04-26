.PHONY: dev build start clean fix-build

# Kills any process running on port 3000, then starts the dev server
dev:
	@echo "Cleaning up port 3000 and stale processes..."
	@lsof -ti :3000 | xargs kill -9 2>/dev/null || true
	@pkill -f "next dev" || true
	@pkill -f "next build" || true
	@echo "Starting Next.js dev server..."
	npm run dev

# Cleans stale build processes and runs a fresh production build
build:
	@echo "Killing stale build processes..."
	@pkill -f "next build" || true
	@echo "Running production build..."
	npm run build

# Starts the production server (requires 'make build' first)
start:
	@echo "Starting production server..."
	npm run start

# Full clean of the Next.js cache and node_modules
clean:
	@echo "Cleaning project..."
	rm -rf .next
	rm -rf node_modules
	npm cache clean --force
	@echo "Clean complete. Run 'npm install' to reinstall."

# Emergency fix if 'Another next build process is already running' happens
fix-build:
	@echo "Force killing all node and next processes..."
	@pkill -f "next" || true
	@pkill -f "node" || true
	@rm -rf .next
	@echo "Cleared. You can now run 'make build' safely."
