# Product Guidelines

## Development Philosophy
- **Concise & Functional Logic**: Prioritize clean, readable code. Use high-value comments sparingly, focusing solely on the "why" behind complex logic rather than describing what the code does.
- **Approachable & Helpful Tone**: Use a friendly and guiding voice for any user-facing communication, ensuring the tool feels helpful and easy to understand.
- **Trunk-Based Velocity**: Adopt a streamlined development process by committing directly to the main branch, maintaining high momentum for rapid iterations.

## UI/UX Standards
- **Minimalist & Unobtrusive**: Avoid injecting visible UI elements into the Google Flights interface. The tool should operate as a background utility, utilizing standard extension interaction patterns (like the popup or options page) only when essential for user configuration.

## Quality & Reliability
- **Background Performance**: Ensure the extension has a negligible performance footprint, avoiding heavy computations or excessive storage polling.
- **Robust Error Handling**: Gracefully handle edge cases, such as missing storage permissions or unexpected Google Flights UI changes, without disrupting the core site experience.
