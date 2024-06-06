import { isEmailWalletConnector } from '@dynamic-labs/wallet-connector-core';

const findEmailOtpWalletConnector = (wallets) => {
    const walletConnector = wallets
        .map(({ walletConnector }) => walletConnector)
        .find((walletConnector) => isEmailWalletConnector(walletConnector) &&
        // additional check to make sure the wallet connector actually implements its own otp workflow
        // if a walletConnector only uses Dynamic's OTP, then canConnectViaEmail should be false
        walletConnector.canConnectViaEmail);
    return walletConnector;
};

export { findEmailOtpWalletConnector };
