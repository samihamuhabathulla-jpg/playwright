import { test, expect } from "@playwright/test";

test("Remove Product From Cart", async ({ page }) => {

    await page.goto("https://automationexercise.com/");
    await expect(page).toHaveTitle(/Automation Exercise/i);
    await page.locator(".product-image-wrapper").first().hover();
    await page.locator(".product-overlay .add-to-cart").first().click();
    await page.getByRole("link", { name: "View Cart" }).click();
    await expect(page).toHaveURL(/view_cart/);
    await page.locator(".cart_quantity_delete").click();
    await expect(page.locator("#empty_cart")).toContainText("Cart is empty!");
});