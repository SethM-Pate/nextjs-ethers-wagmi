import { FC, MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import { CopyKey } from '../../shared';
type TransactionConfirmationPageLayoutProps = {
    appLogoUrl?: string;
    appName?: string;
    appOrigin?: string;
    disableSendButton?: boolean;
    displayPoweredByDynamicFooter?: boolean;
    error?: string;
    isLoading: boolean;
    onClickBack?: MouseEventHandler<HTMLButtonElement>;
    onClickClose?: MouseEventHandler<HTMLButtonElement>;
    onClickSend: MouseEventHandler<HTMLButtonElement>;
    title?: ReactNode;
    alert?: ReactNode;
} & CopyKey;
export declare const TransactionConfirmationPageLayout: FC<PropsWithChildren<TransactionConfirmationPageLayoutProps>>;
export {};
