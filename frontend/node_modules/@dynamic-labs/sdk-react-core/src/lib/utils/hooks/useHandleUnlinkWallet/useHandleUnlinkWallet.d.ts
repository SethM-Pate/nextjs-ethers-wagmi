import { Dispatch, SetStateAction } from 'react';
import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api';
import { DynamicEventsCallbacks, UserProfile, Wallet } from '../../../shared';
type UseHandleUnlinkProps = {
    environmentId: string;
    primaryWalletId: string | undefined;
    secondaryWallets: Wallet[];
    setUser: Dispatch<SetStateAction<UserProfile | undefined>>;
    verifiedCredentials: JwtVerifiedCredential[];
    eventsCallbacks: DynamicEventsCallbacks | undefined;
    user: UserProfile | undefined;
};
export declare const useHandleUnlinkWallet: ({ verifiedCredentials, environmentId, primaryWalletId, secondaryWallets, setUser, user, eventsCallbacks, }: UseHandleUnlinkProps) => (walletId: string) => Promise<void>;
export {};
