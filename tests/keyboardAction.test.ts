import { test, expect } from '@playwright/test';

test('Keyboard Actions - DemoBlaze Login', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").click();
    await page.keyboard.type("samihaM");
    await page.keyboard.press("Tab");
    await page.keyboard.type("2005");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await expect(page.locator("#nameofuser")) .toContainText("Welcome samihaM");

});