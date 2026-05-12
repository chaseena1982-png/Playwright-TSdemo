import { test, expect } from '@playwright/test';

test('categories', async ({ page }) => {

  await page.goto('https://www.practicesoftwaretesting.com/');

  // Click Sign In
  await page.locator('[data-test="nav-sign-in"]').click();

  // Fill login form
  await page.locator('[data-test="email"]').fill('customer2@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');

  // Click login
  await page.getByRole('button', { name: 'Login' }).click();

   //await page.context().storageState({ path: 'auth.json' });
   //test.use({ storageState: 'auth.json' });
  // ✅ Wait for UI change instead
  await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();

  // 1️⃣ Click Categories tab
  const categoriesBtn = page.locator('[data-test="nav-categories"]');
  await expect(categoriesBtn).toBeVisible();
  await categoriesBtn.click();
 // await categoriesBtn.hover();

  // 2️⃣ Click "hand Tools"
  const handTools = page.locator('[data-test="nav-hand-tools"]');
  await expect(handTools).toBeVisible();
  await handTools.click();

  // 3️⃣ Select product (avoid hardcoding ID)
 const products = page.locator('[data-test^="product-"]');
await expect(products.nth(23)).toBeVisible();

const selectedProduct = products.nth(23);
await selectedProduct.click();

await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
await page.locator('[data-test="add-to-cart"]').click();

await expect(page.locator('[data-test="cart-quantity"]')).toBeVisible();

});