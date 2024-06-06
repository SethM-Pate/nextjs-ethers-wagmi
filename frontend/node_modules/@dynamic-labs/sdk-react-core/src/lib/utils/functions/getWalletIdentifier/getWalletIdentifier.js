const getWalletIdentifier = ({ address, connector, }) => `${address}+${connector.key}`;

export { getWalletIdentifier };
