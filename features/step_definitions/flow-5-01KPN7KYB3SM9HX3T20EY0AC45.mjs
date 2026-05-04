import { Given, When, Then } from "@cucumber/cucumber";

Given("The user opens the profile [01KPN7NJN5X1VKADE8WMAXYRD5]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN7P5ERN4T6V30HGN901RJK","type":"element.action","data":{"type":"click"},"target":{"name":"\"\n  \n\" img","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:label=\"Dismiss\"s >> svg","strategy":"css","description":"The icon inside the \"Dismiss\" button"},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Dismiss\"s]","strategy":"text","description":"The \"Dismiss\" button"},{"type":"pw.selectorString","selectorString":"svg.artdeco-icon.lazy-loaded","strategy":"css","description":"The decorative icon image"}]}}, input);
  await this.executeCommand({"_id":"01KPN7PBNFHQB945RP3KDRJA92","type":"element.action","data":{"type":"click"},"target":{"name":"Click here to view Guy Arieli’s profile Guy Arieli","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Click here to view Guy Arieli’s profile Guy Arieli\"s]","strategy":"text","description":"The link labeled \"Click here to view Guy Arieli’s profile Guy Arieli\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Click here to view Guy Arieli’s profile Guy Arieli\"i]","strategy":"text","description":"The link labeled \"Click here to view Guy Arieli’s profile Guy Arieli\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Click here to view Guy Arieli\"i]","strategy":"text","description":"The link labeled \"Click here to view Guy Arieli\""},{"type":"pw.selectorString","selectorString":"div.details.mx-details-container-padding > section.core-section-container.core-section-container--with-border.border-solid.border-color-border-faint:nth-child(3) > div.core-section-container__content.break-words > ul > li:nth-child(3) > a.base-card.relative.w-full.hover\\:no-underline.focus\\:no-underline.base-card--link.base-main-card.flex.flex-wrap.base-main-card--link","strategy":"css","description":"The 3rd profile link inside the details container section"}]}}, input);
});

When("The user clicks the text element [01KPN7PDE7VAV5X32EZQKWXMMS]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN7PJ3BQ1DDJPA9K2M75N20","type":"element.action","data":{"type":"click"},"target":{"name":"text bvt-ir1ad2uii","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:label=\"Dismiss\"s >> path","strategy":"css","description":"The icon path inside the \"Dismiss\" button"},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Dismiss\"s]","strategy":"text","description":"The \"Dismiss\" button"},{"type":"pw.selectorString","selectorString":"svg.artdeco-icon.lazy-loaded > path","strategy":"css","description":"The icon path inside the lazy-loaded artdeco icon"}]}}, input);
});

When("Verify text \"Guy Arieli\" is found in the page [01KPN7PW56C0KRXFDV5YR2SGTK]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPN7QBJ1JMKVZ8PZHJYKDA6S","type":"page.assertion","data":{"type":"toContainText","value":{"type":"string","value":"Guy Arieli"}},"target":null,"isNegativeAssertion":false}, input);
});

