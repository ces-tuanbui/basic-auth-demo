import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // const username = 'juggle';
  // const password = 'Juggl3F1sh';
  // const authHeader = 'Basic ' + btoa(username + ':' + password);
  // page.setExtraHTTPHeaders({ Authorization: authHeader });
  await page.goto('http://dev.juggle.codeenginestudio.com/login');
});
