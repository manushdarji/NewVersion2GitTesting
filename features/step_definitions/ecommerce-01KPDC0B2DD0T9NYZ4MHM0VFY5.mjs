import { Given, When, Then } from "@cucumber/cucumber";

Given("The user clicks on the E-Commerce Site text [01KPDC0MXZ38P37EMW0FX5A1C8]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDC5D0T00T9C5W9F0MRWKFP","type":"element.action","data":{"type":"click"},"target":{"name":"\"E-Commerce Site\" text","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"E-Commerce Site\"s","strategy":"text","description":"The text that says \"E-Commerce Site\""},{"type":"pw.selectorString","selectorString":"span >> internal:has-text=/^E-Commerce Site$/","strategy":"text","description":"The span element that shows \"E-Commerce Site\""},{"type":"pw.selectorString","selectorString":"#ecommerce-site >> span","strategy":"css","description":"The text inside the container with ID \"ecommerce-site\""},{"type":"pw.selectorString","selectorString":"#ecommerce-site > span.text","strategy":"css","description":"The text span inside the \"ecommerce-site\" container"}]}}, input);
});

When("The user clicks on the Visit Demo Site button [01KPDC5DXV0WFYRETAJQJKTTQD]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDC5J8MVEEZ8RP1DCAJBH2Z","type":"element.action","data":{"type":"click"},"target":{"name":"Visit Demo Site","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Visit Demo Site\"s","strategy":"text","description":"The link that says \"Visit Demo Site\""},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^Visit Demo Site$/","strategy":"text","description":"The link that says \"Visit Demo Site\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Visit Demo Site\"s]","strategy":"text","description":"The link labeled \"Visit Demo Site\""},{"type":"pw.selectorString","selectorString":"#inner-body >> a","strategy":"css","description":"The link inside the main content container"},{"type":"pw.selectorString","selectorString":"#inner-body >> internal:role=link","strategy":"css","description":"The link inside the main content container"},{"type":"pw.selectorString","selectorString":"div.component-wrapper > div:nth-child(3) > a","strategy":"css","description":"The link in the component container (3rd item)"}]}}, input);
});

When("The user performs a page action [01KPDC5KAPK1WF0B2AF3S2CJGX]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDC7CGRY3BFCG6CK2FZC2J7","type":"custom","code":"await page.getByLabel(\"Email*\").fill(\"test@qabrains.com\");\ncheckpoint(\"filled-email\");\nawait page.getByLabel(\"Password*\").fill(\"Password123\");\ncheckpoint(\"filled-password\");\nawait page.getByRole(\"button\", { name: \"Login\" }).click();\ncheckpoint(\"clicked-login\");\nawait page.waitForURL(\"**/ecommerce\");\ncheckpoint(\"navigation-complete\", { url: page.url() });"}, input);
});

When("The user performs a page action 2 [01KPDEZSP9H71F35M3HRC78EYZ]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDF174AKK2DGJ38CPPKAEK0","type":"custom","code":"const sortControl = page.getByText(\"Select...\", { exact: true });\nawait sortControl.scrollIntoViewIfNeeded();\nawait helpers.activatePreferredInteractiveTarget(sortControl);\ncheckpoint(\"opened-sort-dropdown\");\nawait page.getByText(/high to low/i).click();\ncheckpoint(\"selected-high-to-low\");\nawait page.waitForTimeout(1000);\ncheckpoint(\"sort-complete\");"}, input);
});

When("The user performs a page action 2 [01KPDF174ATHN3QBG0X2E99NRV]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDF37YVFVH1TAG6P83QYC41","type":"custom","code":"const favouriteButtons = page.locator('button').filter({ hasNotText: 'Add to cart' });\nawait favouriteButtons.nth(1).scrollIntoViewIfNeeded();\nawait helpers.activatePreferredInteractiveTarget(favouriteButtons.nth(1));\ncheckpoint('added-first-product-to-favourites');\nawait page.waitForTimeout(500);\ncheckpoint('first-favourite-complete');\nawait favouriteButtons.nth(3).scrollIntoViewIfNeeded();\nawait helpers.activatePreferredInteractiveTarget(favouriteButtons.nth(3));\ncheckpoint('added-second-product-to-favourites');\nawait page.waitForTimeout(500);\ncheckpoint('second-favourite-complete');"}, input);
});

When("The user clicks on the text element [01KPDFZTM4RA2J3X95N9JR7F8V]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDFZXR7C2113EDNCP5ZQ8WQ","type":"element.action","data":{"type":"click"},"target":{"name":"text bvt-bq5c9olkh","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"#ecommerce-header >> internal:role=button >> internal:has-text=/^$/","strategy":"text","description":"The button inside the header"},{"type":"pw.selectorString","selectorString":"span.cursor-pointer.relative > svg > path","strategy":"css","description":"The icon path inside a clickable icon"}]}}, input);
});

When("Verify text \"Your cart is empty.\" is found in the page [01KPDF46EVEC093Z5DB47A4GXD]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDF5AMFK0634V87T1AXRRF6","type":"page.assertion","data":{"type":"toContainText","value":{"type":"string","value":"Your cart is empty."}},"target":null,"isNegativeAssertion":false}, input);
});

When("Verify element property [01KPDF5AMFV3VAJQA8Z68CW566]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDF5SFGF2K632HYN9P0F2QK","type":"element.assertion","data":{"type":"toHaveText","value":{"type":"string","value":"Continue Shopping"}},"target":{"name":"bvt-2zflofpvg","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"#cart >> span","strategy":"css"},{"type":"pw.selectorString","selectorString":"span.text-md","strategy":"css"}]},"isNegativeAssertion":false,"editorMetadata":{"elementBvtId":"bvt-2zflofpvg","elementName":"bvt-2zflofpvg","availableProperties":{"tagName":"SPAN","id":"","className":"text-md","title":"","hidden":false,"tabIndex":-1,"textContent":"Continue Shopping"}}}, input);
});

