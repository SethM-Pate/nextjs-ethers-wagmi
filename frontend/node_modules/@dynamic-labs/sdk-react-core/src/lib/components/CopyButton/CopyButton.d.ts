import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { CopyKey } from '../../..';
type Props = ComponentPropsWithoutRef<'button'> & {
    children: ReactNode;
    className?: string;
    onClick?: VoidFunction;
    textToCopy: string;
};
export declare const CopyButton: ({ children, className, textToCopy, onClick, }: Props & CopyKey) => JSX.Element;
export {};
