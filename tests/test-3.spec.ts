import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('button', { name: 'Playwright Test' }).click();
  await page.getByRole('link', { name: 'Actions' }).click();
  await page.getByRole('heading', { name: 'Checkboxes and radio' }).click();
  await page.getByRole('link', { name: 'API', exact: true }).click();
});