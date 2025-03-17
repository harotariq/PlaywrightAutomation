// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  // await page.locator('APjFqb');
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Login and Logout Flow', async ({ page }) => {
  // Navigate to the actual login page
  await page.goto('https://www.saucedemo.com/'); // Replace with the correct URL

  // Wait for username field and enter text
  const usernameField = page.locator('[data-test="username"]');
  await usernameField.waitFor();
  await usernameField.fill('standard_user');

  // Wait for password field and enter text
  const passwordField = page.locator('[data-test="password"]');
  await passwordField.waitFor();
  await passwordField.fill('secret_sauce');

  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Ensure successful login by checking for a product
  await expect(page.getByText('Products')).toBeVisible();

  // Add an item to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Open the menu and logout
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // Verify redirection to the login page after logout
  await expect(page.locator('[data-test="username"]')).toBeVisible();
});

// test('test', async ({ page }) => {
//   await page.goto('https://demoqa.com/');
//   await page.locator('svg').first().click();
//   await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click();
//   await page.getByRole('textbox', { name: 'Full Name' }).click();
//   await page.getByRole('textbox', { name: 'Full Name' }).fill('ahmad');
//   await page.getByRole('textbox', { name: 'name@example.com' }).click();
//   await page.getByRole('textbox', { name: 'name@example.com' }).fill('alam@gmail.com');
//   await page.getByRole('textbox', { name: 'name@example.com' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Current Address' }).fill('house 4');
//   await page.locator('#permanentAddress').click();
//   await page.locator('#permanentAddress').fill('house 4');
//   await page.getByRole('button', { name: 'Submit' }).click();
// });















