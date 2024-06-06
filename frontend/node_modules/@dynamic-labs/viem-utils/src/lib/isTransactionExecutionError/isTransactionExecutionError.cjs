'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isTransactionExecutionError = (error) => error !== undefined &&
    error !== null &&
    typeof error === 'object' &&
    'walk' in error &&
    typeof error['walk'] === 'function';

exports.isTransactionExecutionError = isTransactionExecutionError;
