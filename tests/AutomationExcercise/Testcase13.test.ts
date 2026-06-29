import { test, expect } from "@playwright/test";

test("Verify Product Quantity in Cart", async ({ page }) => {

    await page.goto("https://automationexercise.com");
    await expect(page).toHaveTitle(/Automation Exercise/i);
    await page.locator("a[href='/product_details/1']").click();
    await expect(page).toHaveURL(/product_details/);
    const quantity = page.locator("#quantity");
    await quantity.clear();
    await quantity.fill("4");
    await page.locator("button.cart").click();
    await page.getByRole("link", { name: "View Cart" }).click();
    const cartQuantity = await page.locator(".cart_quantity button").textContent();
    expect(cartQuantity?.trim()).toBe("4");

});