import { Given, When, Then } from "@cucumber/cucumber";

Given("The user accepts all cookies [01KP87EYVAGGVQDATV8DWQYCWX]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KP87FC8E1AHZB0WFBZT57978","type":"element.action","data":{"type":"click"},"target":{"name":"Accept all","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Accept all\"s]","strategy":"text"},{"type":"pw.selectorString","selectorString":"#cmpwelcomebtnyes >> a","strategy":"css"},{"type":"pw.selectorString","selectorString":"#cmpwelcomebtnyes >> internal:role=button","strategy":"css"},{"type":"pw.selectorString","selectorString":"a.cmpboxbtn.cmpboxbtnyes.cmptxt_btn_yes","strategy":"css"}]}}, input);
  await this.executeCommand({"_id":"01KP87FZKCVMJVTNQNN06KZ79Z","type":"element.action","data":{"type":"click"},"target":{"name":"How it works","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"How it works\"s","strategy":"text"},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^How it works$/","strategy":"text"},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"How it works\"s]","strategy":"text"},{"type":"pw.selectorString","selectorString":"nav.navbar-expand-sm.nav-fill.d-none.d-lg-block > ul.navbar-nav.nav > li.nav-item:nth-child(4) > a.nav-link","strategy":"css"}]}}, input);
});

When("Verify text \"Discover the perks of being a Star Product tester:\" is found in the page [01KP87G11V65YFC4E8NWAGAGN1]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KP87GGPKTWFQ37VF27W8P8CE","type":"page.assertion","data":{"type":"toContainText","value":{"type":"string","value":"Discover the perks of being a Star Product tester:"}},"target":null,"isNegativeAssertion":false}, input);
});

When("Verify element property [01KP87GGPKGVRMPR5JFMQ2XMR3]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KP87H5VZ0GKYN90GR0YR07JJ","type":"element.assertion","data":{"type":"toHaveProperty","name":"textContent","value":{"type":"string","value":"Write Reviews and Apply for Product Tests"}},"target":{"name":"Write Reviews and Apply for Product Tests","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"#hiw22 >> h3","strategy":"css"},{"type":"pw.selectorString","selectorString":"#hiw22 >> internal:role=heading","strategy":"css"},{"type":"pw.selectorString","selectorString":"#appendedContent > div.rowGreg:nth-child(3) > div.columnText > div.textBlock > div.contentGF > h3.hiwTitles","strategy":"css"}]},"isNegativeAssertion":false,"editorMetadata":{"elementBvtId":"bvt-ne1mwxv6x","elementName":"Write Reviews and Apply for Product Tests","availableProperties":{"tagName":"H3","id":"","className":"hiwTitles","title":"","hidden":false,"tabIndex":-1,"textContent":"Write Reviews and Apply for Product Tests"}}}, input);
});

When("The user clicks on Live [01KP87H5VZSX8AZVB3DSZ7MKPG]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KP87H93CAKXRCWG0BH1R0BZ8","type":"element.action","data":{"type":"click"},"target":{"name":"Live","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Live\"s","strategy":"text"},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^Live$/","strategy":"text"},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Live\"s]","strategy":"text"},{"type":"pw.selectorString","selectorString":"ul.navbar-nav.nav > li.nav-item:nth-child(3) > a.nav-link","strategy":"css"}]}}, input);
});

When("Verify element property [01KP87HAGHT89DDDZKGHQFCDTD]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KP87KKHYXSJS533CTJY4ZS86","type":"element.assertion","data":{"type":"toHaveProperty","name":"className","value":{"type":"string","value":"headImage"}},"target":{"name":"T&R Live","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:attr=[alt=\"T&R Live\"s]","strategy":"text"},{"type":"pw.selectorString","selectorString":"internal:role=img[name=\"T&R Live\"s]","strategy":"text"},{"type":"pw.selectorString","selectorString":"img.headImage","strategy":"css"}]},"isNegativeAssertion":false,"editorMetadata":{"elementBvtId":"bvt-oy1shm4tj","elementName":"T&R Live","availableProperties":{"tagName":"IMG","id":"","className":"headImage","name":"","src":"https://www.tryandreview.com/uploads/images/products/description/LiveV2Header.png","alt":"T&R Live","title":"","hidden":false,"tabIndex":-1,"textContent":""}}}, input);
});

