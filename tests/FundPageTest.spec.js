const { test, expect } = require('@playwright/test');
const { LoginPage,FundPage } = require('../pages');

test('Fund Create',async ({page})=>{
    const login = new LoginPage(page);
    await login.goto();
    await  login.login(); 
    
    const fund = new FundPage(page);
    await fund.clickFund();
    await fund.createFund();
    
})