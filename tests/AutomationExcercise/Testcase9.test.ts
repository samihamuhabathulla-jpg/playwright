import { test, expect } from '@playwright/test';

test('Search Product', async ({ page }) => {

    await page.goto('https://automationexercise.com');
    await expect(page).toHaveTitle(/Automation Exercise/);
    await page.click('a[href="/products"]');
    await expect(page.locator('h2.title')).toContainText('All Products');
    await page.fill('#search_product', 'Blue Top');
    await page.click('#submit_search');
    await expect(page.locator('h2.title')).toContainText('Searched Products');
    await expect(page.locator('.productinfo p')).toContainText('Blue Top');

});
