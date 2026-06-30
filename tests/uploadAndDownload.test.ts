import { test } from '@playwright/test';
test('Upload a file', async ({ page }) => {

    await page.goto("https://demoqa.com/upload-download");
    await page.locator('#uploadFile').setInputFiles('C:/Users/Hp/Downloads/images.jpg');
    console.log("File Uploaded Successfully");

});
test('Download a file', async ({ page }) => {

    await page.goto("https://demoqa.com/upload-download");
    const downloadwait = page.waitForEvent('download');
    await page.locator('#downloadButton').click();
    const download = await downloadwait;
    await download.saveAs(`downloads/${download.suggestedFilename()}`);
    console.log("File Downloaded Successfully");
});