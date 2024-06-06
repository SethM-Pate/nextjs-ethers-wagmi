import { __awaiter } from '../../../_virtual/_tslib.js';
import { custom } from 'viem';

const interceptTransport = ({ getAccounts, onPersonalSign, onSendTransaction, onSignTypedData, transport, }) => (props) => {
    const provider = transport(props);
    return custom({
        request: (args) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const { method, params } = args;
            if (getAccounts && method === 'eth_accounts') {
                return getAccounts({ provider });
            }
            if (onPersonalSign && method === 'personal_sign') {
                const [message] = params;
                return onPersonalSign({ args, message, provider });
            }
            if (onSendTransaction && method === 'eth_sendTransaction') {
                const [transaction] = params;
                return onSendTransaction({ args, provider, transaction });
            }
            if (onSignTypedData && method === 'eth_signTypedData_v4') {
                const [, message] = (_a = params) !== null && _a !== void 0 ? _a : [];
                return onSignTypedData({ args, message, provider });
            }
            return provider.request(args);
        }),
    })(props);
};

export { interceptTransport };
