import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { Typography } from '../../../Typography/Typography.js';
import { roundBalance } from '../../../../widgets/DynamicWidget/helpers/helpers.js';

const TokenBalanceCard = ({ chainIcon, currencySymbol, balance, }) => {
    const { t } = useTranslation();
    return (jsxs("div", { className: 'token-balance-card', children: [jsxs("div", { className: 'token-balance-card__chain', children: [Boolean(chainIcon) && (jsx("div", { className: 'token-balance-card__chain__icon', children: chainIcon })), jsx(Typography, { variant: 'body_normal', color: 'primary', children: currencySymbol })] }), balance !== undefined && (jsxs("div", { className: 'token-balance-card__balance-container', children: [jsx(Typography, { variant: 'body_small', color: 'tertiary', copykey: 'dyn_send_transaction.data.balance.label', children: t('dyn_send_transaction.data.balance.label') }), jsxs("div", { className: 'token-balance-card__balance', children: [jsx(Typography, { variant: 'body_small', color: 'secondary', children: roundBalance(balance, 6) }), jsx(Typography, { variant: 'body_small', color: 'tertiary', children: currencySymbol })] })] }))] }));
};

export { TokenBalanceCard };
