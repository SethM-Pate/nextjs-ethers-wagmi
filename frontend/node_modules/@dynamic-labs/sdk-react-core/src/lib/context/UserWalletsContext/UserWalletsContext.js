import { jsx } from 'react/jsx-runtime';
import { createContext, useContext, useState } from 'react';

/** Context for accessing the current user/session's wallets */
const UserWalletsContext = createContext(undefined);
const UserWalletsProvider = ({ children }) => {
    const [userWallets, setUserWallets] = useState([]);
    return (jsx(UserWalletsContext.Provider, { value: {
            registerUserWallet: (newWallet) => setUserWallets((userWallets) => [...userWallets, newWallet]),
            removeUserWallet: (walletId) => setUserWallets((userWallets) => userWallets.filter(({ id }) => walletId !== id)),
            setUserWallets,
            updateUserWallet: (walletId, newProperties) => setUserWallets((userWallets) => {
                const walletIndex = userWallets.findIndex(({ id }) => walletId === id);
                // Forbid updating the id
                if ('id' in newProperties)
                    delete newProperties['id'];
                // Also forbid setting a field to undefined
                for (const untypedKey in newProperties) {
                    const key = untypedKey;
                    if (newProperties[key] === undefined ||
                        newProperties[key] === null)
                        delete newProperties[key];
                }
                userWallets[walletIndex] = Object.assign(Object.assign({}, userWallets[walletIndex]), newProperties);
                return [...userWallets];
            }),
            userWallets,
        }, children: children }));
};
/** Provides access to state and setters of the current user/session wallets array */
const useInternalUserWallets = () => {
    const context = useContext(UserWalletsContext);
    if (!context)
        throw new Error('Can only call useInternalUserWallets inside UserWalletsProvider');
    return context;
};
/** Provides access to the current user/session wallets */
const useUserWallets = () => {
    const context = useContext(UserWalletsContext);
    if (!context)
        throw new Error('Can only call useUserWallets inside UserWalletsProvider');
    return context.userWallets;
};

export { UserWalletsContext, UserWalletsProvider, useInternalUserWallets, useUserWallets };
