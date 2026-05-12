import { test, expect } from '@playwright/test';

test('openwebsitepage', async ({ page }) => {

  await page.goto('https://www.practicesoftwaretesting.com/');

  // Click Sign In
  await page.locator('[data-test="nav-sign-in"]').click();

  // Fill login form
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');

  // Click login
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ WAIT FOR LOGIN TO COMPLETE (IMPORTANT)
  await page.waitForLoadState('networkidle');

  // ✅ VERIFY USER IS LOGGED IN (this is your missing step)
  await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();

  // Optional: go home
  await page.locator('[data-test="nav-home"]').click();

  // final check home is loaded
  await expect(page.locator('[data-test="nav-home"]')).toBeVisible();

  // 1️⃣ Click Categories tab
  const categoriesBtn = page.locator('[data-test="nav-categories"]');
  await categoriesBtn.click();

  // ✅ WAIT FOR LOGIN TO COMPLETE (IMPORTANT)
  await page.waitForLoadState('networkidle');

    // 3️⃣ Click "Hand Tools"
    await page.locator('[data-test="nav-power-tools"]').click();
  //await page.getByRole('link', { name: 'nav-Hand Tools' }).click();

});
