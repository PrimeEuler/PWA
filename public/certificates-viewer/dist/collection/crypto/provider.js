/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export class CryptoProvider {
    constructor() {
        this.providers = new Map();
        const crypto = window.crypto || window['msCrypto'];
        if (typeof crypto !== 'undefined') {
            this.set(CryptoProvider.DEFAULT, crypto);
        }
    }
    static isCryptoKeyPair(data) {
        return data && data.privateKey && data.publicKey;
    }
    get(key = CryptoProvider.DEFAULT) {
        const crypto = this.providers.get(key.toLowerCase());
        if (!crypto) {
            throw new Error(`Cannot get Crypto by name '${key}'`);
        }
        return crypto;
    }
    set(key, value) {
        if (typeof key === 'string') {
            if (!value) {
                throw new TypeError("Argument 'value' is required");
            }
            this.providers.set(key.toLowerCase(), value);
        }
        else {
            this.providers.set(CryptoProvider.DEFAULT, key);
        }
        return this;
    }
}
CryptoProvider.DEFAULT = 'default';
export const cryptoProvider = new CryptoProvider();
