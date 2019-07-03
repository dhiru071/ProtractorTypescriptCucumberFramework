import { Given, When, Then } from "cucumber";
import { calculator } from '../pageObjects/calculator';
import { browser } from "protractor";
import { angularHomePage } from '../pageObjects/angularHomePage';
import { async } from "q";
import chai from 'chai';
let calc = new calculator();
let ah = new angularHomePage();
var expect= chai.expect;

Given('I will navigate to {string} website', async (string) => {

    if (string == "calc") {
        await browser.get('https://juliemr.github.io/protractor-demo/');
    }
    else if (string == "angular") {
        await browser.get('https://angularjs.org/');
    }
    else {
        console.log("No url specified");
    }

});

When('I add two numbers {string} and {string}', async (string, string2) => {

    await calc.firstEditBox.sendKeys(string);
    await calc.secondEitBox.sendKeys(string2);
    await calc.goBtn.click();
});


Then('Output displayed should be {string}', async (string) => {
    await calc.getResult.getText().then((text) => {
        expect(text).to.equal(string);
    });
});

When('I clicked on header link', async () => {
    await ah.anglunarLink.click();

});

When('You will navigate to another page', async () => {
    console.log("Navigated to next page");
});

Then('Enter {string} into search text field', async (string) => {
    await browser.sleep(3000);
    await ah.SearchText.sendKeys("Hello");
});