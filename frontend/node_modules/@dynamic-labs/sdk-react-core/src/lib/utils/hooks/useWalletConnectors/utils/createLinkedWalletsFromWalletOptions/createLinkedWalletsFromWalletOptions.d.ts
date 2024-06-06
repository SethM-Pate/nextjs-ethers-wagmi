import { Wallet, WalletOption } from '../../../../../shared';
type CreateWalletsFromWalletOptionsProps = {
    authToken: string;
    primaryWalletId: string | undefined;
    walletConnectorOptions: WalletOption[] | undefined;
};
export declare const createLinkedWalletsFromWalletOptions: ({ authToken, walletConnectorOptions, primaryWalletId, }: CreateWalletsFromWalletOptionsProps) => Wallet[];
export {};
