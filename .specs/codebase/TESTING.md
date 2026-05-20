# Testing

## Current State
- No automated tests implemented yet.
- Manual verification and `npm run lint` are the primary quality gates.

## Strategy
- Future implementations should consider Vitest/React Testing Library for critical business logic in hooks.
- Use `getByRole` for accessibility-first testing.
