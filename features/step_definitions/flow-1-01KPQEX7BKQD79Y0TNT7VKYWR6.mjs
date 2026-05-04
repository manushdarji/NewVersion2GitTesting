import { Given, When, Then } from "@cucumber/cucumber";

Given("The user clicks on Sort by [01KPQEXJMM5XSPB54701BK12NY]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQEYD47HDZBFKB15C9A1EXH","type":"element.action","data":{"type":"click"},"target":{"name":"Sort by","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"button >> internal:has-text=/^Popular$/","strategy":"text","description":"The button that says \"Popular\""},{"type":"pw.selectorString","selectorString":"internal:role=combobox[name=\"Sort by\"s]","strategy":"text","description":"The \"Sort by\" dropdown"},{"type":"pw.selectorString","selectorString":"#sort","strategy":"css","description":"The Sort by dropdown"},{"type":"pw.selectorString","selectorString":"internal:label=\"Sort by\"s","strategy":"css","description":"The field labeled \"Sort by\""},{"type":"pw.selectorString","selectorString":"internal:role=combobox","strategy":"css","description":"The dropdown"}]}}, input);
});

When("The user filters by popular sites [01KPQEYF4BP0NFP76XH511ADD8]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQF1SMVRASJERE8CHFR3S8E","type":"custom","code":"const popularOption = page.getByRole('option', { name: 'Popular' });\nawait popularOption.scrollIntoViewIfNeeded();\nawait helpers.activateWithRecovery(popularOption);\nawait checkpoint('selected popular sort');\n// postcondition: text_present(Popular)"}, input);
});

When("The user searches with search details [01KPQF1SMV1T41NJQNSNCV7N2V]", async function (_input) {
  const input = JSON.parse(_input?.trim() || "{}");
  await this.executeCommand({"_id":"01KPQF41TWQJ3M8S6YZP97W66K","type":"element.action","data":{"type":"click"},"target":{"name":"Search","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=textbox[name=\"Search\"s]","strategy":"text","description":"The search input field labeled \"Search\""},{"type":"pw.selectorString","selectorString":"internal:attr=[placeholder=\"Search\"s]","strategy":"css","description":"The input field with placeholder \"Search\""},{"type":"pw.selectorString","selectorString":"internal:role=textbox","strategy":"css","description":"The text input field"},{"type":"pw.selectorString","selectorString":"input.--styled-chPuon","strategy":"css","description":"The input field with class \"--styled-chPuon\""}]}}, input);
  await this.executeCommand({"_id":"01KPQF44N3ZV4ASKSMNA0KWQAX","type":"element.action","data":{"type":"fill","value":"<search_query>"},"target":{"name":"Search","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=textbox[name=\"Search\"s]","strategy":"text","description":"The search input field labeled \"Search\" (2nd)"},{"type":"pw.selectorString","selectorString":"internal:attr=[placeholder=\"Search\"s]","strategy":"css","description":"The input field with placeholder \"Search\" (2nd)"},{"type":"pw.selectorString","selectorString":"internal:role=textbox","strategy":"css","description":"The text input field (2nd)"},{"type":"pw.selectorString","selectorString":"input.--styled-chPuon","strategy":"css","description":"The input field with class \"--styled-chPuon\" (2nd)"}]}}, input);
});

When("The user searches with search criteria [01KPQF49800DZPWQF8PXB8ESBR]", async function (_input) {
  const input = JSON.parse(_input?.trim() || "{}");
  await this.executeCommand({"_id":"01KPQF49SFNFTBB53RFAJ5SN5K","type":"element.action","data":{"type":"fill","value":"<search_query_2>"},"target":{"name":"Search","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=textbox[name=\"Search\"s]","strategy":"text","description":"The search input field labeled \"Search\""},{"type":"pw.selectorString","selectorString":"input","strategy":"css","description":"The input field"},{"type":"pw.selectorString","selectorString":"internal:attr=[placeholder=\"Search\"s]","strategy":"css","description":"The input field with placeholder \"Search\""},{"type":"pw.selectorString","selectorString":"internal:role=textbox","strategy":"css","description":"The text input field"}]}}, input);
});

When("The user selects the first available site [01KPQF4ASE1J3RAXN23R67K4TM]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQF5QZEZAFR3M8KQM3KQVST","type":"custom","code":"await page.getByRole('link', { name: 'KPatel.xyz', exact: true }).click();\ncheckpoint('opened-first-site');\n// postcondition: text_present(KPatel.xyz)"}, input);
});

