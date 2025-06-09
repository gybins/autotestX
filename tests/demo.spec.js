import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';



const url = 'https://realworld.qa.guru/';
test.describe.only('Демо',() => { 
    test.beforeEach( async ({ page }) => {
  let womenProfileArray = [1, 1.1];
  let newUser  = {
    userName: faker.person.firstName('female'),
    userEmal: faker.internet.email(),
    userPassword: faker.internet.password(),
    "all is ok": () => {console.log('У вас все получится!')},
    getText: () => {console.log("И у меня все получится!")}

 };
newUser.mailMe = True;
newUser.mailMePlease = faker.person.firstName('female');

console.log()

      await page.goto(url); 
      

      await page.getByRole('link', { name: 'Sign up' }).click();  
      await page.getByRole('textbox', { name: 'Your Name' }).click();
      await page.getByRole('textbox', { name: 'Your Name' }).fill(userName);
      await page.getByRole('textbox', { name: 'Email' }).fill(userEmail);
      await page.getByRole('textbox', { name: 'Password' }).fill(userPassword);
      await page.getByRole('button', { name: 'Sign up' }).click();
      
  });
});