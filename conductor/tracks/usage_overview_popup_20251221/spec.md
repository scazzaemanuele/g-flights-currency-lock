# Track Spec: Usage Overview Popup

## Goal
Implement a minimalist popup UI for the browser extension that provides a brief, friendly overview of how the Google Flights Currency Lock works.

## Context
The extension currently operates primarily as a background content script. A popup provides a touchpoint for users to understand that the extension is active and how it assists them.

## Requirements
- **Trigger**: The popup must appear when the user clicks the extension icon in the browser toolbar.
- **Content**: 
    - A brief explanation: "Automatically persists your currency choice on Google Flights."
    - A simple "How it works" section: "1. Change currency on the site. 2. We remember it. 3. We redirect you automatically next time."
- **Design**:
    - Minimalist and clean.
    - Styled with Tailwind CSS.
    - Approachable and helpful tone.
- **Technical**:
    - Implemented as a WXT popup entrypoint using React.
    - Adhere to the project's TDD and quality standards.
