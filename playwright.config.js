module.exports = {
  testDir: './',
  testMatch: '**/test-v3.js',
  use: {
    headless: true,
    baseURL: 'http://localhost:8000',
  },
  timeout: 30000,
  projects: [
    {
      name: 'chromium',
      use: { ...require('@playwright/test').devices['Desktop Chrome'] },
    },
  ],
};