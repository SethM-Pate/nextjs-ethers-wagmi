import { FC, PropsWithChildren, ReactElement } from 'react';
import { CopyKey } from '../../shared';
export type AlertIcons = 'error';
export type AlertProps = {
    contentDataTestId?: string;
    icon?: ReactElement | AlertIcons;
    variant?: 'error' | 'warning';
} & CopyKey;
export type AlertComponent = FC<PropsWithChildren<AlertProps>>;
