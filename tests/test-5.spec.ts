import { test, expect } from '@playwright/test';
test('openwebsitepage',async({page})=>
  {
    // open the website and signin to user account
    await page.goto('https://www.practicesoftwaretesting.com/');
     // click the sign-in button
     await page.locator('[data-test="nav-sign-in"]').click();
     //await.expect(page.getByLabel('sign in')).toBeVisible();
     //await expect(page.getByRole('heading', { name: 'Email address' })).toBeVisible();
     await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com')
     await page.locator('[data-test="nav-sign-in"]').click();
     await page.locator('[data-test="email"]').click();
     await page.locator('[data-test="password"]').fill('welcome01');
      await page.getByRole('button', { name: 'Login' }).waitFor({ state: 'visible' });
     await page.getByRole('button', { name: 'Login' }).click();  
    // ✅ wait for homepage navigation element
await expect(page.locator('[data-test="nav-home"]')).toBeVisible();

// click home (optional)
await page.locator('[data-test="nav-home"]').click();
    
    /* // 1️⃣ Click Categories tab
  const categoriesBtn = page.locator('[data-test="nav-categories"]');
  await categoriesBtn.click();

  // 2️⃣ Wait for dropdown to be visible
  const dropdownOptions = page.locator('[data-test="nav-categories"] + div a');
  await expect(dropdownOptions.first()).toBeVisible();

  // 3️⃣ Click "Hand Tools"
  await page.getByRole('link', { name: 'Hand Tools' }).click();

  // 4️⃣ Validate navigation (URL)
  await expect(page).toHaveURL(/hand-tools/);

  // 5️⃣ Validate heading (page content)
  await expect(page.getByRole('heading', { level: 1 }))
    .toContainText('Hand Tools');*/
  }
   );

