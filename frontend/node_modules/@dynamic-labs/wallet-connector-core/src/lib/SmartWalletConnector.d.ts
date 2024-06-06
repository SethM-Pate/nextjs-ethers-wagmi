import { WalletConnectorBase } from './WalletConnector';
export interface SmartWalletConnector extends WalletConnectorBase {
    setEoaConnector(connector: WalletConnectorBase): Promise<void>;
}
