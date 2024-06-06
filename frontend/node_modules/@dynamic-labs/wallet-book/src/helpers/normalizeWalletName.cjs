'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const normalizeWalletName = (name) => { var _a; return (_a = name === null || name === void 0 ? void 0 : name.toLowerCase().replace(/\W/g, '')) !== null && _a !== void 0 ? _a : 'undefined-wallet'; };

exports.normalizeWalletName = normalizeWalletName;
