import { WalletConnector, WalletConnectorBase } from './WalletConnector';
export interface IAccountAbstractionWalletConnector extends WalletConnectorBase {
    canSponsorTransactionGas(transaction: unknown): Promise<boolean>;
    disableGasSponsorshipOnce(): void;
    getAccountAbstractionProvider<T>(): T;
    getAccountAbstractionProvider(): unknown;
    getEOAConnector(): WalletConnector | undefined;
}
