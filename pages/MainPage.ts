import { BasePage } from '../pages/BasePage';
import {test} from "@playwright/test";

export class MainPage extends BasePage {

    searchInput = `input[name="search"]`;
    iconBadge = `rz-icon-badge span`;
    clearSearchInputButton = 'button.search-form__clear';
    byButton = '.product-carriage__buy-button button';

    async selectOption(value: string) {
        return `.search-suggest li[data-name*='${value}']`
    }

    async verifyBadgeTotal(expectedCount: string) {
        const count = this.getText(this.iconBadge)
        test.expect(count).toBe(expectedCount)
    }

}
