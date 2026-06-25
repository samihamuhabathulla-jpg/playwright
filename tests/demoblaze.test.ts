import{chromium,test} from "@playwright/test"
test("Login Test Demo",async()=>{
    const browser=await chromium.launch({
        headless:false
    });
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.demoblaze.com/");
    await page.click("//a[@id='login2']")
    await page.fill("//input[@id='loginusername']","samihaM"),
    await page.fill("//input[@id='loginpassword']","2005")
    page.click("//button[text()='Log in']")
    page.waitForTimeout(5000);
    const page1=await context.newPage();
    await page1.goto("https://www.demoblaze.com/cart.html");
    await page1.waitForTimeout(5000);
})