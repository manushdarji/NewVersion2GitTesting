import { Given, When, Then } from "@cucumber/cucumber";

Given("The user reloads the browser page [01KPQY6VV29F60E28SD8VR9GZ7]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQY6YCVPW2N0K30WCBHJ6XV","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user reloads the browser page 2 [01KPQY6YCVJADRTC8AA37HFVNW]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQY6ZFXK33CZQTBB0YZHDR5","type":"page.action","data":{"type":"reload"},"target":null}, input);
});

When("The user declines and browses trailers [01KPQY6ZFXBP2757QWESY948B1]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQY78GDFDZHKWYCRG0S4T78","type":"element.action","data":{"type":"click"},"target":{"name":"Decline","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Decline\"s","strategy":"text","description":"The button that says \"Decline\""},{"type":"pw.selectorString","selectorString":"button >> internal:has-text=/^Decline$/","strategy":"text","description":"The \"Decline\" button"},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Decline\"s]","strategy":"text","description":"The button labeled \"Decline\""},{"type":"pw.selectorString","selectorString":"internal:testid=[data-testid=\"reject-button\"s]","strategy":"css","description":"The button with test ID \"reject-button\""},{"type":"pw.selectorString","selectorString":"button.icb-btn.sc-bdnyFh.sc-hKFymg.sc-fujznN.kTxEXP.kgKczh.fhqUfK","strategy":"css","description":"The button element with styling classes"}]}}, input);
  await this.executeCommand({"_id":"01KPQY7JC80TDGE2RAG7E6ES53","type":"element.action","data":{"type":"click"},"target":{"name":"Browse trailers","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Browse trailers\"s","strategy":"text","description":"The link that says \"Browse trailers\""},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^Browse trailers$/","strategy":"text","description":"The \"Browse trailers\" link"},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Browse trailers\"s]","strategy":"text","description":"The link labeled \"Browse trailers\""},{"type":"pw.selectorString","selectorString":"a.gsMull","strategy":"css","description":"The link element with class \"gsMull\""}]}}, input);
});

When("Sleep [01KPQYBF4XQ06MAWA5HHTETDXS]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQYBV2GAGK1R1MRN7DQR86E","type":"utility","data":{"type":"sleep","durationMs":5000}}, input);
});

When("The user opens a popular trailer [01KPQY7JVSY7VCMMYYNQSY60B0]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQY7Z4WGRMZCZATW7ERT6SD","type":"element.action","data":{"type":"click"},"target":{"name":"\"MOST POPULAR\" text","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"MOST POPULAR\"s","strategy":"text","description":"The text \"MOST POPULAR\""},{"type":"pw.selectorString","selectorString":"span >> internal:has-text=/^MOST POPULAR$/","strategy":"text","description":"The span that shows \"MOST POPULAR\""},{"type":"pw.selectorString","selectorString":"internal:testid=[data-testid=\"trailer-most-popular\"s] >> span","strategy":"css","description":"The span inside the \"most popular\" tab container"},{"type":"pw.selectorString","selectorString":"li.ipc-tab.ipc-tab--on-baseAlt[role=\"tab\"][data-testid=\"trailer-most-popular\"] > span","strategy":"css","description":"The \"MOST POPULAR\" tab label"}]}}, input);
  await this.executeCommand({"_id":"01KPQY84HFM4FTQXNHABAQXTF4","type":"element.action","data":{"type":"click"},"target":{"name":"Watch Weeks Ahead Trailer - Season 2 on IMDb","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"The Pitt\"s","strategy":"text","description":"The link that says \"The Pitt\""},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^The Pitt$/","strategy":"text","description":"The link labeled \"The Pitt\""},{"type":"pw.selectorString","selectorString":"div.ipc-sub-grid.ipc-sub-grid--wrap.bBboEf > div.ipc-poster-card.ipc-poster-card--baseAlt.ipc-poster-card--media-radius.ipc-poster-card--dynamic-width.ipc-sub-grid-item[role=\"group\"]:nth-child(2) > a.ipc-poster-card__title.ipc-poster-card__title--clickable.kHqYoO","strategy":"css","description":"The 2nd poster title link labeled \"The Pitt\" in the content grid"}]}}, input);
});

When("The user opens the weeks ahead trailer [01KPQY8597F1JFBBXZGNM8BB6F]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQY8F47482X8EFR6ZJ3M30R","type":"element.action","data":{"type":"click"},"target":{"name":"Watch Weeks Ahead Trailer - Season 2","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Watch Weeks Ahead Trailer - Season\"i] >> nth=1","strategy":"text","description":"The link labeled \"Watch Weeks Ahead Trailer - Season\" (2nd)"},{"type":"pw.selectorString","selectorString":"a.ipc-lockup-overlay.ipc-lockup-overlay--hover.ipc-focusable.ipc-focusable--constrained","strategy":"css","description":"The trailer link in the content container"}]}}, input);
});

When("The user attempts to play the trailer [01KPQY8FR180MKDN9ASZZC8Q8X]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPQY8N48WTT1GPAX223MD6PE","type":"element.action","data":{"type":"click"},"target":{"name":"Play","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Play\"s]","strategy":"text","description":"The \"Play\" button"},{"type":"pw.selectorString","selectorString":"internal:label=\"Play\"s","strategy":"css","description":"The control labeled \"Play\""},{"type":"pw.selectorString","selectorString":"div.jw-icon.jw-icon-display.jw-button-color.jw-reset","strategy":"css","description":"The play button in the video player"}]}}, input);
  await this.executeCommand({"_id":"01KPQY8R9V0CXC6G7DTD2S77YF","type":"element.action","data":{"type":"click"},"target":{"name":"\"This video file cannot be played.(Error Code: 224003)\" text","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"This video file cannot be played.(Error Code: 224003)\"s","strategy":"text","description":"The message that says \"This video file cannot be played. (Error Code: 224003)\""},{"type":"pw.selectorString","selectorString":"internal:text=\"This video file cannot be played.(Error Code: 224003)\"i","strategy":"text","description":"The error message saying \"This video file cannot be played. (Error Code: 224003)\""},{"type":"pw.selectorString","selectorString":"internal:text=\"This video file cannot be\"i","strategy":"text","description":"The error message starting with \"This video file cannot be\""},{"type":"pw.selectorString","selectorString":"div.jw-error-text.jw-reset-text","strategy":"css","description":"The video player error message text"}]}}, input);
});

