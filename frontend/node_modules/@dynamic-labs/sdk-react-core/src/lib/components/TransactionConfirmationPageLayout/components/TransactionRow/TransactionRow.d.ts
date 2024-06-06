import { FC, PropsWithChildren, ReactNode } from 'react';
import { CopyKey } from '../../../../shared';
type TransactionRowProps = {
    dataTestId?: string;
    icon?: ReactNode;
    isEmpty?: boolean;
    isLoading?: boolean;
    label: ReactNode;
    suffix?: ReactNode;
    title?: string;
} & CopyKey;
export declare const TransactionRow: FC<PropsWithChildren<TransactionRowProps>>;
export {};
