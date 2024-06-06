'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var Typography = require('../../../Typography/Typography.cjs');
var helpers = require('../../../../widgets/DynamicWidget/helpers/helpers.cjs');

const TokenBalanceCard = ({ chainIcon, currencySymbol, balance, }) => {
    const { t } = reactI18next.useTranslation();
    return (jsxRuntime.jsxs("div", { className: 'token-balance-card', children: [jsxRuntime.jsxs("div", { className: 'token-balance-card__chain', children: [Boolean(chainIcon) && (jsxRuntime.jsx("div", { className: 'token-balance-card__chain__icon', children: chainIcon })), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', children: currencySymbol })] }), balance !== undefined && (jsxRuntime.jsxs("div", { className: 'token-balance-card__balance-container', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'tertiary', copykey: 'dyn_send_transaction.data.balance.label', children: t('dyn_send_transaction.data.balance.label') }), jsxRuntime.jsxs("div", { className: 'token-balance-card__balance', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'secondary', children: helpers.roundBalance(balance, 6) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'tertiary', children: currencySymbol })] })] }))] }));
};

exports.TokenBalanceCard = TokenBalanceCard;
