
import { ElementFinder, element, by } from "protractor";

export class calculator
{

    firstEditBox: ElementFinder;
    secondEitBox: ElementFinder;
    goBtn: ElementFinder;
    getResult: ElementFinder;


    constructor()
    {
        this.firstEditBox=element(by.model("first"));
        this.secondEitBox=element(by.model("second"));
        this.goBtn=element(by.id("gobutton"));
        this.getResult=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    }
}