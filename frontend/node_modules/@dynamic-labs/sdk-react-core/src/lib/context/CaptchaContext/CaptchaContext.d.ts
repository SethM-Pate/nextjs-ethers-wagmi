import { ReactNode, SetStateAction, Dispatch } from 'react';
type CaptchaContextProps = {
    captchaToken: string | undefined;
    setCaptchaToken: Dispatch<SetStateAction<string | undefined>>;
    captchaAuthState: CaptchaAuthenticationState | undefined;
    setCaptchaAuthState: Dispatch<SetStateAction<CaptchaAuthenticationState | undefined>>;
    engageCaptcha: ({ authMethod, onCaptchaSuccess, }: {
        authMethod: AuthMethod;
        onCaptchaSuccess: (captchaToken: string) => Promise<void>;
    }) => void;
    setCaptchaTokenInLS: (token: string) => void;
    getCaptchaToken: () => string | undefined;
};
export type AuthMethod = 'wallet' | 'email' | 'social';
export declare const CaptchaTokenLocalStorageKey = "dynamic-captcha-token";
interface CaptchaAuthenticationState {
    authMethod: AuthMethod;
    onCaptchaSuccess: (captchaToken: string) => Promise<void>;
}
export declare const CaptchaContext: import("react").Context<CaptchaContextProps | undefined>;
export declare const CaptchaContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useCaptchaContext: () => CaptchaContextProps;
export {};
