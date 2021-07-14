/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import en from '../locales/en.json';
const MESSAGES_ALL = {
    en,
};
export class Localization {
    constructor() {
        this.setLocale = (locale) => {
            this.locale = locale && MESSAGES_ALL[locale] ? locale : 'en';
        };
        this.getLocale = () => this.locale;
        const language = window.navigator.language.slice(0, 2).toLowerCase();
        this.setLocale(language);
    }
    getString(id, replacer) {
        const value = MESSAGES_ALL[this.locale][id];
        if (!value) {
            return '';
        }
        if (!replacer) {
            return value;
        }
        const splitted = value.split(replacer.pattern);
        if (splitted.length > 1) {
            return [
                splitted[0],
                replacer.replacer,
                splitted[1],
            ];
        }
        return value;
    }
}
export const l10n = new Localization();
