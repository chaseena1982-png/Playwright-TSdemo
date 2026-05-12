import {test, expect} from '@playwright/test';
// reuse auth
test.use({ storageState: 'auth.json' });

test.describe('checkout test', () => {
   
 test.beforeEach(async ({page}) => {
    await page.goto('https://www.practicesoftwaretesting.com/');
});
test("buy now pay later", async({page})=> {
  await page.getByText('Thor Hammer').click();
      const addToCart = page.locator('[data-test="add-to-cart"]');
    await expect(addToCart).toBeVisible();
    await addToCart.click();
    await expect(page.locator('[data-test="cart-quantity"]')).toBeVisible();
    await page.locator('[data-test="nav-cart"]').click();
    await page.pause();
    const checkoutBtn = page.getByRole('button', { name: /proceed to checkout/i });
    await expect(checkoutBtn).toBeVisible();
   await checkoutBtn.click();
    
});

})


