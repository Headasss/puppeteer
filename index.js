const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://stockx.com/');

  const data = await page.evaluate(() => {
    // your JavaScript code here
    return data;
  });

  

  await browser.close();
}

run();

