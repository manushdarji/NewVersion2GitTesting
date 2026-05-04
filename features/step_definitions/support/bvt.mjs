import {
  setWorldConstructor,
  setDefaultTimeout,
  Before,
  After,
} from "@cucumber/cucumber";
import BVTWorld from "@dev-blinq/bvt-cucumber-js";

setDefaultTimeout(60 * 1000);

setWorldConstructor(BVTWorld);

Before(async function (scenario) {
  await this.beforeScenario(scenario);
});

After(async function (scenario) {
  await this.afterScenario(scenario);
});
