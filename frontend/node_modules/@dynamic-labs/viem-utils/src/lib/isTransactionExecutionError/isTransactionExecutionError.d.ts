import { TransactionExecutionError } from 'viem';
export declare const isTransactionExecutionError: <T>(error: TransactionExecutionError | unknown) => error is {
    walk: () => T;
};
