# Tech Stack

## Core
- **TypeScript**: The primary programming language for type-safe development.
- **WXT**: The Web Extension Framework used for project structure, build processes, and cross-browser support.
- **React**: The UI library for building any interactive extension components (e.g., popups, options pages).

## Styling
- **Tailwind CSS**: Utility-first CSS framework for efficient styling, integrated via `@tailwindcss/vite`.

## Manifest & APIs
- **Storage API**: Browser storage (local) is utilized to persist user currency preferences.
- **Content Scripts**: Used to monitor the Google Flights URL and intercept UI interactions.

## Tooling
- **Vite**: The underlying build tool and bundler used by WXT.
- **TypeScript Compiler (tsc)**: For type checking.
