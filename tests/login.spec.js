const {test, expect}= require("@playwright/test")
const {LoginPage} = require('../pages/LoginPage')




test('login user', async ({page})=>{
    const loginPage= new LoginPage(page);
    await loginPage.enterUserName(process.env.LOGIN_USERNAME);
    await loginPage.enterPassword(process.env.LOGIN_PASSWORD);
    await loginPage.clickLoginButton();
    await loginPage.assertHomePage("Products");
    
    
    
})



