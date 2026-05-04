import { Given, When, Then } from "@cucumber/cucumber";

Given("The user reloads the page [01KPQTH14E153QVRB24NGR42RE]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQTH3MJH52M2XGEHPZRSXDY","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the page 2 [01KPQTH3MJ0Z5FM90KWG28D9CA]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQTH4MA3NATNXD9Q560MSV7","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user selects the Titles presentation and accepts it [01KPQTH4MA9JQVP1DX8KP8Q1KF]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQV0MJRWRS25D3CS5PK3Z5S","type":"element.action","data":{"type":"click","options":{"position":{"x":2.671875,"y":10}}},"target":{"name":"presentation bvt-eyizp9t26","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"svg >> internal:and=\":near(:text(\\\"AllAll\\\"))\"","strategy":"css","description":"The dropdown arrow icon near the text \"AllAll\""},{"type":"pw.selectorString","selectorString":"internal:testid=[data-testid=\"category-selector-button\"s] >> svg","strategy":"css","description":"The SVG icon inside the category selector button"},{"type":"pw.selectorString","selectorString":"internal:label=\"All\"s >> svg","strategy":"css","description":"The SVG icon inside the \"All\" labeled control"},{"type":"pw.selectorString","selectorString":"svg.ipc-icon.ipc-icon--arrow-drop-down.ipc-btn__icon.ipc-btn__icon--post.searchCatSelector-button-post-icon","strategy":"css","description":"The dropdown arrow icon in the search category selector button"}]}}, input);
  await this.executeCommand({"_id":"01KPQV0P7F6T8TA3E73QWAX40A","type":"element.action","data":{"type":"click"},"target":{"name":"\"Titles\" presentation","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Titles\"s","strategy":"text","description":"The text option that says \"Titles\""},{"type":"pw.selectorString","selectorString":"span >> internal:has-text=/^Titles$/","strategy":"text","description":"The span element showing \"Titles\""},{"type":"pw.selectorString","selectorString":"li.ipc-list__item.searchCatSelector__item.searchCatSelector__item-tt > span.ipc-list-item__text[role=\"presentation\"]","strategy":"css","description":"The \"Titles\" item in the category list"}]}}, input);
  await this.executeCommand({"_id":"01KPQV0V0K66VTHEWK2M5971J8","type":"element.action","data":{"type":"click"},"target":{"name":"Accept","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Accept\"s","strategy":"text","description":"The button that says \"Accept\""},{"type":"pw.selectorString","selectorString":"button >> internal:has-text=/^Accept$/","strategy":"text","description":"The button with the text \"Accept\""},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Accept\"s]","strategy":"text","description":"The \"Accept\" button"},{"type":"pw.selectorString","selectorString":"internal:testid=[data-testid=\"accept-button\"s]","strategy":"css","description":"The accept button"},{"type":"pw.selectorString","selectorString":"button.icb-btn.sc-bdnyFh.sc-dlniIP.sc-iCoHzw.kTxEXP.jqScCk.kQxsXA","strategy":"css","description":"The \"Accept\" button element"}]}}, input);
});

When("The user performs a page action or assertion [01KPQV14NZFDZZC9QVRRS6GHRJ]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQV2FBSKPC0Y4A290WD78FC","type":"custom","code":"await page.getByRole('textbox', { name: 'Search IMDb' }).fill('Chris Hemsworth');\nawait checkpoint('entered Chris Hemsworth into search box');\n// postcondition: locator_visible(page.getByRole('button', { name: 'Submit search' }))"}, input);
});

When("The user clicks on MotorBike Messiah [01KPQV2FBSYVFPH55YKSJRMH7A]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQV3ZK08Y73MDYV156EC268","type":"custom","code":"const titleLink = page.getByRole('link', { name: 'Motorbike Messiah: Chris Hemsworth as Dementus', exact: true });\nawait titleLink.scrollIntoViewIfNeeded();\nawait titleLink.click();\nawait checkpoint('clicked Motorbike Messiah visible title link');\n// postcondition: url_matches(**/title/tt33342401/**)"}, input);
});

When("The user clicks on Short [01KPQV3ZK0VDSJBWR20YBN1KMB]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQV4KENWT2MZXEGMTCQ1SYG","type":"element.action","data":{"type":"click"},"target":{"name":"Short","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^Short$/ >> internal:and=\":near(:text(\\\"Chris Hemsworth\\\"))\"","strategy":"text","description":"The link that says \"Short\" near \"Chris Hemsworth\""},{"type":"pw.selectorString","selectorString":"internal:testid=[data-testid=\"interests\"s] >> internal:role=link[name=\"Short\"s]","strategy":"text","description":"The \"Short\" link inside the interests container"},{"type":"pw.selectorString","selectorString":"div.ipc-chip-list__scroller > a.ipc-chip.ipc-chip--on-baseAlt:nth-child(2)","strategy":"css","description":"The \"Short\" link in the chip list (2nd)"}]}}, input);
});

When("The user navigates back to the previous page [01KPQV4MRDVZRQ1S1QZPW1M6YX]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQV4SVGS12F388Y7VGF8V82","type":"page.action","data":{"type":"goBack"},"target":null}, input);
});

When("Verify text \"Sign in to create or view a list.\" is found in the page [01KPQV4SVGPTX0PNSB1KNNKZ49]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQV63CKGT2RRRJJGKZH1JH6","type":"page.assertion","data":{"type":"toContainText","value":{"type":"string","value":"Sign in to create or view a list."}},"isNegativeAssertion":false}, input);
});

When("The user clicks on Top Cast edit [01KPQV63CMF72HKKR61EXAA921]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQV668FDGW67R49SYQ2A1B9","type":"element.action","data":{"type":"click","options":{"position":{"x":16,"y":10.5}}},"target":{"name":"presentation bvt-e8dya0edf","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:label=\"Close Prompt\"s >> svg","strategy":"css","description":"The close icon inside the \"Close Prompt\" button"},{"type":"pw.selectorString","selectorString":"internal:role=button >> svg","strategy":"css","description":"The icon inside a button"},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Close Prompt\"s]","strategy":"text","description":"The \"Close Prompt\" button"},{"type":"pw.selectorString","selectorString":"svg.ipc-icon.ipc-icon--clear","strategy":"css","description":"The clear or close icon"}]}}, input);
  await this.executeCommand({"_id":"01KPQV6DXBHX8784ABBWAFHRGA","type":"element.action","data":{"type":"click"},"target":{"name":"Top Cast: edit","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Top Cast: edit\"s]","strategy":"text","description":"The \"Top Cast: edit\" button"},{"type":"pw.selectorString","selectorString":"internal:label=\"Top Cast: edit\"s","strategy":"css","description":"The element labeled \"Top Cast: edit\""},{"type":"pw.selectorString","selectorString":"internal:testid=[data-testid=\"title-cast-header\"s] >> internal:testid=[data-testid=\"ue-workflow-cta-edit\"s]","strategy":"text","description":"The edit button in the Top Cast section header"},{"type":"pw.selectorString","selectorString":"div.ipc-title.ipc-title--base.ipc-title--section-title.ipc-title--on-textPrimary[data-testid=\"title-cast-header\"] > div.ipc-title__wrapper > div.ipc-title__actions > button.ipc-responsive-button.ipc-btn--theme-base.ipc-responsive-button--transition-m.ipc-btn--on-textSecondary.ipc-responsive-button--half-padding.ipc-responsive-button--button-radius[aria-label=\"Top Cast\\\\: edit\"][data-testid=\"ue-workflow-cta-edit\"]:nth-child(1)","strategy":"css","description":"The \"Top Cast: edit\" button in the Top Cast section header (1st)"}]}}, input);
});

When("The user navigates to the home page [01KPQV6EG0XXX4F2YH3TTABZS0]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQV6RPKHGEP4KQJQF4AHGQJ","type":"element.action","data":{"type":"click"},"target":{"name":"Home","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Home\"s]","strategy":"text","description":"The link labeled \"Home\""},{"type":"pw.selectorString","selectorString":"#home_img_holder","strategy":"css","description":"The home image container"},{"type":"pw.selectorString","selectorString":"internal:label=\"Home\"s","strategy":"css","description":"The element labeled \"Home\""}]}}, input);
});

