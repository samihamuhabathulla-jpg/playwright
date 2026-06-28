import { chromium, test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    const browser = await chromium.launch({
        headless: false
    });
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();

  await page.locator('input[data-qa="login-email"]').fill('samiha19@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Samiha@2005');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
})