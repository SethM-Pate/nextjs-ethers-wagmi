'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isSmartWalletConnector = (walletConnector) => Boolean(walletConnector.setEoaConnector);

exports.isSmartWalletConnector = isSmartWalletConnector;
