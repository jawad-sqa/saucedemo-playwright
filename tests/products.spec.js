const {test, expect}= require("@playwright/test")
const {LoginPage} = require('../pages/LoginPage')
const {ProductsPage}= require('../pages/ProductsPage')
const {CartPage}= require('../pages/cartPage')
require('dotenv').config();


test.beforeEach( async ({page})=>{
    await page.goto('https://www.saucedemo.com')
})



test('add to cart', async ({page})=>{
    const loginPage= new LoginPage(page);
    const productsPage=new ProductsPage(page);
    const cartPage=new CartPage(page);
    await loginPage.enterUserName(process.env.LOGIN_USERNAME);
    await loginPage.enterPassword(process.env.LOGIN_PASSWORD);
    await loginPage.clickLoginButton();
    await productsPage.clickAddToCartButton();
    await productsPage.removeButtonAssert('Remove')
    await productsPage.cartCountAssert('1')
    await productsPage.clickCartButton()
    await cartPage.clickCheckoutButton();
    await cartPage.checkOutAssert('Checkout: Your Information');
    await cartPage.enterFirstName('jawad');
    await cartPage.enterLasttName('akram');
    await cartPage.enterZipCode('5501');
    await cartPage.clickContinueButton();
    await cartPage.clickFinishButton();
    await cartPage.orderPlacedAssert('Thank you for your order!');

})


