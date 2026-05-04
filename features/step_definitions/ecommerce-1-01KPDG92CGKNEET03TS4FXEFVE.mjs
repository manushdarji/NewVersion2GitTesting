import { Given, When, Then } from "@cucumber/cucumber";

Given("The user clicks on the E-Commerce Site text [01KPDG9BK65E8P6QDW1Z3QPJ0V]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDGBG4FG8066B9KNTMEN6EG","type":"element.action","data":{"type":"click"},"target":{"name":"\"E-Commerce Site\" text","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"E-Commerce Site\"s","strategy":"text","description":"The text that says \"E-Commerce Site\""},{"type":"pw.selectorString","selectorString":"span >> internal:has-text=/^E-Commerce Site$/","strategy":"text","description":"The span element that shows \"E-Commerce Site\""},{"type":"pw.selectorString","selectorString":"#ecommerce-site >> span","strategy":"css","description":"The text inside the container with ID \"ecommerce-site\""},{"type":"pw.selectorString","selectorString":"#ecommerce-site > span.text","strategy":"css","description":"The text span inside the \"ecommerce-site\" container"}]}}, input);
});

When("The user clicks on the Visit Demo Site button [01KPDGBGW6VSJENVKW8BDNZG71]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDGBSDCKHWWCNF00R4X8R54","type":"element.action","data":{"type":"click"},"target":{"name":"Visit Demo Site","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Visit Demo Site\"s","strategy":"text","description":"The link that says \"Visit Demo Site\""},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^Visit Demo Site$/","strategy":"text","description":"The link with the exact text \"Visit Demo Site\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Visit Demo Site\"s]","strategy":"text","description":"The link named \"Visit Demo Site\""},{"type":"pw.selectorString","selectorString":"#inner-body >> a","strategy":"css","description":"The link inside the main content container"},{"type":"pw.selectorString","selectorString":"#inner-body >> internal:role=link","strategy":"css","description":"The link inside the main content container"},{"type":"pw.selectorString","selectorString":"div.component-wrapper > div:nth-child(3) > a","strategy":"css","description":"The link in the component container (3rd item)"}]}}, input);
});

When("The user performs a page action [01KPDGBSSKR6HSYE4NH2591CB7]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDGEHG1XKGDS6YCWB1H7KEA","type":"custom","code":"await page.getByRole(\"textbox\", { name: \"Email*\" }).fill(\"test@qabrains.com\");\ncheckpoint(\"filled-email\");\nawait page.getByRole(\"textbox\", { name: \"Password*\" }).fill(\"Password123\");\ncheckpoint(\"filled-password\");\nawait page.getByRole(\"button\", { name: \"Login\" }).click();\ncheckpoint(\"clicked-login\");\nawait page.waitForURL(\"**/ecommerce\");\ncheckpoint(\"navigation-complete\", { url: page.url() });"}, input);
});

When("The user performs a page action 2 [01KPDGEHG137AA07AXXH7YH3C0]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDGGDB11BVFPBA7J49DZGHE","type":"custom","code":"const addToCartButtons = page.getByRole(\"button\", { name: \"Add to cart\" });\nconst totalProducts = await addToCartButtons.count();\nconst targetCount = Math.floor(Math.random() * 2) + 2;\nconst indexes = Array.from({ length: totalProducts }, (_, i) => i)\n  .sort(() => Math.random() - 0.5)\n  .slice(0, targetCount);\n\nfor (const index of indexes) {\n  await addToCartButtons.nth(index).click();\n  checkpoint(`added-product-${index + 1}`);\n  await page.waitForTimeout(500);\n  checkpoint(`post-add-wait-${index + 1}`);\n}"}, input);
});

When("The user navigates to the cart page [01KPDGGDB1XP1Z1NTTW3DBBK7Q]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDGH8MR62Z7XS02Z3YGSMNP","type":"custom","code":"await page.getByRole(\"button\", { name: \"2\" }).click();\ncheckpoint(\"clicked-cart\");\nawait page.waitForURL(\"**/cart\");\ncheckpoint(\"navigation-complete\", { url: page.url() });"}, input);
});

When("The user clicks on the checkout button [01KPDGH8MRAHRN89Z3G1MN6TEG]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDGMJZAA0MZEVB78B4TANGY","type":"custom","code":"await page.getByRole(\"button\", { name: \"Checkout\" }).click();\ncheckpoint(\"clicked-checkout\");\n\nawait page.getByRole(\"button\", { name: \"Continue\" }).click();\ncheckpoint(\"clicked-continue\");\n\nawait page.getByRole(\"button\", { name: \"Finish\" }).click();\ncheckpoint(\"clicked-finish\");\nawait page.waitForURL(\"**/ecommerce/checkout-complete\");\ncheckpoint(\"navigation-complete\", { url: page.url() });"}, input);
});

When("Verify text \"Thank you for your order!\" is found in the page [01KPDGMJZA28BVNDB0RSTN6ASV]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDGPWVWA46M7FWBJJMC6HPF","type":"page.assertion","data":{"type":"toContainText","value":{"type":"string","value":"Thank you for your order!"}},"target":null,"isNegativeAssertion":false}, input);
});

When("Verify element property [01KPDGPWVWTGTA18NYVRRMV0P0]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDGQDR5Y41DDXTTKT6KCR78","type":"element.assertion","data":{"type":"toHaveText","value":{"type":"string","value":"Your order has been dispatched, and will arrive just as fast as the pony can get there!"}},"target":{"name":"bvt-54ay35p43","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"#checkout-complete >> p","strategy":"css"},{"type":"pw.selectorString","selectorString":"#checkout-complete >> internal:role=paragraph","strategy":"css"},{"type":"pw.selectorString","selectorString":"div.m-auto.border.rounded-sm.text-center > p.text-sm","strategy":"css"}]},"isNegativeAssertion":false,"editorMetadata":{"elementBvtId":"bvt-54ay35p43","elementName":"bvt-54ay35p43","availableProperties":{"tagName":"P","id":"","className":"text-sm","title":"","hidden":false,"tabIndex":-1,"textContent":"Your order has been dispatched, and will arrive just as fast as the pony can get there!"}}}, input);
});

