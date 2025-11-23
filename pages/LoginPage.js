
const { BasePage } = require('./BasePage');                    
const { LoginLocators } = require('../locators/login.locators');
const {logindata, statemaker} = require('../config/logindata');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.loc = LoginLocators;
  }

  async goto() {
    await this.page.goto(logindata.baseurl);
  }

  async superadminlogin() {
    await this.page.fill(this.loc.usernameInput,logindata.username);
    await this.page.fill(this.loc.passwordInput, logindata.password);
    await this.page.click(this.loc.loginButton);
    console.log("LOGIN SUCCESS");
  }

  async statemakerlogin() {
    await this.page.fill(this.loc.usernameInput,statemaker.username);
    await this.page.fill(this.loc.passwordInput, statemaker.password);
    await this.page.click(this.loc.loginButton);
    console.log("LOGIN SUCCESS");
  }
}

module.exports = { LoginPage };