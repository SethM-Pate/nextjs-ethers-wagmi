'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/** Context for accessing the current user/session's wallets */
const UserWalletsContext = React.createContext(undefined);
const UserWalletsProvider = ({ children }) => {
    const [userWallets, setUserWallets] = React.useState([]);
    return (jsxRuntime.jsx(UserWalletsContext.Provider, { value: {
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
    const context = React.useContext(UserWalletsContext);
    if (!context)
        throw new Error('Can only call useInternalUserWallets inside UserWalletsProvider');
    return context;
};
/** Provides access to the current user/session wallets */
const useUserWallets = () => {
    const context = React.useContext(UserWalletsContext);
    if (!context)
        throw new Error('Can only call useUserWallets inside UserWalletsProvider');
    return context.userWallets;
};

exports.UserWalletsContext = UserWalletsContext;
exports.UserWalletsProvider = UserWalletsProvider;
exports.useInternalUserWallets = useInternalUserWallets;
exports.useUserWallets = useUserWallets;
