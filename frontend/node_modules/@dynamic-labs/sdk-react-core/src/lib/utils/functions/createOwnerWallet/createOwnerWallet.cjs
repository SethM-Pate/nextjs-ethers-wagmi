'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const createOwnerWallet = (wallet, verifiedCredentials) => {
    var _a, _b;
    const { connector } = wallet;
    if (!walletConnectorCore.isAccountAbstractionConnector(connector)) {
        throw new Error('Wallet is not an account abstraction wallet');
    }
    const eoaConnector = connector.getEOAConnector();
    if (!eoaConnector) {
        throw new Error('EOA connector not found');
    }
    const accountAbstractionAccount = verifiedCredentials.find((account) => account.address === wallet.address);
    if (!accountAbstractionAccount) {
        throw new Error('Account Abstraction Account not found');
    }
    const ownerAccount = verifiedCredentials.find((account) => account.id === accountAbstractionAccount.signerRefId);
    if (!ownerAccount || !ownerAccount.address || !ownerAccount.chain) {
        throw new Error('Owner Account not found');
    }
    /** It's always authenticated, unless it's a turnkey wallet that still hasn't created a passkey */
    const authenticated = ((_a = ownerAccount.walletName) === null || _a === void 0 ? void 0 : _a.startsWith('turnkey'))
        ? Boolean((_b = ownerAccount.walletProperties) === null || _b === void 0 ? void 0 : _b.isAuthenticatorAttached)
        : true;
    return {
        address: ownerAccount.address,
        authenticated,
        chain: ownerAccount.chain,
        connected: false,
        connector: eoaConnector,
        id: ownerAccount.id,
    };
};

exports.createOwnerWallet = createOwnerWallet;
