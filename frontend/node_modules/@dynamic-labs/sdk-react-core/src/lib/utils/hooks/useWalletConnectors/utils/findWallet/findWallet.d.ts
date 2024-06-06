import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api';
import { WalletOption } from '../../../../../shared';
export declare const findWallet: (account: JwtVerifiedCredential, walletOptions: WalletOption[]) => WalletOption | undefined;
