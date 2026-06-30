import { test, expect } from '@playwright/test';

test('Mouse Actions Example', async ({ page }) => {

    await page.goto("https://demoqa.com/buttons");

    await page.locator("#doubleClickBtn").dblclick();
    await expect(page.locator("#doubleClickMessage")).toHaveText("You have done a double click");

    await page.locator("#rightClickBtn").click({
        button: 'right'
    });
    await expect(page.locator("#rightClickMessage")).toHaveText("You have done a right click");

    await page.locator("//button[text()='Click Me']").click();
    await expect(page.locator("#dynamicClickMessage"))
        .toHaveText("You have done a dynamic click");

    console.log("All Mouse Actions Executed Successfully");

});