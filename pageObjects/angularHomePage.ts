import { ElementFinder, element, by } from "protractor";

export class angularHomePage
{
    anglunarLink: ElementFinder;
    SearchText: ElementFinder;

    constructor()
    {
        this.anglunarLink=element(by.linkText("angular.io"));
        this.SearchText=element(by.css("input[type='search']"));
        
    }
}