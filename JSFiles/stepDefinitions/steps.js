"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
let calc = new calculator_1.calculator();
let ah = new angularHomePage_1.angularHomePage();
var expect = chai_1.default.expect;
cucumber_1.Given('I will navigate to {string} website', (string) => __awaiter(this, void 0, void 0, function* () {
    if (string == "calc") {
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    }
    else if (string == "angular") {
        yield protractor_1.browser.get('https://angularjs.org/');
    }
    else {
        console.log("No url specified");
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEitBox.sendKeys(string2);
    yield calc.goBtn.click();
}));
cucumber_1.Then('Output displayed should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield calc.getResult.getText().then((text) => {
        expect(text).to.equal(string);
    });
}));
cucumber_1.When('I clicked on header link', () => __awaiter(this, void 0, void 0, function* () {
    yield ah.anglunarLink.click();
}));
cucumber_1.When('You will navigate to another page', () => __awaiter(this, void 0, void 0, function* () {
    console.log("Navigated to next page");
}));
cucumber_1.Then('Enter {string} into search text field', (string) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield ah.SearchText.sendKeys("Hello");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywwREFBdUQ7QUFDdkQsMkNBQXFDO0FBQ3JDLG9FQUFpRTtBQUVqRSxnREFBd0I7QUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDNUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDL0IsSUFBSSxNQUFNLEdBQUUsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV4QixnQkFBSyxDQUFDLHFDQUFxQyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFFMUQsSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO1FBQ2xCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztLQUNuRTtTQUNJLElBQUksTUFBTSxJQUFJLFNBQVMsRUFBRTtRQUMxQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDL0M7U0FDSTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUNuQztBQUVMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFFdEUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHFDQUFxQyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDekQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFTLEVBQUU7SUFDeEMsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWxDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUNBQW1DLEVBQUUsR0FBUyxFQUFFO0lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDM0QsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==