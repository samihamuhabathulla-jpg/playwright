import { test, expect } from "@playwright/test";

test("Login Test - Soft Assertion", async ({ page }) => {

    await page.goto("https://demoblaze.com/");

    await page.click("#login2");
    await page.fill("#loginusername", "samihaM");
    await page.fill("#loginpassword", "2005");
    await page.click("//button[text()='Log in']");

    await expect.soft(page.getByRole("link", { name: "Log out" })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Log out" })).toHaveText("Log out");
    await expect.soft(page.locator("#nameofuser")).toContainText("samihaM");

    console.log("Test execution continues even if a soft assertion fails.");
});