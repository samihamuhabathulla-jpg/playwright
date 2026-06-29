import { test } from "@playwright/test";

test.only("Login", async ({ page }) => {
    console.log("Login");
});

test("Search", async ({ page }) => {
    console.log("Search");
});

test("Logout", async ({ page }) => {
    console.log("Logout");
});