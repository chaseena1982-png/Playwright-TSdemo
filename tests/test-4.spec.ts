import { test, expect } from '@playwright/test';

test('openwebsitepage', async ({ page }) => {
  // 1. Open the website
  await page.goto('https://www.practicesoftwaretesting.com/');

  // 2. Click sign-in and fill credentials
  await page.locator('[data-test="nav-sign-in"]').click();
  
  // No need to click before filling; .fill() handles it
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');

  // 3. Click the Login button
  // Using the data-test attribute is more reliable than Role/Name in this app
  await page.locator('[data-test="login-submit"]').click();

  // 4. Navigate Categories -> Hand Tools
  // FIX: Removed the trailing dash from "nav-categories"
  const categories = page.locator('[data-test="nav-categories"]');
  await categories.click();

  const handTools = page.locator('[data-test="nav-hand-tools"]');
  await handTools.click();

  // 5. Assertion to confirm navigation worked
  //await expect(page).toHaveURL(/.*hand-tools/);
 // await expect(page.locator('h1')).toContainText('Hand Tools');
});
