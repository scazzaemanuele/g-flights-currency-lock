# Initial Concept
Google Flights Currency Lock: A simple utility tool to persist your currency settings on the Google Flights website.

# Product Guide
## Target Audience
- **Frequent Travelers**: Users who access Google Flights from various regional versions of the site and require a consistent currency display.
- **Digital Nomads & Expats**: Individuals who prefer viewing flight prices in a specific currency (e.g., their home currency) regardless of their current location or local site defaults.

## Goals
- **Automated Consistency**: Maintain a stable currency setting by automatically managing the `curr` URL parameter.
- **Zero-Friction experience**: A lightweight, "set it and forget it" implementation that operates seamlessly in the background.
- **Seamless Preference Sync**: Intelligently capture manual currency changes made through the Google Flights UI to update stored preferences.

## Key Features
- **URL Monitoring & Redirection**: Automatically identifies and corrects the `curr` URL parameter to match the user's stored preference on page load.
- **Local Storage Persistence**: Persists the user's chosen 3-letter currency code using browser local storage.
- **UI Interaction Capture**: Intercepts clicks on "Done" or "OK" buttons within currency selection dialogs to update the preference based on the active UI selection.
- **Simplified Tab Management**: Prioritizes simplicity by handling redirections during initial page load or active manual interactions, avoiding disruptive global refreshes across multiple tabs.
