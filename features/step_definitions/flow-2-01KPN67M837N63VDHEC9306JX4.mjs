import { Given, When, Then } from "@cucumber/cucumber";

Given("The user views all employees [01KPN67Y4ZEF5S4Z5P5MFZTGQM]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN68BZT6YFPW8RTY5QZE6A2","type":"element.action","data":{"type":"click"},"target":{"name":"\"\n  \n\" img","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:label=\"Dismiss\"s >> svg","strategy":"css","description":"The icon inside the \"Dismiss\" button"},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Dismiss\"s]","strategy":"text","description":"The \"Dismiss\" button"},{"type":"pw.selectorString","selectorString":"svg.artdeco-icon.lazy-loaded","strategy":"css","description":"The decorative icon image"}]}}, input);
  await this.executeCommand({"_id":"01KPN68JK48VZQ1E1YXFHK2BV1","type":"element.action","data":{"type":"click"},"target":{"name":"View all 20 employees","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"View all 20 employees\"s]","strategy":"text","description":"The link that says \"View all 20 employees\""},{"type":"pw.selectorString","selectorString":"[data-test-id=\"view-all-employees-cta\"] >> a","strategy":"css","description":"The link inside the employees section container"},{"type":"pw.selectorString","selectorString":"[data-test-id=\"view-all-employees-cta\"] >> internal:role=link","strategy":"css","description":"The employees link inside the employees section container"},{"type":"pw.selectorString","selectorString":"a.face-pile.flex.\\!no-underline","strategy":"css","description":"The \"View all 20 employees\" link"}]}}, input);
});

When("Sleep [01KPN6PJB1PHXQ0EZ6BDNV06CV]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN6PY4BGJJ7662ABZRDMT4C","type":"utility","data":{"type":"sleep","durationMs":5000}}, input);
});

When("The user navigates back to the previous page [01KPN68K7G1W0030PXXDWKFCMG]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN68V3NF5VT8HTBCBN2MQCM","type":"page.action","data":{"type":"goBack"},"target":null}, input);
});

When("The user navigates to the About us section [01KPN68V3P5YV91ERTEVXP729P]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN69CZZY2V6SXB0JJG9DPQT","type":"element.action","data":{"type":"click"},"target":{"name":"About us","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"About us\"s","strategy":"text","description":"The text that says \"About us\""},{"type":"pw.selectorString","selectorString":"internal:role=heading[name=\"About us\"s]","strategy":"text","description":"The \"About us\" heading"},{"type":"pw.selectorString","selectorString":"[data-test-id=\"about-us\"] >> h2","strategy":"css","description":"The heading inside the About us section"},{"type":"pw.selectorString","selectorString":"[data-test-id=\"about-us\"] >> internal:role=heading","strategy":"css","description":"The heading inside the About us section"},{"type":"pw.selectorString","selectorString":"section.core-section-container.core-section-container--with-border.border-solid.border-color-border-faint.text-color-text > h2.core-section-container__title.section-title","strategy":"css","description":"The section title heading"}]}}, input);
  await this.executeCommand({"_id":"01KPN69N5E9B1T2EYHQMBYRP4C","type":"element.action","data":{"type":"click"},"target":{"name":"text bvt-p2q3zmdal","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Games\"s]","strategy":"text","description":"The link labeled \"Games\""},{"type":"pw.selectorString","selectorString":"ul.top-nav-menu.flex.items-center.babybear\\:w-full.babybear\\:justify-between.justify-start.w-max.overflow-x-auto.after\\:papamamabear\\:up-down-divider.nav__menu.babybear\\:order-last.ml-auto > li:nth-child(5) > a.top-nav-link.flex.justify-center.items-center.hover\\:text-color-text.visited\\:hover\\:text-color-text.hover\\:no-underline.flex-col.text-color-text-secondary.visited\\:text-color-text-secondary > icon.top-nav-link__icon.flex.justify-center.lazy-loaded > svg.lazy-loaded > path","strategy":"css","description":"The Games navigation icon link in the top navbar (5th item)"}]}}, input);
});

When("The user opens the Piece it together Patches section [01KPN69NM3Z3TWV5RA652XAP5T]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN69T9TAM68C56K0RDGEJM4","type":"element.action","data":{"type":"click"},"target":{"name":"Piece it together Patches Patches","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Piece it together Patches Patches\"s]","strategy":"text","description":"The link labeled \"Piece it together Patches Patches\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Piece it together Patches Patches\"i]","strategy":"text","description":"The link labeled \"Piece it together Patches Patches\" (2nd)"},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Piece it together Patches\"i]","strategy":"text","description":"The link labeled \"Piece it together Patches\""},{"type":"pw.selectorString","selectorString":"ul.list-style-none.w-full > li:nth-child(1) > a.hover\\:no-underline.game-entrypoint-card","strategy":"css","description":"The 1st link in the game list container"}]}}, input);
});

When("Verify text \"Patches\" is found in the page [01KPN6A5Q8E9G2CC3SWR6WZT8C]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN6ADRMN9TCQG9EFFN1GNS5","type":"page.assertion","data":{"type":"toContainText","value":{"type":"string","value":"Patches"}},"target":null,"isNegativeAssertion":false}, input);
});

When("Verify text \"Piece it together\" is found in the page [01KPN6ADRMD3JNAWFTEDS112KG]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN6APY35QJP5QVSN9TA4QB2","type":"page.assertion","data":{"type":"toContainText","value":{"type":"string","value":"Piece it together"}},"target":null,"isNegativeAssertion":false}, input);
});

