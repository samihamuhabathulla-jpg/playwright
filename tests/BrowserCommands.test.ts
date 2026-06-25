import { test, expect } from '@playwright/test';

test('Browser command test',async({page})=>{
    await page.goto("https://www.google.com");
    const title = await page.title();
    console.log("Page title:",title);
    const html = page.content();
    console.log("Page HTML:",(await html).substring(0,300));
    console.log("Current URL is ",page.url);
    await page.close();
})