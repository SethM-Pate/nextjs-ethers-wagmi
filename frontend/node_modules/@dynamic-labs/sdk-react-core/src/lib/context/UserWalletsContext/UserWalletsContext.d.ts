import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { Wallet } from '../../shared';
export type UserWalletsContextType = {
    /** All wallets related to the current user/session. They are either connected, authenticated to the user, or both */
    userWallets: Wallet[];
    /** Allows setting the userWallets variable directly */
    setUserWallets: Dispatch<SetStateAction<Wallet[]>>;
    /** Allows registering a user wallet to the sdk's internal state */
    registerUserWallet: (newWallet: Wallet) => void;
    /** Allows updating an existing wallet's data (in the internal sdk state only) */
    updateUserWallet: (walletId: string, newProperties: Partial<Omit<Wallet, 'id'>>) => void;
    /** Allows deleting a wallet from the internal state (does not disconnect or unlink the wallet!) */
    removeUserWallet: (walletId: string) => void;
};
/** Context for accessing the current user/session's wallets */
export declare const UserWalletsContext: import("react").Context<UserWalletsContextType | undefined>;
export declare const UserWalletsProvider: FC<PropsWithChildren>;
/** Provides access to state and setters of the current user/session wallets array */
export declare const useInternalUserWallets: () => UserWalletsContextType;
/** Provides access to the current user/session wallets */
export declare const useUserWallets: () => Wallet[];
