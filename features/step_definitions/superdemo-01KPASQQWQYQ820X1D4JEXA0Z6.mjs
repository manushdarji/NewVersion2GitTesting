import { Given, When, Then } from "@cucumber/cucumber";

Given("The user clicks on Playwright-Testing [01KPASQZF431B08YENEHD72G5Y]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPASR97HC594ACR8VT20V0VC","type":"element.action","data":{"type":"click"},"target":{"name":"Playwright-Testing","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Playwright-Testing\"s","strategy":"text","description":"The text link that says \"Playwright-Testing\""},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^Playwright-Testing$/","strategy":"text","description":"The link labeled \"Playwright-Testing\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Playwright-Testing\"s]","strategy":"text","description":"The link named \"Playwright-Testing\""},{"type":"pw.selectorString","selectorString":"body > ul:nth-child(5) > li:nth-child(17) > a","strategy":"css","description":"The link in the 17th list item of the 5th list on the page"}]}}, input);
});

When("The user toggles all the switches [01KPASR9RTQMG1J4AF45H66TST]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPASTHE4DHPZ7XXACHYRB1YR","type":"custom","code":"await page.getByText(\"Dark Mode\").click();\ncheckpoint(\"toggled-dark-mode\");\nawait page.getByText(\"Analytics\").click();\ncheckpoint(\"toggled-analytics\");\nawait page.getByText(\"Beta Features\").click();\ncheckpoint(\"toggled-beta-features\");\nawait page.getByRole(\"switch\").click();\ncheckpoint(\"toggled-shadow-switch\");\nawait page.waitForTimeout(300);\ncheckpoint(\"toggle-complete\");"}, input);
});

When("The user deletes the first two records from the data table [01KPASTHE4MVB504FEFCHWCW12]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPASZQ7PTQ1C6JNZZFKNHR8M","type":"custom","code":"const firstDelete = page.getByRole(\"row\", { name: /001 Alice Chen alice@example\\.com Admin Active Edit Delete/ }).getByRole(\"button\", { name: \"Delete\" });\nawait firstDelete.click();\ncheckpoint(\"deleted-first-record\");\nawait page.waitForTimeout(300);\ncheckpoint(\"first-delete-complete\");\n\nconst secondDelete = page.getByRole(\"row\", { name: /002 Bob Martinez bob@example\\.com Editor Active Edit Delete/ }).getByRole(\"button\", { name: \"Delete\" });\nawait secondDelete.click();\ncheckpoint(\"deleted-second-record\");\nawait page.waitForTimeout(300);\ncheckpoint(\"second-delete-complete\");"}, input);
});

