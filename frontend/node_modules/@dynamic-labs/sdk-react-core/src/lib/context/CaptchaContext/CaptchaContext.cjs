'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ViewContext = require('../ViewContext/ViewContext.cjs');

const CaptchaTokenLocalStorageKey = 'dynamic-captcha-token';
const CaptchaContext = React.createContext(undefined);
const CaptchaContextProvider = ({ children, }) => {
    const { setView } = ViewContext.useViewContext();
    const [captchaToken, setCaptchaToken] = React.useState(undefined);
    const [captchaAuthState, setCaptchaAuthState] = React.useState();
    const setCaptchaTokenInLS = React.useCallback((token) => localStorage.setItem(CaptchaTokenLocalStorageKey, token), []);
    const engageCaptcha = React.useCallback(({ authMethod, onCaptchaSuccess, }) => {
        setCaptchaAuthState({ authMethod, onCaptchaSuccess });
        setView('captcha');
    }, [setView, setCaptchaAuthState]);
    const getCaptchaToken = React.useCallback(() => {
        var _a;
        return (_a = captchaToken !== null && captchaToken !== void 0 ? captchaToken : localStorage.getItem(CaptchaTokenLocalStorageKey)) !== null && _a !== void 0 ? _a : undefined;
    }, [captchaToken]);
    const value = React.useMemo(() => ({
        captchaAuthState,
        captchaToken,
        engageCaptcha,
        getCaptchaToken,
        setCaptchaAuthState,
        setCaptchaToken,
        setCaptchaTokenInLS,
    }), [
        captchaAuthState,
        captchaToken,
        engageCaptcha,
        setCaptchaAuthState,
        setCaptchaTokenInLS,
        getCaptchaToken,
    ]);
    return (jsxRuntime.jsx(CaptchaContext.Provider, { value: value, children: children }));
};
const useCaptchaContext = () => {
    const context = React.useContext(CaptchaContext);
    if (context === undefined) {
        throw new Error('usage of useCaptchaContext not wrapped in `CaptchaContextProvider`.');
    }
    return context;
};

exports.CaptchaContext = CaptchaContext;
exports.CaptchaContextProvider = CaptchaContextProvider;
exports.CaptchaTokenLocalStorageKey = CaptchaTokenLocalStorageKey;
exports.useCaptchaContext = useCaptchaContext;
