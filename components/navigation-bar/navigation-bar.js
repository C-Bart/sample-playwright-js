export class NavigationBar {
    constructor(page) {
        this.page = page
    }

    moveTo = async (section) => {
        if (Array.isArray(section)) {
            for (let i = 0; i < section.length; i++) {
                const element = this.page.locator(section[i])
                if (i === section.length - 1) {
                    await element.click()
                } else {
                    await element.hover()
                }
            }
        } else {
            throw new Error('Parameter should be an array')
        }
    }
}