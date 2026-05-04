import { Given, When, Then } from "@cucumber/cucumber";

Given("The user clicks on the Drag and Drop List option [01KPDAYYF1045580A8WBJK5CAA]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDAZ92Z841R9EWMR4DWC35H","type":"element.action","data":{"type":"click"},"target":{"name":"\"Drag and Drop List\" text","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Drag and Drop List\"s","strategy":"text","description":"The text that says \"Drag and Drop List\""},{"type":"pw.selectorString","selectorString":"span >> internal:has-text=/^Drag and Drop List$/","strategy":"text","description":"The span element that shows \"Drag and Drop List\""},{"type":"pw.selectorString","selectorString":"#drag-drop >> span","strategy":"css","description":"The span inside the drag-and-drop container"},{"type":"pw.selectorString","selectorString":"#drag-drop > span.text","strategy":"css","description":"The text span inside the drag-and-drop container"}]}}, input);
});

When("The user clicks on the Drag Me text [01KPDAZ9F5629Q4RVR9RTTR8R9]", async function () {
  const input = {};
  await this.executeCommand({"_id":"01KPDAZC8Q1CFG2XQ2SGW5DWSY","type":"element.action","data":{"type":"click"},"target":{"name":"\"Drag Me\" text","uniqueSelectors":[{"type":"pw.selectorString","selectorString":"internal:text=\"Drag Me\"s","strategy":"text","description":"The text that says \"Drag Me\""},{"type":"pw.selectorString","selectorString":"div >> internal:has-text=/^Drag Me$/","strategy":"text","description":"The container that contains the text \"Drag Me\""},{"type":"pw.selectorString","selectorString":"div.text-white.flex.items-center.justify-center.font-bold.cursor-move","strategy":"css","description":"The draggable text container"}]}}, input);
});

