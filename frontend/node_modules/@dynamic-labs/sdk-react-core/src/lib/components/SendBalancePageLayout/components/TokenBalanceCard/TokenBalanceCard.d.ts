import { FC, ReactNode } from 'react';
type TokenBalanceCardProps = {
    balance?: string;
    chainIcon?: ReactNode;
    currencySymbol: string;
};
export declare const TokenBalanceCard: FC<TokenBalanceCardProps>;
export {};
