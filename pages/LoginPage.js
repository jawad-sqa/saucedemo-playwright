exports.LoginPage= class LoginPage{
    constructor(page){
        this.page=page;
        this.userNameField= page.getByPlaceholder('Username');
        this.passwordField=page.getByPlaceholder('Password');
        this.loginButton=page.getByRole('button', {name:'Login'})

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
}