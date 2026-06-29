# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testSkip.test.ts >> Login Test - Soft Assertion
- Location: tests\testSkip.test.ts:3:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByRole('link', { name: 'Log out' })
Expected: "Log in"
Received: "Log out"
Timeout:  5000ms

Call log:
  - Expect "soft toHaveText" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Log out' })
    14 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
       - unexpected value "Log out"

```

```yaml
- link "Log out":
  - /url: "#"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Login Test - Soft Assertion", async ({ page }) => {
  4  | 
  5  |     await page.goto("https://demoblaze.com/");
  6  | 
  7  |     await page.click("#login2");
  8  |     await page.fill("#loginusername", "samihaM");
  9  |     await page.fill("#loginpassword", "2005");
  10 |     await page.click("//button[text()='Log in']");
  11 | 
  12 |     await expect.soft(page.getByRole("link", { name: "Log out" })).toBeVisible();
> 13 |     await expect.soft(page.getByRole("link", { name: "Log out" })).toHaveText("Log in");
     |                                                                    ^ Error: expect(locator).toHaveText(expected) failed
  14 |     await expect.soft(page.locator("#nameofuser")).toContainText("samihaM");
  15 | 
  16 |     console.log("Test execution continues even if a soft assertion fails.");
  17 | });
```