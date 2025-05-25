const {test, expect}= require("@playwright/test")
const {LoginPage} = require('../pages/LoginPage')
const {ProductsPage}= require('../pages/ProductsPage')
const {CartPage}= require('../pages/cartPage')


test.beforeEach( async ({page})=>{
    await page.goto('https://www.saucedemo.com')
})



test('add to cart', async ({page})=>{
    const loginPage= new LoginPage(page);
    const productsPage=new ProductsPage(page);
    const cartPage=new CartPage(page);
    await loginPage.enterUserName('standard_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.clickLoginButton();
    await productsPage.clickAddToCartButton();
    await productsPage.clickCartButton()
    
    await cartPage.clickCheckoutButton();
    await cartPage.enterFirstName('jaw');
    await cartPage.enterLasttName('ad');
    await cartPage.enterZipCode('123');
    await cartPage.clickContinueButton();
    await cartPage.clickFinishButton();
})


