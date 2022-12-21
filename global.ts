import { chromium, firefox, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext({storageState:'auth1.json'})
  const page = await context.newPage();
  await page.goto("https://in.mail.yahoo.com/");
  
  const browser2 = await firefox.launch({headless:false});
  const context2 = await browser2.newContext({storageState:'auth1.json'});
  const page2 = await context2.newPage();
  await page2.goto("https://pos-review.sapaad.com"); 
};

export default globalSetup;
