import { test, expect } from '@playwright/test';

test('footer contains "Built with matrix"', async ({ page }) => {
  await page.goto('/');
  const footer = await page.$('footer');
  expect(await footer?.textContent()).toContain('Built with matrix');
});
