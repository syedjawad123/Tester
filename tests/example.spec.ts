import {test} from '@playwright/test';

test('Awsome test',async({page})=>{
    interface Awsome{
        email: string;
        password: string;
    }
    let name: Awsome = {email:"qa_test25@yahoo.com", password:"asdf.123"};
await page.goto("https://in.mail.yahoo.com/")
await page.waitForLoadState();
await page.locator("//a[text()='Sign in']").click();
await page.locator("//input[@id='login-username']").type(name.email);
await page.waitForTimeout(2000);
await page.locator("//input[@id='login-signin']").click();
await page.waitForTimeout(3000);
await page.locator("//input[@id='login-passwd']").type(name.password);
await page.waitForTimeout(3000);
await page.locator("//button[@id='login-signin']").click();
await page.waitForLoadState('networkidle');
await page.waitForTimeout(5000);
await page.locator("//div[@data-test-id='virtual-list']/descendant::li[2]").click();
});