import { test, expect } from '@playwright/test';

test('Login and Delete Account', async ({ page }) => {

  const email = `sami${Date.now()}@gmail.com`;
  const password = 'Samiha@2005';
  await page.goto('https://automationexercise.com/');

  await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  await page.getByRole('link', { name: ' Signup / Login' }).click();

  await page.locator('input[data-qa="login-email"]').fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);

  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await expect(page.locator('b')).toContainText('Account Deleted!');
});