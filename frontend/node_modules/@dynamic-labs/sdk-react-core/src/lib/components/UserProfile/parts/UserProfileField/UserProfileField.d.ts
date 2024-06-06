/// <reference types="react" />
import { CopyKey } from '../../../../shared';
export type UserProfileFieldProps = {
    disabled?: boolean;
    label?: string;
    name: string;
    value?: string | boolean | null;
} & CopyKey;
export declare const UserProfileField: ({ name, label, value, copykey, }: UserProfileFieldProps) => JSX.Element;
