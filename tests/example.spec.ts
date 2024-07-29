import { test, expect } from '../src/fixtures/base';

test('Checking title', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
  //Left console.log to check theme mode
  console.log()
});

test('Checking "Get Started" button', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  //Left console.log to check theme mode
  console.log()
});