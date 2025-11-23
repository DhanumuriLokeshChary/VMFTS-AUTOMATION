const { test } = require('@playwright/test');
const { FundPage} = require('../pages/FundPage');
const {LoginPage} = require('../pages/LoginPage');


test('Fund Create',async ({page})=>{
    const login = new LoginPage(page);
    await login.goto();
    await  login.statemakerlogin(); 
    
    const fund = new FundPage(page);
    await fund.clickFund();
    await fund.createFund();
    
})