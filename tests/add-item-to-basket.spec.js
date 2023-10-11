import { expect, test } from "@playwright/test"

test.skip('Go to product page using navigation bar and add it to the basket', async({ page }) => {
    await page.goto('/')
    const women = page.getByRole('menuitem', { name: ' Women' })
    await women.hover()
    const womenBottoms = page.getByRole('menuitem', { name: ' Bottoms' })
    await womenBottoms.hover()
    const womenBottomsShorts = page.getByRole('menuitem', { name: 'Shorts' })
    await womenBottomsShorts.click()
    const shortsItem = page.getByRole('link', { name: 'Ina Compression Short' }).first()
    await shortsItem.click()
    const size28 = page.getByLabel('28')
    await size28.click()
    const colorBlue = page.getByLabel('Blue')
    await colorBlue.click()
    const addToBasketButton = page.getByRole('button', { name: 'Add to Cart' })
    const basket = page.locator('[data-block="minicart"] > a')
    await expect(basket).not.toContainText('1')
    await addToBasketButton.click()
    await expect(basket).toContainText('1')

    // await page.pause()
})