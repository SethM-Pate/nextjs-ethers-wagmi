import { Dispatch, SetStateAction } from 'react';
import { AuthModeType, MultiWalletWidgetState, UserProfile, Wallet, WalletOption } from '../../../shared';
import { MultiWalletWidgetStateSetter } from '../multiWallet';
type Props = {
    authMode: AuthModeType;
    authToken: string | undefined;
    connectedWallets: Wallet[];
    multiWalletWidgetState: MultiWalletWidgetState;
    setDesktopUri: Dispatch<SetStateAction<string>>;
    setMultiWalletWidgetState: MultiWalletWidgetStateSetter;
    setQrcodeUri: Dispatch<SetStateAction<string>>;
    walletConnectorOptions: WalletOption[];
    setPrimaryWalletId: (walletId: string) => void;
    primaryWalletId: string | undefined;
    user?: UserProfile;
    onboardingOnlyJwt?: string;
    canHaveMultipleWalletsConnected?: boolean;
};
export interface UseWalletConnectors {
    didConnectedStateLoad: boolean;
    primaryWallet: Wallet | null;
    secondaryWallets: Wallet[];
    setPrimaryWallet: (walletId: string) => Promise<void>;
    setShowQrcodeModal: Dispatch<SetStateAction<boolean>>;
    showQrcodeModal: boolean;
    wallets: Wallet[];
}
export declare const useWalletConnectors: ({ authMode, authToken, connectedWallets, walletConnectorOptions, multiWalletWidgetState, setDesktopUri, setMultiWalletWidgetState, setQrcodeUri, primaryWalletId, setPrimaryWalletId, user, onboardingOnlyJwt, canHaveMultipleWalletsConnected, }: Props) => UseWalletConnectors;
export {};
