# Architecture

## Overview
The project is a Next.js application using the App Router. It serves as a hub for multiple B2B strategic analysis tools.

## Key Layers
1. **App Layer (`src/app/`)**: Handles routing and page-level layouts. Each tool has its own directory.
2. **Component Layer (`src/components/`)**: Reusable UI components.
3. **Hook Layer (`src/hooks/`)**: Business logic and state management using custom hooks.
4. **Type Layer (`src/types/`)**: TypeScript interfaces and types.
5. **Utility Layer (`src/utils/`)**: Helper functions (e.g., CSV parsing).

## Data Flow
- User input -> Custom Hook -> `localStorage`
- `localStorage` -> Custom Hook -> UI
- **No backend integration for tool data.**
