export class ProductsListPage {
    constructor(page) {
        this.page = page
    }

    goToProductSelectedByName = async (name) => {
        const product = this.page.locator('[alt="' + name + '"]')
        await product.click()
    }
}