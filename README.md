# Google Flights Currency Lock

A simple utility tool to persist your currency settings on the Google Flights (google.com/travel/flights) website.

## Features

- **Automatic Currency Redirect**: Automatically detects when the currency in the URL matches your preferred currency and redirects if it doesn't.
- **Persistence**: Remembers your preferred currency choice locally.
- **Seamless Integration**: Detects manual currency changes in the Google Flights dialog and updates your preference.

## Installation

1.  Clone this repository.
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Build the extension:
    ```bash
    npm run build
    # or
    yarn build
    ```
4.  Load the extension in Chrome/Edge:
    -   Go to `chrome://extensions`.
    -   Enable "Developer mode".
    -   Click "Load unpacked".
    -   Select the `.output/chrome-mv3` directory.

## Development

This project is built with [WXT](https://wxt.dev/), React, and Tailwind CSS.

### Commands

-   `npm run dev`: Start the development server (HMR).
-   `npm run build`: Build the extension for production.
-   `npm run compile`: Run TypeScript type checking.
-   `npm run zip`: Package the extension for publication.

### Tech Stack

-   [WXT](https://wxt.dev/) - Web Extension Framework
-   [React](https://react.dev/) - UI Library
-   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
