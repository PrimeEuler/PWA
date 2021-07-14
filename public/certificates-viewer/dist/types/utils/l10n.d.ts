/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import en from '../locales/en.json';
declare type ReplacerType = {
    pattern: string;
    replacer: any;
};
declare const MESSAGES_ALL: {
    en: {
        basicInformation: string;
        subjectName: string;
        issuerName: string;
        publicKeyInfo: string;
        signature: string;
        extensions: string;
        miscellaneous: string;
        download: string;
        "download.pem": string;
        "download.der": string;
        serialNumber: string;
        version: string;
        validity: string;
        issued: string;
        expired: string;
        algorithm: string;
        namedCurve: string;
        exponent: string;
        modulus: string;
        value: string;
        valid: string;
        revoked: string;
        issuer: string;
        name: string;
        publicKey: string;
        fingerprint: string;
        fingerprints: string;
        actions: string;
        details: string;
        testURLs: string;
        certificateDetails: string;
        holder: string;
        digestInfo: string;
        type: string;
    };
};
export declare type SupportedMessagesType = keyof typeof MESSAGES_ALL;
export declare class Localization {
    private locale;
    constructor();
    setLocale: (locale: SupportedMessagesType) => void;
    getLocale: () => string;
    getString(id: keyof typeof en, replacer?: ReplacerType): string | string[];
}
export declare const l10n: Localization;
export {};
