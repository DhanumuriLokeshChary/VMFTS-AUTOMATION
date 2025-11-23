const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.js');

test('LoginTest', async ({ page }) => {
  const login = new LoginPage(page);
  
  await login.goto();
  await login.login();



});

