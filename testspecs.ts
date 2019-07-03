import { browser, element, by } from "protractor";
import { async } from "q";
import { calculator } from "./pageObjects/calculator";
import { angularHomePage } from "./pageObjects/angularHomePage";

describe('Chain locator demo', () => {
    it('Open Angular js website', async () => {

        let calc = new calculator();
        await browser.get('https://juliemr.github.io/protractor-demo/');

        await calc.firstEditBox.sendKeys("3");
        await calc.secondEitBox.sendKeys("5");
        await calc.goBtn.click();

        calc.getResult.getText().then((text) => {
            console.log(text);
        });
    });

    it('Angular home page title validation', async () => {

        let ah = new angularHomePage();
        await browser.get("https://angularjs.org/");
        await ah.anglunarLink.click();
        await browser.sleep(3000);
        await ah.SearchText.sendKeys("Hello");

    });
});