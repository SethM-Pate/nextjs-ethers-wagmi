'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getWalletIdentifier = ({ address, connector, }) => `${address}+${connector.key}`;

exports.getWalletIdentifier = getWalletIdentifier;
