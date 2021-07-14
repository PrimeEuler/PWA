/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { Name, OtherName, DisplayText, EDIPartyName, } from '@peculiar/asn1-x509';
import { Convert, BufferSourceConverter } from 'pvtsutils';
import { AsnParser } from '@peculiar/asn1-schema';
import { OIDs } from '../../../constants/oids';
import { RowValue } from '../row';
const names = {
    otherName: 'Other Name',
    rfc822Name: 'RFC 822 Name',
    dNSName: 'DNS Name',
    x400Address: 'X400 Address',
    directoryName: 'Directory Name',
    ediPartyName: 'Edi Party Name ',
    uniformResourceIdentifier: 'URI',
    iPAddress: 'IP Address',
    registeredID: 'Registered ID',
};
export const GeneralNamePart = (props) => {
    const { generalName, getDNSNameLink, getIPAddressLink } = props;
    if (!generalName) {
        return null;
    }
    return Object.keys(generalName).map((name) => {
        const value = generalName[name];
        if (value instanceof Name) {
            return [
                h(RowValue, { name: names[name] || name, value: "" }),
                value.map((relativeDistinguishedName) => (relativeDistinguishedName.map((attributeTypeAndValue) => (h(RowValue, { name: OIDs[attributeTypeAndValue.type] || attributeTypeAndValue.type, value: attributeTypeAndValue.value.toString() }))))),
            ];
        }
        if (value instanceof OtherName) {
            const text = AsnParser.parse(value.value, DisplayText);
            return (h(RowValue, { name: OIDs[value.typeId], value: text.toString() }));
        }
        if (BufferSourceConverter.isBufferSource(value)) {
            return (h(RowValue, { name: names[name] || name, value: Convert.ToString(value) }));
        }
        if (value instanceof EDIPartyName) {
            return (h(RowValue, { name: names[name] || name, value: Convert.ToString(value.partyName) }));
        }
        if (name === 'dNSName') {
            return (h(RowValue, { name: names[name] || name, value: value, href: getDNSNameLink(value) }));
        }
        if (name === 'iPAddress') {
            return (h(RowValue, { name: names[name] || name, value: value, href: getIPAddressLink(value) }));
        }
        return (h(RowValue, { name: names[name] || name, value: value }));
    });
};
