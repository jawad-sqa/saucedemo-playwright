import { expect } from '@playwright/test';
exports.ProductsPage= class ProductsPage{

    constructor(page){
        this.page=page;
        this.addToCartButton= page.getByRole('button', {name: 'Add to cart'});
        this.cartButton = page.locator("xpath=//div[@id='shopping_cart_container']//a[@class='shopping_cart_link']");
        this.removeButton=page.getByRole('button', {name:'Remove'});
        this.cartCount=page.locator("xpath=//div[@id='shopping_cart_container']//span[text()='1']");

    }


    async clickAddToCartButton(){
        await this.addToCartButton.nth(1).click();
    }

    async clickCartButton(){
        await this.cartButton.click()
    }

    async removeButtonAssert(text){
        await expect(this.removeButton).toHaveText(text);
    }

    async cartCountAssert(text){
        await expect(this.cartCount).toHaveText(text);
    }

    


}