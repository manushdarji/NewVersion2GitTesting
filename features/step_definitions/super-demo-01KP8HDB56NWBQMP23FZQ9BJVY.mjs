import { Given, When, Then } from "@cucumber/cucumber";

Given("The user clicks on Playwright-Testing [01KPAQ3GXX9NHY9BP45YGD6SWX]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAQ4DF4KCFC1DFVCPF21RJP","type":"element.action","data":{"type":"click"},"target":{"name":"Playwright-Testing","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Playwright-Testing\"s","strategy":"text","description":"The text link that says \"Playwright-Testing\""},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^Playwright-Testing$/","strategy":"text","description":"The link that says \"Playwright-Testing\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Playwright-Testing\"s]","strategy":"text","description":"The link named \"Playwright-Testing\""},{"type":"pw.selectorString","selectorString":"body > ul:nth-child(5) > li:nth-child(17) > a","strategy":"css","description":"The link in the list on the page (17th item)"}]}}, input);
});

When("The user fills in the form details [01KPAQ4E2XCA2MYFKTDFR6ZHMD]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAQ601J45XVFT2CAB1VVYTF","type":"custom","code":"await page.getByLabel(\"Full Name\").fill(\"Manush Darji\");\ncheckpoint(\"filled-full-name\");\nawait page.getByLabel(\"Password\").first().fill(\"champa\");\ncheckpoint(\"filled-password\");\nawait page.waitForTimeout(300);\ncheckpoint(\"form-filled\");"}, input);
});

When("The user selects the role [01KPAQ601J1C53XR0C00AGKYEF]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAQ9XMQ9H7XKYFA1TPQ6R2R","type":"custom","code":"await page.getByRole(\"combobox\", { name: \"Role\" }).selectOption({ label: \"Admin\" });\ncheckpoint(\"selected-role-admin\");\nawait page.waitForTimeout(300);\ncheckpoint(\"role-selection-complete\");"}, input);
});

When("The user submits the form [01KPAQ9XMQGQ116GDREVWKNV16]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAQAY4G41JPGMM7XQ2R169G","type":"custom","code":"await page.getByRole(\"button\", { name: \"Submit Form\" }).click();\ncheckpoint(\"clicked-submit-form\");\nawait page.getByText(\"Form output will appear here…\").waitFor({ state: \"visible\" });\ncheckpoint(\"submit-form-complete\");"}, input);
});

When("The user clicks on Show toast and verifies the action completion message [01KPAQAY4G810KZ0RRB7WYTPN1]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAR10A2QRQSZAFT4FCWTW50","type":"custom","code":"await page.getByRole(\"button\", { name: \"Show Toast\" }).click();\ncheckpoint(\"clicked-show-toast\");\nawait page.getByText(\"Action completed!\").waitFor();\ncheckpoint(\"action-completed-visible\");"}, input);
});

