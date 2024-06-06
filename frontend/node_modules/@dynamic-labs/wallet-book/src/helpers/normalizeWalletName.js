const normalizeWalletName = (name) => { var _a; return (_a = name === null || name === void 0 ? void 0 : name.toLowerCase().replace(/\W/g, '')) !== null && _a !== void 0 ? _a : 'undefined-wallet'; };

export { normalizeWalletName };
