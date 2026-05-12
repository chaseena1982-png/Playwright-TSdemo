import { test, expect } from '@playwright/test';

test.describe('Google Login - Identifier Step', () => {

  test('should enter email and proceed to next step', async ({ page }) => {
    
    // Use clean base URL instead of long dynamic URL
    await page.goto('https://accounts.google.com/signin');

    // Stable locator using accessible role
    const emailInput = page.getByRole('textbox', { name: /email or phone/i });
    await expect(emailInput).toBeVisible();
   await emailInput.fill('cs.haseena');

    // Click Next
    const nextButton = page.getByRole('button', { name: /next/i });
    await expect(nextButton).toBeEnabled();
    await nextButton.click();

    // Wait for navigation (more reliable than waitForSelector alone)
    await page.waitForURL(/challenge|password/);

    // Validate next step (password field appears)
    const passwordField = page.locator('input[type="password"]');
    await expect(passwordField).toBeVisible({ timeout: 5000 });

  });

});