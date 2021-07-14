/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare class Download {
    static certificate: {
        asPEM: (pem: string, name: string) => void;
        asDER: (hex: string, name: string) => void;
    };
    static certificateRequest: {
        asPEM: (pem: string, name: string) => void;
        asDER: (hex: string, name: string) => void;
    };
}
