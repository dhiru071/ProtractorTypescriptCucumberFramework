import {After,Before, Status} from 'cucumber';
import { browser } from 'protractor';


Before({tags: "@calculatortesting"}, function () {
    browser.manage().window().maximize();
});

Before({tags: "@angulartesting"}, function () {
  console.log("I need to execute first...");
});

After(async function (scenario) {
    console.log("Test completed..");
    if(scenario.result.status===Status.FAILED)
    {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
  });