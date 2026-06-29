import { test, expect } from "@playwright/test";

test("Register User", async ({ page }) => {

    await page.goto("https://automationexercise.com/");
    await expect(page).toHaveTitle(/Automation Exercise/i);
    await page.getByRole("link", { name: "Signup / Login" }).click();
    await expect(page.getByText("New User Signup!")).toBeVisible();
    const email = `samiha${Date.now()}@gmail.com`;

    await page.locator("input[data-qa='signup-name']").fill("Samiha");
    await page.locator("input[data-qa='signup-email']").fill(email);
    await page.locator("button[data-qa='signup-button']").click();
    await expect(page.getByText("Enter Account Information")).toBeVisible();

    await page.locator("#id_gender2").check(); 
    await page.locator("#password").fill("Samiha@123");
    await page.locator("#days").selectOption("10");
    await page.locator("#months").selectOption("May");
    await page.locator("#years").selectOption("2005");
    await page.locator("#newsletter").check();
    await page.locator("#optin").check();

    await page.locator("#first_name").fill("Samiha");
    await page.locator("#last_name").fill("Muhabathulla");
    await page.locator("#company").fill("ABC Company");
    await page.locator("#address1").fill("123 Main Street");
    await page.locator("#address2").fill("Near Bus Stand");

    await page.locator("#country").selectOption("India");

    await page.locator("#state").fill("Tamil Nadu");
    await page.locator("#city").fill("Chennai");
    await page.locator("#zipcode").fill("600001");
    await page.locator("#mobile_number").fill("9876543210");


    await page.locator("button[data-qa='create-account']").click();
    await expect(page.getByText("Account Created!")).toBeVisible();
    await page.locator("a[data-qa='continue-button']").click();
    await expect(page.getByText("Logged in as")).toBeVisible();
    await page.getByRole("link", { name: "Delete Account" }).click();
    await expect(page.getByText("Account Deleted!")).toBeVisible();
    await page.locator("a[data-qa='continue-button']").click();

});