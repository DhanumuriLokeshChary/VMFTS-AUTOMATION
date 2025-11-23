
const { BasePage } = require('./BasePage.js');                    
const { LoginLocators } = require('../locators/login.locators.js');
const {logindata} = require('../config/logindata.js');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.loc = LoginLocators;
  }

  async goto() {
    await this.page.goto(logindata.baseurl);
  }

  async login() {
    await this.page.fill(this.loc.usernameInput,logindata.username);
    await this.page.fill(this.loc.passwordInput, logindata.password);
    await this.page.click(this.loc.loginButton);
    console.log("LOGIN SUCCESS");
  }
}

module.exports = { LoginPage };