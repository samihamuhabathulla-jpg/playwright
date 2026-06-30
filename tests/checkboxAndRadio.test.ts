import { test, expect } from '@playwright/test';

test('Checkbox Example', async ({ page }) => {

    await page.goto("https://omayo.blogspot.com/");
    const checkbox = page.locator("#checkbox1");
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
});

test('Radio Button Example', async ({ page }) => {

    await page.goto("https://omayo.blogspot.com/");
    const radioButton = page.locator("input[value='female']");
    await radioButton.check();
    await expect(radioButton).toBeChecked();
});