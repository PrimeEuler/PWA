/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function parseHash(hash = window.location.hash) {
    if (!hash.length) {
        return {};
    }
    const pairs = hash.replace(/^(#|\?)?\/?/, '').split('&');
    const result = {};
    for (let i = 0; i < pairs.length; i += 1) {
        const pair = pairs[i].split('=');
        try {
            result[pair[0]] = pair[1] && decodeURIComponent(pair[1]);
        }
        catch (error) {
            console.warn(error);
        }
    }
    return result;
}
export default parseHash;
