import { Given, When, Then } from "@cucumber/cucumber";

Given("The user accepts all [01KPAZFKKEQWB0K8F2T04VAEYY]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAZG36GBS8TKX4RXJHF76XD","type":"element.action","data":{"type":"click"},"target":{"name":"Acceptera alla","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Acceptera alla\"s","strategy":"text","description":"The button that says \"Acceptera alla\""},{"type":"pw.selectorString","selectorString":"button >> internal:has-text=/^Acceptera alla$/","strategy":"text","description":"The button with the text \"Acceptera alla\""},{"type":"pw.selectorString","selectorString":"internal:role=button[name=\"Acceptera alla\"s]","strategy":"text","description":"The \"Acceptera alla\" button"},{"type":"pw.selectorString","selectorString":"#truste-consent-button","strategy":"css","description":"The button with ID \"truste-consent-button\""}]}}, input);
});

When("The user selects the product [01KPAZGM5A3ZPHVVP3AKW21CP9]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAZJCAMH6MF9NDT53WQDABH","type":"element.action","data":{"type":"click"},"target":{"name":"Galaxy Buds4 Pro","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:label=\"Galaxy Buds4 Pro\"s","strategy":"css","description":"The item labeled \"Galaxy Buds4 Pro\""},{"type":"pw.selectorString","selectorString":"div.aem-Grid > section.bg-white:nth-child(14) > div > div > div.swiper-container.basic-swiper.swiper-container-initialized.swiper-container-horizontal.swiper-slide--beginning > div.swiper-wrapper[role=\"list\"] > div.swiper-slide.swiper-slide-next[role=\"listitem\"] > div:nth-child(1) > a","strategy":"css","description":"The link in the main content product carousel (2nd item)"}]}}, input);
});

When("Verify text \"Avancerad 2-vägs högtalare\" is found in the page [01KPAZJDHWSJXJFYGM0A5SHK0Q]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAZK2QM17W79AA6C63KWGG6","type":"page.assertion","data":{"type":"toContainText","value":{"type":"string","value":"Avancerad 2-vägs högtalare"}},"target":null,"isNegativeAssertion":false}, input);
});

When("Verify element property [01KPAZNYK6M22W88PKMASJQXHA]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAZP9P5H9452QB9DEC7WAYX","type":"element.assertion","data":{"type":"toHaveText","value":{"type":"string","value":"Galaxy Buds4 Pro"}},"target":{"name":"Galaxy Buds4 Pro","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"h1","strategy":"css"}]},"isNegativeAssertion":false,"editorMetadata":{"elementBvtId":"bvt-ra2j028c0","elementName":"Galaxy Buds4 Pro","availableProperties":{"tagName":"H1","id":"","className":"pdd39-anchor-nav__headline sg-product-display-name","title":"","hidden":false,"tabIndex":-1,"textContent":"Galaxy Buds4 Pro"}}}, input);
});

When("The user navigates to the wearables category [01KPAZP9P6P9ZHXMP3857KEH7N]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAZPF8SGG04VWCHAGFEAX28","type":"element.action","data":{"type":"click"},"target":{"name":"Wearables","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=menuitem[name=\"Wearables\"s] >> nth=0","strategy":"text","description":"The menu item labeled \"Wearables\" (1st)"},{"type":"pw.selectorString","selectorString":"#component-id > div:nth-child(1) > div > div:nth-child(2) > div > ul[aria-label=\"main menu\"][role=\"menubar\"]:nth-child(2) > li:nth-child(6) > div:nth-child(1) > a[role=\"menuitem\"]","strategy":"css","description":"The menu item in the main menu (6th)"}]}}, input);
});

When("The user selects the product 2 [01KPAZZN2SDB7R04F6EBP2HKSC]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPAZZR39N7WHAFYCGK4NWG0G","type":"element.action","data":{"type":"click"},"target":{"name":"Galaxy Watch Ultra (2025) (LTE, 47 mm)","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"a >> internal:has-text=\"Galaxy Watch Ultra (2025) (LTE, 47 mm)\"i","strategy":"text","description":"The link that says \"Galaxy Watch Ultra (2025) (LTE, 47 mm)\""},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=\"Galaxy Watch Ultra (2025) (\"i","strategy":"text","description":"The link that starts with \"Galaxy Watch Ultra (2025) (\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Galaxy Watch Ultra (2025) (LTE, 47 mm)\"s]","strategy":"text","description":"The link named \"Galaxy Watch Ultra (2025) (LTE, 47 mm)\""},{"type":"pw.selectorString","selectorString":"internal:label=\"Galaxy Watch Ultra (2025) (LTE, 47 mm)\"s","strategy":"css","description":"The element labeled \"Galaxy Watch Ultra (2025) (LTE, 47 mm)\""},{"type":"pw.selectorString","selectorString":"div.responsivegrid.aem-GridColumn > div.aem-Grid > div.aem-GridColumn > section:nth-child(3) > div[role=\"list\"] > div[role=\"listitem\"]:nth-child(1) > div:nth-child(3) > a","strategy":"css","description":"The link in the 3rd section inside the list, 1st item, 3rd container"}]}}, input);
});

When("The user purchases the product [01KPAZZRYX9GT9N1XGV964557F]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPB020YGH9PC97YVK2BC3T1G","type":"element.action","data":{"type":"click"},"target":{"name":"Köp","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Köp\"s","strategy":"text","description":"The link that says \"Köp\""},{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^Köp$/","strategy":"text","description":"The link with the exact text \"Köp\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Köp\"s]","strategy":"text","description":"The link named \"Köp\""},{"type":"pw.selectorString","selectorString":"#sgDevPriceAreaBase >> a","strategy":"css","description":"The link inside the price area container"},{"type":"pw.selectorString","selectorString":"#sgDevPriceAreaBase >> internal:role=link","strategy":"css","description":"The link inside the price area container"},{"type":"pw.selectorString","selectorString":"a.cta.cta--contained.cta--emphasis.anchorBtn","strategy":"css","description":"The emphasized call-to-action link"}]}}, input);
});

When("The user confirms the product purchase [01KPB04G8DQEGGV7RGYRCVJAS0]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPB09KPD3Q5E6HR20PEFH9VF","type":"element.action","data":{"type":"click"},"target":{"name":"Köp:Galaxy Watch Ultra (2025)","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"a >> internal:has-text=/^Köp$/","strategy":"text","description":"The link that says \"Köp\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Köp:Galaxy Watch Ultra (2025)\"s]","strategy":"text","description":"The link labeled \"Köp:Galaxy Watch Ultra (2025)\""},{"type":"pw.selectorString","selectorString":"a.cta.cta--contained.cta--emphasis.cta-target.add-special-tagging","strategy":"css","description":"The call-to-action link"}]}}, input);
});

When("The user navigates to the TV & Ljud category [01KPB0DSYJJDBYRK4CG6M868HD]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPB0DXVWCFE9BH2XAXKS0A5Z","type":"element.action","data":{"type":"click"},"target":{"name":"TV & Ljud","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=menuitem[name=\"TV & Ljud\"s] >> nth=0","strategy":"text","description":"The menu item labeled \"TV & Ljud\" (1st)"},{"type":"pw.selectorString","selectorString":" > li:nth-child(3) > div:nth-child(1) > a[role=\"menuitem\"]:nth-child(1)","strategy":"css","description":"The link in the 3rd list item container (1st)"}]}}, input);
});

When("The user selects the product 2 [01KPB0DZAJZ154A2FE6SRKH0H8]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPB0EGV2QY4YEVGHDV6YNBZ4","type":"element.action","data":{"type":"click"},"target":{"name":"Läs mer:65\\\" The Frame 4K Samsung Vision AI Smart TV (2025)","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Läs mer:65\\\\\\\" The Frame 4K Samsung Vision AI Smart TV (2025)\"s]","strategy":"text","description":"The link labeled \"Läs mer: 65\\\" The Frame 4K Samsung Vision AI Smart TV (2025)\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Läs mer:65\\\\\\\" The Frame 4K Samsung Vision AI Smart TV (2025)\"i]","strategy":"text","description":"The link labeled \"Läs mer: 65\\\" The Frame 4K Samsung Vision AI Smart TV (2025)\""},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Läs mer:65\\\\\\\" The Frame 4K\"i]","strategy":"text","description":"The link labeled \"Läs mer: 65\\\" The Frame 4K\""},{"type":"pw.selectorString","selectorString":"internal:label=\"Läs mer:65\\\\\\\" The Frame 4K Samsung Vision AI Smart TV (2025)\"s","strategy":"css","description":"The element labeled \"Läs mer: 65\\\" The Frame 4K Samsung Vision AI Smart TV (2025)\""},{"type":"pw.selectorString","selectorString":"internal:label=\"Läs mer:65\\\\\\\" The Frame 4K Samsung Vision AI Smart TV (2025)\"i","strategy":"css","description":"The element labeled \"Läs mer: 65\\\" The Frame 4K Samsung Vision AI Smart TV (2025)\""},{"type":"pw.selectorString","selectorString":"internal:label=\"Läs mer:65\\\\\\\" The Frame 4K\"i","strategy":"css","description":"The element labeled \"Läs mer: 65\\\" The Frame 4K\""},{"type":"pw.selectorString","selectorString":"div.responsivegrid.aem-GridColumn > div.aem-Grid > div.aem-GridColumn > section:nth-child(4) > div[role=\"list\"] > div[role=\"listitem\"]:nth-child(2) > div:nth-child(9) > div > a.cta.cta--outlined.cta--black","strategy":"css","description":"The outlined black link in a product list container (2nd item)"}]}}, input);
});

When("The user purchases the product 2 [01KPB0KA34KV6K3PD4G7GMCYEX]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPB0MH76J8XFYTJQ1X76K3S6","type":"element.action","data":{"type":"click"},"target":{"name":"Köp","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Informationsblad G 12 990 kr Ord. Pris14 990 kr Pris Spara 2 000 kr Gäller t.o.\"i >> internal:text=\"Köp\"s","strategy":"text","description":"The \"Köp\" link inside the product information section"},{"type":"pw.selectorString","selectorString":"internal:text=\"Informationsblad G 12 990 kr Ord. Pris14 990 kr Pris Spara 2 000 kr Gäller t.o.\"i >> a >> internal:has-text=/^Köp$/","strategy":"text","description":"The \"Köp\" link inside the product information section"},{"type":"pw.selectorString","selectorString":"internal:role=link[name=\"Köp\"s] >> nth=1","strategy":"text","description":"The \"Köp\" link (2nd)"},{"type":"pw.selectorString","selectorString":"span.cost-box__cta > a.cta.cta--contained.cta--emphasis.add-special-tagging.js-buy-now.tg-continue","strategy":"css","description":"The \"Köp\" call-to-action link in the price container"}]}}, input);
});

