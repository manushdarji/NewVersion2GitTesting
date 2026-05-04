import { Given, When, Then } from "@cucumber/cucumber";

Given("The user performs a page action [01KPD3A4BTYN21SDGWW2PVPN90]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPD3C95YY7BCC8RDDDVG33V2","type":"custom","code":"await page.getByRole(\"textbox\", { name: \"Email*\" }).fill(\"qa_testers@qabrains.com\");\ncheckpoint(\"filled-email\");\nawait page.getByRole(\"textbox\", { name: \"Password*\" }).fill(\"Password123\");\ncheckpoint(\"filled-password\");"}, input);
});

When("The user clicks the login option [01KPD3DFGKFT3XGH55VFC8EJAB]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPD3DJ0K8B3B923EN1DAGZ57","type":"element.action","data":{"type":"click"},"target":{"name":"Login","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"button >> internal:has-text=/^Login$/","strategy":"text","description":"The \"Login\" button"},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Login\"s]","strategy":"text","description":"The button labeled \"Login\""},{"type":"pw.selectorString","selectorString":"button.btn-submit.uppercase.flex.items-center.justify-center.font-oswald","strategy":"css","description":"The submit button with uppercase text styling"}]}}, input);
});

When("Verify text \"Login Successful\" is found in the page [01KPD3DMBARX3TN9508ZZHQHFT]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPD3DVSFANEHMC00R80N85ZD","type":"page.assertion","data":{"type":"toContainText","value":{"type":"string","value":"Login Successful"}},"target":null,"isNegativeAssertion":false}, input);
});

When("Verify text \"Congratulations. You have successfully logged in. When you are done click logout below.\" is found in the page [01KPD3DVSFEVVJTMFWQHXX4BAD]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPD3E3W3XSPA80B95MD1FAM9","type":"page.assertion","data":{"type":"toContainText","value":{"type":"string","value":"Congratulations. You have successfully logged in. When you are done click logout below."}},"target":null,"isNegativeAssertion":false}, input);
});

When("The user clicks the logout option [01KPD3E3W33X5J74N7YV5XHR8T]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPD3E9K5NNGV3CF337M3GYW2","type":"element.action","data":{"type":"click"},"target":{"name":"Logout","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Logout\"s","strategy":"text","description":"The button that says \"Logout\""},{"type":"pw.selectorString","selectorString":"button >> internal:has-text=/^Logout$/","strategy":"text","description":"The button with the text \"Logout\""},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Logout\"s]","strategy":"text","description":"The \"Logout\" button"},{"type":"pw.selectorString","selectorString":"form >> button","strategy":"css","description":"The button inside the form"},{"type":"pw.selectorString","selectorString":"form >> internal:role=button","strategy":"css","description":"The button inside the form"},{"type":"pw.selectorString","selectorString":"button.btn-submit.uppercase.flex.items-center.justify-center.font-oswald","strategy":"css","description":"The button with classes \"btn-submit uppercase flex items-center justify-center font-oswald\""}]}}, input);
});

