// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

// Smart environment loading – idi exact professional way
const envPath = 
  process.env.ENV === 'uat' ? '.env.uat' :
  process.env.ENV === 'prod' ? '.env.prod' :
  process.env.ENV === 'staging' ? '.env.staging' :
  '.env.dev';   // default dev

require('dotenv').config({ path: envPath, override: true });

// Debug log – terminal lo URL kanipistundi (super helpful)
console.log('Environment:', process.env.ENV || 'dev');
console.log('Base URL:', process.env.BASE_URL);

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,    // idi add chey
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});