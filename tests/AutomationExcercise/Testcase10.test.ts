import { test, expect } from '@playwright/test';

test('Subscription', async ({ page }) => {

    await page.goto('https://automationexercise.com');
    await expect(page).toHaveTitle(/Automation Exercise/);
    await page.locator('#footer').scrollIntoViewIfNeeded();
    await expect(page.locator('text=Subscription')).toBeVisible();
    await page.fill('#susbscribe_email', 'test123@gmail.com');
    await page.click('#subscribe');
    await expect(page.locator('#success-subscribe')).toContainText('You have been successfully subscribed!');
});