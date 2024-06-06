import { MutableRefObject } from 'react';
import { Wallet } from '../../../shared';
type ConnectedWalletsMap = {
    [address: string]: boolean;
};
type WalletsConnectionStateHook = (wallets: Wallet[]) => {
    connectedWalletsMap: ConnectedWalletsMap;
    didConnectedStateLoad: MutableRefObject<boolean>;
};
export declare const useWalletsConnectionState: WalletsConnectionStateHook;
export {};
