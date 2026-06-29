import { test, expect } from "@playwright/test";

test("Add review on product", async ({ page }) => {

    await page.goto("https://automationexercise.com/");
    await page.getByRole("link", { name: "Products" }).click();
    await expect(page).toHaveURL(/products/);
    await expect(page.getByText("All Products")).toBeVisible();

    await page.locator("a[href='/product_details/1']").click();
    await expect(page.getByText("Write Your Review")).toBeVisible();

    await page.locator("#name").fill("Samiha");
    await page.locator("#email").fill("samiha@gmail.com");
    await page.locator("#review").fill("This product is very good. I am satisfied with the quality.");
    await page.locator("#button-review").click();

    await expect(page.getByText("Thank you for your review.")).toBeVisible();

});