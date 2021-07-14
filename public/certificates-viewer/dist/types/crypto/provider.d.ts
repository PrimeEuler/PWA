/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare class CryptoProvider {
    private providers;
    static DEFAULT: string;
    static isCryptoKeyPair(data: any): data is CryptoKeyPair;
    constructor();
    /**
     * Returns default crypto
     */
    get(): Crypto;
    /**
     * Returns crypto by name
     * @param key Crypto name
     */
    get(key: string): Crypto;
    set(value: Crypto): this;
    set(key: string, value: Crypto): this;
}
export declare const cryptoProvider: CryptoProvider;
