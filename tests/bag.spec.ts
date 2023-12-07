import {test} from '@playwright/test';
import { BagPage } from '../pages/BagPage';
import { MainPage } from "../pages/MainPage";

test.describe('Preparation for the New Year', () => {
    const products = {
        sweets: 'Набір Spell Шоколадна сніжинка',
        binge: {
            beefeaterPink:'Джин Beefeater Pink',
            beefeaterOrange:'Джин Beefeater Blood Orange'
        }
    };

    let mainPage: MainPage;
    let bugPage: BagPage;

    test.beforeEach(async ({ context }) => {
        const page = await context.newPage();
        mainPage = new MainPage(page);
        bugPage = new BagPage(page);
        await mainPage.goto(mainPage.mainPage)
    });

    test('Verify the correctness of counting items in the bag', async () => {
        await mainPage.fillInput(mainPage.searchInput, products.binge.beefeaterPink);
        await mainPage.click(await mainPage.selectOption(products.binge.beefeaterPink));
        await mainPage.click(mainPage.byButton)
        await bugPage.click(bugPage.buttonCloseModal);
        await mainPage.click(mainPage.clearSearchInputButton)

        await mainPage.fillInput(mainPage.searchInput, products.binge.beefeaterOrange);
        await mainPage.click(await mainPage.selectOption(products.binge.beefeaterOrange));
        await mainPage.click(mainPage.byButton)
        await bugPage.click(bugPage.buttonCloseModal);

        await mainPage.verifyBadgeTotal('2')

        await mainPage.click(mainPage.clearSearchInputButton)
        await mainPage.fillInput(mainPage.searchInput, products.binge.beefeaterPink);
        await mainPage.click(await mainPage.selectOption(products.binge.beefeaterPink));
        await mainPage.click(mainPage.byButton)
        await bugPage.click(bugPage.buttonCloseModal);

        await mainPage.verifyBadgeTotal('3')
    });
});
