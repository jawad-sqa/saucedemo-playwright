import { expect } from '@playwright/test';
exports.LoginPage= class LoginPage{
    constructor(page){
        this.page=page;
        this.userNameField= page.getByPlaceholder('Username');
        this.passwordField=page.getByPlaceholder('Password');
        this.loginButton=page.getByRole('button', {name:'Login'})
        this.homePageTitle= page.getByText('Products')
    }


    async enterUserName(userName){
        await this.userNameField.fill(userName);
    }

    async enterPassword(password)
    {   
        await this.passwordField.fill(password)
    }

    async clickLoginButton()
    {
        await this.loginButton.click()
    }

    async assertHomePage(title){
        await expect(this.homePageTitle).toHaveText(title)
    }

}