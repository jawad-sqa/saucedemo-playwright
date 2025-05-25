exports.ProductsPage= class ProductsPage{

    constructor(page){
        this.page=page;
        this.addToCartButton= page.getByRole('button', {name: 'Add to cart'});
        this.cartButton = page.locator("xpath=//div[@id='shopping_cart_container']//a[@class='shopping_cart_link']");
    }


    async clickAddToCartButton(){
        await this.addToCartButton.nth(1).click();
    }

    async clickCartButton(){
        await this.cartButton.click()
    }


}