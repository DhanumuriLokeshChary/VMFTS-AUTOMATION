// pages/base/BasePage.js   ← idi copy-paste chey (professional & clean)

export class BasePage {
  constructor(page) {
    this.page = page;

    // Fixed browser size nuvvu adigina exact
    this.page.setViewportSize({ width: 950, height: 580 });

    // Slow motion 500ms (super useful learning ki & debugging ki)
    this.page.slowMo = 5000;
  }

  // Common methods anni pages lo use cheyochu
  async open(path = '') {
    await this.page.goto(process.env.BASE_URL + path, { waitUntil: 'networkidle' });
  }

  async waitAndClick(selector) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.click(selector);
  }

  async waitAndFill(selector, text) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.fill(selector, text);
  }

  async slowWait(seconds) {
    await this.page.waitForTimeout(seconds * 1000);
  }

  async takeScreenshot(name = 'screenshot') {
    await this.page.screenshot({ path: `screenshots/${name}-${Date.now()}.png` });
  }

  // Logout, toast check common methods optional ga add cheyochu
}

module.exports = { BasePage };