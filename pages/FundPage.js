const { BasePage } = require ('./BasePage');
const { FundData }  = require ('../config/FundData');
const {FundPageLocators} = require ('../locators/FundPage.locators');


class FundPage extends BasePage{

    constructor(page){
        super(page)
        this.locators = FundPageLocators;
        this.FundData = FundData;
    }

    async clickFund(){
        await this.page.getByText('Fund', { exact: true }).click();
    }
    async createFund(){
        await this.page.locator(this.locators.CreateFund).click();
    }

}
module.exports = FundPage;