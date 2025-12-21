# Google Flights Currency Lock

## Project Overview

**Google Flights Currency Lock** is a browser extension designed to persist user currency preferences on the Google Flights website. It automatically redirects the user to the URL with their preferred currency parameter if it differs from the current one. It also attempts to detect manual currency changes within the site's interface to update the user's preference.

**Tech Stack:**
*   **Framework:** [WXT](https://wxt.dev/) (Web Extension Framework)
*   **UI Library:** React
*   **Styling:** Tailwind CSS (configured with `@tailwindcss/vite`)
*   **Language:** TypeScript

## Building and Running

### Prerequisites
*   Node.js
*   npm or yarn

### Setup
1.  Install dependencies:
    ```bash
    npm install
    ```

### Development Server
Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
To develop for Firefox:
```bash
npm run dev:firefox
```

### Production Build
Build the extension for production:
```bash
npm run build
```
The output will be located in the `.output/` directory (e.g., `.output/chrome-mv3`).

### Loading the Extension
1.  Go to your browser's extensions page (e.g., `chrome://extensions`).
2.  Enable **Developer mode**.
3.  Click **Load unpacked**.
4.  Select the relevant folder within `.output/`.

### Other Commands
*   `npm run compile`: Run TypeScript type checking.
*   `npm run zip`: Package the extension into a ZIP file for publication.

## Key Files and Structure

*   **`wxt.config.ts`**: Main configuration file for WXT. Sets up the source directory (`src`), permissions (`storage`), Vite plugins (Tailwind), and path aliases (`@` -> `./src`).
*   **`src/entrypoints/content.ts`**: The main content script.
    *   Checks `storage.local` for `preferredCurrency`.
    *   Compares it with the `curr` URL parameter.
    *   Redirects `window.location` if there is a mismatch.
    *   Listens for storage changes to re-evaluate.
    *   Adds a global click listener to try and intercept currency selection in the Google Flights UI (looking for "Done" buttons and selected radio options).
*   **`src/lib/utils.ts`**: Contains the `cn` utility function for merging Tailwind classes (using `clsx` and `tailwind-merge`).
*   **`package.json`**: Defines scripts and dependencies.

## Development Conventions

*   **Framework Usage:** Follow [WXT documentation](https://wxt.dev/) for adding new entrypoints (background scripts, popup, options page, etc.).
*   **Styling:** Use Tailwind CSS utility classes. The `cn` helper is available for conditional class application.
*   **State Management:** Use `browser.storage.local` (from `wxt/browser`) for persisting user preferences.
*   **Path Aliases:** Use `@/` to import from the `src/` directory.
