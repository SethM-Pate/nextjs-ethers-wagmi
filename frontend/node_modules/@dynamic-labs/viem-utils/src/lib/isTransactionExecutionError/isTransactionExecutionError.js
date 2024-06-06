const isTransactionExecutionError = (error) => error !== undefined &&
    error !== null &&
    typeof error === 'object' &&
    'walk' in error &&
    typeof error['walk'] === 'function';

export { isTransactionExecutionError };
