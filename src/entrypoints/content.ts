import { browser } from "wxt/browser";

export default defineContentScript({
  matches: ["https://www.google.com/travel/flights*"],
  async main() {
    // Function to check and update currency
    const checkCurrency = async () => {
      try {
        const res = await browser.storage.local.get("preferredCurrency");
        const preferredCurrency = res.preferredCurrency;

        if (!preferredCurrency) return;

        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        const currentCurr = params.get("curr");

        if (currentCurr !== preferredCurrency) {
          params.set("curr", String(preferredCurrency));
          url.search = params.toString();
          window.location.replace(url.toString());
        }
      } catch (err) {
        console.error("Error reading storage:", err);
      }
    };

    // Initial check
    await checkCurrency();

    // Listen for changes
    browser.storage.onChanged.addListener((changes: any, areaName: string) => {
      if (areaName === "local" && changes.preferredCurrency) {
        checkCurrency();
      }
    });

    // Intercept currency dialog selection
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      // Look for the "Done" button (common in Google Flights dialogs)
      // We check if it's a button and has specific text, or is inside one
      const button = target.closest("button");
      if (!button) return;

      const buttonText = button.textContent?.trim().toLowerCase();
      // Google Flights usually uses "Done" for these dialogs
      if (buttonText !== "done" && buttonText !== "ok") return;

      // Try to find the currency dialog context
      // The dialog usually contains the button and the radio group
      const dialog = button.closest("[role='dialog']");
      if (!dialog) return;

      // Find the selected currency
      // Usually a checked radio button or an element with aria-checked="true"
      const selectedOption = dialog.querySelector(
        "[role='radio'][aria-checked='true'], input[type='radio']:checked"
      );

      if (selectedOption) {
        // The currency code is often in the value, label, or text content
        // Structure varies, but usually: "USD - US Dollar" or similar
        // We might need to dig into the label or aria-label
        let currencyCode = selectedOption.getAttribute("value");

        if (!currencyCode) {
          // Fallback: try to find text content of the label associated with this option
          // or the text within the option element itself
          const text = selectedOption.textContent?.trim();
          // extract typically 3 letter uppercase code
          const match = text?.match(/\b[A-Z]{3}\b/);
          if (match) {
            currencyCode = match[0];
          }
        }

        if (currencyCode) {
          console.log("Detected currency selection:", currencyCode);
          browser.storage.local.set({ preferredCurrency: currencyCode });
        }
      }
    });
  },
});
