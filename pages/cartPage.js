exports.CartPage= class CartPage{

constructor(page)
{
    this.page=page;
    this.checkoutButton= page.getByRole('button',{name:'Checkout'});
    this.firstNameField=page.getByPlaceholder('First Name');
    this.lastNameField=page.getByPlaceholder('Last Name');
    this.zipCodeField=page.getByPlaceholder('Zip/Postal Code');
    this.continueButton=page.getByRole('button', {name: 'Continue'})
    this.finishButton=page.getByText('Finish')
}

async clickCheckoutButton(){
    await this.page.waitForTimeout(3000)
    await this.checkoutButton.click();
}

async enterFirstName(firstName)
{
    await this.firstNameField.fill(firstName)
}

async enterLasttName(lastName)
{
    await this.lastNameField.fill(lastName)
}

async enterZipCode(zipCode)
{
    await this.zipCodeField.fill(zipCode)
}

async clickContinueButton()
{
    await this.continueButton.click()
}

async clickFinishButton()
{
    await this.finishButton.click()
}

}