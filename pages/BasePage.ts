import { Page } from '@playwright/test';
export class BasePage {
    readonly page: Page;

    mainPage = 'https://rozetka.com.ua/ua'

    constructor(page:Page) {
        this.page = page;
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async reload() {
        await this.page.reload();
    }

    async click(elem: string) {
        await this.page.locator(elem).click();
    }

    async fillInput(elem: string, text: string) {
        await this.page.locator(elem).fill(text);
    }

    async getText(elem: string) {
        const element = this.page.locator(elem)
        const texts= element.textContent();
        return texts;
    }
}
