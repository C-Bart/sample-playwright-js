import { expect, test } from "@playwright/test";
import { MainPage } from "../pages/main-page/main-page";
import { Women } from "../components/navigation-bar/navigation-selectors";
import { ProductsListPage } from "../pages/products-list-page/products-list-page";
import { ProductPage } from "../pages/product-page/product-page";
import { Colors, Sizes } from "../pages/product-page/product-selectors";

test('Find two items using navigation bar and buy them', async ({ page }) => {
    const mainPage = new MainPage(page)
    await mainPage.visit()

    // Search and add to the cart first item
    await mainPage.navigationBar.moveTo([Women.Women, Women.Bottoms, Women.Shorts])
    const productsListPage = new ProductsListPage(page)
    await productsListPage.goToProductSelectedByName('Ina Compression Short')
    const productPage = new ProductPage(page)
    await productPage.selectSize(Sizes.s28)
    await productPage.selectColor(Colors.Blue)
    await productPage.addToCart()
    await productPage.isSuccessAddedItemMessageDisplayed('Ina Compression Short')

    // Search and add to the cart second item
    await productPage.navigationBar.moveTo([Women.Women, Women.Tops, Women.BrasAndTanks])
    await productsListPage.goToProductSelectedByName('Prima Compete Bra Top')
    await productPage.selectSize(Sizes.XS)
    await productPage.selectColor(Colors.Blue)
    await productPage.addToCart()
    await productPage.isSuccessAddedItemMessageDisplayed('Prima Compete Bra Top')

    // Go to the cart and proceed payment

})

test.skip('Find item using search bar and buy it', async ({ page }) => {

})