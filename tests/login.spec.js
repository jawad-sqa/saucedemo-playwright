const {test, expect}= require("@playwright/test")
const {LoginPage} = require('../pages/LoginPage')




test('login user', async ({page})=>{
    const loginPage= new LoginPage(page);
    await loginPage.enterUserName('standard_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.clickLoginButton();
    await loginPage.assertHomePage("Products");
    
    
    
})



