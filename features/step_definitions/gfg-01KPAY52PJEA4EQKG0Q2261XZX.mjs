import { Given, When, Then } from "@cucumber/cucumber";

Given("The user closes the modal [01KPAY5E22WTD0W0EB04WV5TN5]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAY5XDNQ9WMHGHJNAMQDMPC","type":"element.action","data":{"type":"click"},"target":{"name":"Close modal","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"×\"s","strategy":"text","description":"The button that says \"×\""},{"type":"pw.selectorString","selectorString":"button >> internal:has-text=/^×$/","strategy":"text","description":"The button with the text \"×\""},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Close modal\"s]","strategy":"text","description":"The \"Close modal\" button"},{"type":"pw.selectorString","selectorString":"internal:label=\"Close modal\"s","strategy":"css","description":"The button labeled \"Close modal\""},{"type":"pw.selectorString","selectorString":"button.ConsentModal_consentModal__closeButton__etaIZ","strategy":"css","description":"The close button in the consent modal"}]}}, input);
});

When("The user hovers on the Courses menu [01KPAYA4X0GC157SCQHKKJ0BM4]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAYAWE50W5V3P6NKCM4JE4D","type":"custom","code":"await page.getByText(\"Courses\").first().hover();\ncheckpoint(\"hovered-courses\");\nawait page.waitForTimeout(500);\ncheckpoint(\"hover-complete\");"}, input);
});

When("The user selects the Development option [01KPAYAWE5MTHGQ94323FN07DQ]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAYB8ZS630N7NZMFPP435B2","type":"element.action","data":{"type":"click"},"target":{"name":"Development","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Development\"s]","strategy":"text","description":"The link labeled \"Development\""},{"type":"pw.selectorString","selectorString":"ul.megaDropDown > li.megaDropDownListItem:nth-child(3) > a.inner_child","strategy":"css","description":"The link in the mega dropdown menu (3rd item)"}]}}, input);
});

When("The user selects the Self-Paced learning option [01KPAYBA64KJQM5906YXM8JCGK]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAYBEGSMJWDEKJN4RFK6AVV","type":"element.action","data":{"type":"click"},"target":{"name":"text bvt-7wdldnpny","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=listbox >> i","strategy":"css","description":"The icon inside the listbox dropdown"},{"type":"pw.selectorString","selectorString":"i.dropdown.icon","strategy":"css","description":"The dropdown icon"}]}}, input);
  await this.executeCommand({"_id":"01KPAYBFRR1MXJC2RPH36V0B2C","type":"element.action","data":{"type":"click"},"target":{"name":"\"Self-Paced\" text","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Self-Paced\"s","strategy":"text","description":"The option that says \"Self-Paced\""},{"type":"pw.selectorString","selectorString":"span >> internal:has-text=/^Self-Paced$/","strategy":"text","description":"The span element with text \"Self-Paced\""},{"type":"pw.selectorString","selectorString":"div.visible.menu.transition > div.item[role=\"option\"]:nth-child(2) > span.text","strategy":"css","description":"The \"Self-Paced\" option in the visible dropdown menu (2nd)"}]}}, input);
});

When("The user selects the Cloud \\/ DevOps option [01KPAYC8ZCKACXD2FJE6HZ2PYN]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAYCB5NGNY1G6DCRETTASAD","type":"element.action","data":{"type":"click"},"target":{"name":"\"Cloud / DevOps\" text","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Cloud / DevOps\"s","strategy":"text","description":"The text that says \"Cloud / DevOps\""},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^Cloud \\/ DevOps$/","strategy":"text","description":"The link that says \"Cloud / DevOps\""},{"type":"pw.selectorString","selectorString":"div.ui.pointing.secondary.sofia-pro.menu > div:nth-child(6) > a.item","strategy":"css","description":"The link in the secondary menu (6th item)"}]}}, input);
});

When("The user selects the MongoDB x GeeksforGeeks option [01KPAYCBQQCSFAR2G4JR4BTNK3]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAYCF0QTDP2995Q44XXRVFC","type":"element.action","data":{"type":"click"},"target":{"name":"\"MongoDB x GeeksforGeeks\" text","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"MongoDB x GeeksforGeeks\"s","strategy":"text","description":"The text that says \"MongoDB x GeeksforGeeks\""},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^MongoDB x GeeksforGeeks$/","strategy":"text","description":"The link that says \"MongoDB x GeeksforGeeks\""},{"type":"pw.selectorString","selectorString":"div.ui.pointing.secondary.sofia-pro.menu > div:nth-child(9) > a.item","strategy":"css","description":"The 9th link in the secondary menu container"}]}}, input);
});

When("The user selects the Exam Preparation option [01KPAYCFFKMNXCDP7PMMXNHD23]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAYCGVZ5K6VQWK2Z7GQQ1K6","type":"element.action","data":{"type":"click"},"target":{"name":"\"Exam Preparation\" text","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Exam Preparation\"s","strategy":"text","description":"The text that says \"Exam Preparation\""},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^Exam Preparation$/","strategy":"text","description":"The link that says \"Exam Preparation\""},{"type":"pw.selectorString","selectorString":"div.ui.pointing.secondary.sofia-pro.menu > div:nth-child(8) > a.item","strategy":"css","description":"The \"Exam Preparation\" link in the secondary menu (8th item)"}]}}, input);
});

When("The user clicks on the notification button [01KPAYEWN0Y9RS4AGX45YKGFPJ]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAYFVX745JS6HK3W0W5F849","type":"custom","code":"await page.getByRole(\"button\", { name: \"Sign In\" }).click();\ncheckpoint(\"clicked-sign-in\");\nawait page.waitForTimeout(1000);\ncheckpoint(\"post-click-wait\");"}, input);
});

