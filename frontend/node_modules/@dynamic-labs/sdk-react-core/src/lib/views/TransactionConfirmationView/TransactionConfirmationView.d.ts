import { FC, MouseEventHandler, ReactNode } from 'react';
import { Address, PublicClient, TransactionRequest } from 'viem';
import { CopyKey } from '../../shared';
export type TransactionConfirmationViewProps = {
    displayPoweredByDynamicFooter?: boolean;
    mutation: () => Promise<Address>;
    onClickBack?: MouseEventHandler<HTMLButtonElement>;
    onClickClose?: MouseEventHandler<HTMLButtonElement>;
    onError?: (error: unknown) => void;
    onSuccess?: (transactionAddress: Address) => void;
    title: ReactNode;
    transaction: TransactionRequest;
    provider: PublicClient;
} & CopyKey;
export declare const TransactionConfirmationView: FC<TransactionConfirmationViewProps>;
