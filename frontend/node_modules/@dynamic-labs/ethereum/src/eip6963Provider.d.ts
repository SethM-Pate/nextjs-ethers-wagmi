import { IEthereum } from './types';
/**
 * Represents the assets needed to display a wallet
 */
type Eip6963ProviderInfo = {
    uuid: string;
    name: string;
    icon: string;
    rdns: string;
};
type Eip6963ProviderDetail = {
    info: Eip6963ProviderInfo;
    provider: IEthereum;
};
export declare class Eip6963Provider {
    providers: Eip6963ProviderDetail[];
    registerProviders(): void;
}
export declare class Eip6963ProviderSingleton {
    readonly eip6963Provider: Eip6963Provider;
    private constructor();
    private static instance;
    static get(): Eip6963Provider;
}
export {};
