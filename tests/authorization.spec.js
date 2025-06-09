import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


const url = 'https://realworld.qa.guru/';
test.describe('Профиль пользователя',() => { 
  test.beforeEach( async ({ page }) => {
      await page.goto(url);
      let  userName = faker.person.firstName('female');
      let  userEmail = faker.internet.email();
      let  userPassword = faker.internet.password();

      await page.getByRole('link', { name: 'Sign up' }).click();  
      await page.getByRole('textbox', { name: 'Your Name' }).click();
      await page.getByRole('textbox', { name: 'Your Name' }).fill(userName);
      await page.getByRole('textbox', { name: 'Email' }).fill(userEmail);
      await page.getByRole('textbox', { name: 'Password' }).fill(userPassword);
      await page.getByRole('button', { name: 'Sign up' }).click();
  });



test('Пользователь может изменить био', async ({ page }) => {
  // todo клик по меню
  let aboutMe = faker.music.genre();
await page.locator('.dropdown-toggle').click();
await page.getByRole('link', { name: 'Settings' }).click();
await page.getByPlaceholder('Short bio about you').click();
await page.getByPlaceholder('Short bio about you').fill(aboutMe); 
await page.getByRole('button','Update Settings');

 
});
}); 
