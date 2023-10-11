import {NavigationBar} from "../../components/navigation-bar/navigation-bar";

export class MainPage {
    constructor(page) {
        this.page = page
        this.navigationBar = new NavigationBar(page)
    }

    visit = async () => {
        await this.page.goto("/")
    }
}