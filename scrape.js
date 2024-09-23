const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const assets = {
    js: [],
    css: [],
  };

  // Intercept and capture network requests
  await page.setRequestInterception(true);
  page.on("request", (request) => request.continue());

  page.on("response", async (response) => {
    const responseUrl = response.url();
    const resourceType = response.request().resourceType();

    // Filter and save JS and CSS files
    if (resourceType === "script" || resourceType === "stylesheet") {
      const ext = path.extname(new URL(responseUrl).pathname);
      if (ext === ".js") assets.js.push(responseUrl);
      else if (ext === ".css") assets.css.push(responseUrl);

      // Download and save the file
      const buffer = await response.buffer();
      const fileName = path.basename(responseUrl);
      const filePath = path.join(__dirname, "downloads", fileName);

      fs.writeFileSync(filePath, buffer);
      console.log(`Saved ${fileName} to ${filePath}`);
    }
  });

  // Navigate to the target webpage
  await page.goto(
    "https://klbtheme.com/harrier/wp-content/plugins/mailchimp-for-wp/assets/js/forms.js?ver=4.8.12"
  );

  // Wait for a few seconds to allow assets to load
  await page.waitForTimeout(5000);

  // Log the captured assets
  console.log("JavaScript files:", assets.js);
  console.log("CSS files:", assets.css);
  await browser.close();
})();
