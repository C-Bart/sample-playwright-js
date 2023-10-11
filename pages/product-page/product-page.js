import { Selectors } from "./product-selectors";
import {NavigationBar} from "../../components/navigation-bar/navigation-bar";
import {expect} from "@playwright/test";

export class ProductPage {
    constructor(page) {
        this.page = page
        this.navigationBar = new NavigationBar(page)
    }

    selectColor = async (color) => {
        await this.page.locator(color).click()
    }

    selectSize = async (size) => {
        await this.page.locator(size).click()
    }

    addToCart = async () => {
        await this.page.locator(Selectors.AddToCartButton).click()
    }

    isSuccessAddedItemMessageDisplayed = async (itemName) => {
        await expect(this.page.locator(Selectors.SuccessMessage)).toContainText(itemName)
    }

}