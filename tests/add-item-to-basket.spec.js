import { test } from "@playwright/test"

test('Search product using navigation bar and add it to the basket', async({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/')
    await page.pause()
})