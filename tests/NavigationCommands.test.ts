import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.setViewportSize({
        width: 1920,
        height: 1080
    });

    await page.goto('https://www.google.co.in');
    console.log('Google Title:', await page.title());
    await page.waitForTimeout(3000);

    await page.goto('https://www.flipkart.com');
    console.log('Flipkart Title:', await page.title());
    await page.waitForTimeout(3000);

    await page.goBack();
    console.log('After Back:', await page.url());
    await page.waitForTimeout(3000);

    await page.goForward();
    console.log('After Forward:', await page.url());
    await page.waitForTimeout(3000);

    await page.reload();
    console.log('Page Refreshed');
    await page.waitForTimeout(3000);

    console.log('Current URL:', page.url());
    console.log('Current Title:', await page.title());

    await browser.close();
})();