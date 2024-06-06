import { ProjectSettings } from '@dynamic-labs/sdk-api';
import { GenericNetwork } from '@dynamic-labs/types';
export type fetchNetworkConfigurationsProps = {
    authToken: string | undefined;
    environmentId: string;
    evmNetworks?: GenericNetwork[];
    projectSettings?: ProjectSettings;
};
export declare const useProcessNetworkConfigurations: ({ authToken, environmentId, evmNetworks: customerEvmNetworks, projectSettings, }: fetchNetworkConfigurationsProps) => {
    configurations: import("@dynamic-labs/types").NetworkConfigurationMap | undefined;
    handleRemoveLsNetworks: () => void;
};
