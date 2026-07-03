import {test, expect} from '@playwright/test';

test('example test', async ({ page }) => 
{
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
  console.log("Hello Google")
  console.log("Hello Google! How are you doing today?");
  console.log("Hello Google! How are you doing today? I hope you are having a great day!");
});
