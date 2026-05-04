import { Given, When, Then } from "@cucumber/cucumber";

Given("The user selects the gender option [01KP8G7Y5MQEM7DCHG7F8TRBNQ]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KP8GAGT44WN6D7QSAE1K3KZT","type":"custom","code":"const genderButton = page.getByRole('button', { name: 'Gender (0 selected)' });\nawait genderButton.scrollIntoViewIfNeeded();\nawait genderButton.click();\nawait checkpoint('opened gender filter');\n\nconst menCheckbox = page.getByRole('checkbox', { name: 'Men (166 products)' });\nawait menCheckbox.scrollIntoViewIfNeeded();\nawait helpers.activatePreferredInteractiveTarget(menCheckbox);\ncheckpoint('selected men gender filter');"}, input);
});

When("The user selects the product size and adds the item to the cart [01KP8GAGT5XPS7Q7WXP1Q57Z87]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KP8GN2TQZK9TF877Y65RGW25","type":"custom","code":"const sizeOption = page.getByRole('radio', { name: '10 10' }).first();\nawait sizeOption.scrollIntoViewIfNeeded();\nawait helpers.activatePreferredInteractiveTarget(sizeOption);\ncheckpoint('selected-size-10');\n\nawait page.getByRole('button', { name: 'Add to cart' }).first().click();\nawait checkpoint('added_to_cart');"}, input);
});

