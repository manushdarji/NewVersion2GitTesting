import { Given, When, Then } from "@cucumber/cucumber";

Given("The user clicks to show more similar jobs [01KPN6Y005WC4EEMDS06A0HYWR]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN6YANCD9SYDFXCMP9BVM16","type":"element.action","data":{"type":"click"},"target":{"name":"\"\n  \n\" img","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:label=\"Dismiss\"s >> svg","strategy":"css","description":"The dismiss icon inside the \"Dismiss\" button"},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Dismiss\"s]","strategy":"text","description":"The \"Dismiss\" button"},{"type":"pw.selectorString","selectorString":"svg.artdeco-icon.lazy-loaded","strategy":"css","description":"The SVG icon with classes \"artdeco-icon lazy-loaded\""}]}}, input);
  await this.executeCommand({"_id":"01KPN6Z653W6PRNJ32FF9PSPPP","type":"element.action","data":{"type":"click"},"target":{"name":"Show more jobs like this","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Show more jobs like this\"s","strategy":"text","description":"The button that says \"Show more jobs like this\""},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Show more jobs like this\"s]","strategy":"text","description":"The \"Show more jobs like this\" button"},{"type":"pw.selectorString","selectorString":"[data-test-id=\"browse-jobs\"] >> button","strategy":"css","description":"The button inside the browse jobs section"},{"type":"pw.selectorString","selectorString":"[data-test-id=\"browse-jobs\"] >> internal:role=button","strategy":"css","description":"The button inside the browse jobs section (2nd)"},{"type":"pw.selectorString","selectorString":"section.right-rail.papabear\\:w-right-rail-width.papabear\\:ml-column-gutter.mamabear\\:px-mobile-container-padding.babybear\\:px-mobile-container-padding > section.aside-section-container:nth-child(2) > div.aside-section-container__content.break-words > div.show-more-less > button.show-more-less__button.show-more-less__more-button.show-more-less-button","strategy":"css","description":"The show more button in the right rail section"}]}}, input);
});

When("Verify text \"Funding\" is found in the page [01KPN6ZEKR7ZH0G8A6EBCWN7N8]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN6ZY1HX0R3AJ4Q9C37PG0P","type":"page.assertion","data":{"type":"toContainText","value":{"type":"string","value":"Funding"}},"target":null,"isNegativeAssertion":false}, input);
});

When("Verify element property [01KPN6ZY1HMW1H94R6Q54FTBWY]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN709BG1W9FHTKN9XJCD7W0","type":"element.assertion","data":{"type":"toHaveText","value":{"type":"string","value":"BlinqIO"}},"target":{"name":"bvt-m673hagsx","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"section.right-rail.papabear\\:w-right-rail-width.papabear\\:ml-column-gutter.mamabear\\:px-mobile-container-padding.babybear\\:px-mobile-container-padding > section.aside-section-container:nth-child(3) > div.aside-section-container__content.break-words > a.link-styled.text-sm.inline-block.\\!text-color-text-secondary > span:nth-child(1)","strategy":"css"}]},"isNegativeAssertion":false,"editorMetadata":{"elementBvtId":"bvt-m673hagsx","elementName":"bvt-m673hagsx","availableProperties":{"tagName":"SPAN","id":"","className":"","title":"","hidden":false,"tabIndex":-1,"textContent":"\n                  BlinqIO\n                "}}}, input);
});

When("The user clicks to see more info on Crunchbase [01KPN709BH9K72KHVGBTJGP59A]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN70HVTPN65RXHK7PA3A4N6","type":"element.action","data":{"type":"click"},"target":{"name":"See more info on crunchbase","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"See more info on crunchbase\"s","strategy":"text","description":"Click the link that says \"See more info on crunchbase\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"See more info on crunchbase\"s]","strategy":"text","description":"The link labeled \"See more info on crunchbase\""},{"type":"pw.selectorString","selectorString":"a.btn-md.btn-secondary.inline-block","strategy":"css","description":"The medium secondary link button displayed inline"}]},"config":{"postCommandDelay":5000}}, input);
});

When("The user reloads the page [01KPN70JBY8DDEJEP5S6984J0H]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN70ZA7JV5SHXEKGK1XRZYF","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the page 2 [01KPN70ZA865PTMAT602VBQR8S]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN70ZB3HY8GDN2F725NKJW2","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the page 2 [01KPN70ZB3BG8RD22MNW5P42GH]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN70ZBRRV88X36Y2GQE0YS3","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the page 2 [01KPN71V49N1MRBA3WRRGNF4CQ]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN71V4RBDJKKJ3RT720QMND","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the page 2 [01KPN71V4R4HK8W75EZ8S7EH5P]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN71V7J1F8C7SD5J589KJJC","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the page 2 [01KPN71V7KWYSZPN1R92WAWWJQ]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN71V863V5E78GB98GGM60X","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the page 2 [01KPN73TQK4N8N09H6CRB2V5GG]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN73TR64P9WZXQTPM0HVQRA","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the page 3 [01KPN73TR6VERDKEFJ09KH7RBF]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN73TTTC6ZF2HSVKS3SHM65","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the page 4 [01KPN73TTT9ZZK45R3ADPFRGFM]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN73V3EA6TQ10ZVGG4T4XST","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the page 5 [01KPN73V3E19MA4H0AF6G9085Y]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN73V7QQEQQ9WH9RA0M57GJ","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the page 6 [01KPN73V7QT7700PX9DZE3EY00]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN73V87Y5K3HB51F5ZAFZ61","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

