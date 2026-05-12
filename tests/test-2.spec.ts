import { test, expect } from '@playwright/test';

test('validate products API + UI', async ({ page, request }) => {
  const apiUrl = 'https://api.practicesoftwaretesting.com';

  // API call
  const response = await request.get(apiUrl + '/products');
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log('API count:', responseBody.length);

  // UI check
  await page.goto('https://www.practicesoftwaretesting.com/products');

  // Example: validate UI loaded
  await expect(page.locator('[data-test="product-name"]').first()).toBeVisible();
});