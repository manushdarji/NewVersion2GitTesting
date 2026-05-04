import { Given, When, Then } from "@cucumber/cucumber";

When("The user performs a page action or assertion 2 [01KPQN0T0RRBCNBS64VKKG8GMB]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQN53FY70EH6GMAG7GSX9N2","type":"custom","code":"const searchBox = page.getByRole('textbox', { name: 'Search' });\nawait searchBox.click();\nawait checkpoint('focused search bar');\n\nawait page.getByRole('textbox', { name: 'Search' }).fill('best animation sites');\nawait checkpoint('entered search query');"}, input);
});

When("The user performs a page action or assertion 3 [01KPQN53FY7A4R6NQMQFJE52YP]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQNRW51ZN28X6TC6F788A1C","type":"custom","code":"await page.getByRole('link', { name: 'View details Moducon-thumbnail' }).click();\nawait checkpoint('opened-first-site-result');\n// postcondition: text_present(Moducon)"}, input);
});

When("The user performs a page action or assertion 4 [01KPQNRW52EHHDRR32FRPE93DY]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQP1MDYTTR2SFCZ51097EE6","type":"custom","code":"await page.getByRole('link', { name: 'Apps' }).click();\ncheckpoint('clicked apps');"}, input);
});

When("The user clicks on the first site in the results [01KPQQ3443YKZA3B5GB8WBW43Q]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQQ3XJ3DCCS4BH6Z0KZZ0NZ","type":"custom","code":"await page.getByRole('link', { name: 'View details Moducon-thumbnail' }).click();\ncheckpoint('opened-first-site');\n// postcondition: text_present(Moducon)"}, input);
});

