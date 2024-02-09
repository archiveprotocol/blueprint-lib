"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETHER_GAS_TOKEN_DECIMALS = exports.ETHER_GAS_TOKEN_SYMBOL = exports.ETHER_GAS_TOKEN_IDENTIFIER = exports.ETH_ADDRESS_MAINNET = exports.BTC_ADDRESS_MAINNET = exports.STACKTRACE_KEY = exports.TokenTag = exports.OperationType = void 0;
var OperationType;
(function (OperationType) {
    OperationType["DEPOSIT"] = "DEPOSIT";
    OperationType["WITHDRAW"] = "WITHDRAW";
    OperationType["INCOME"] = "INCOME";
    OperationType["TRANSFER_IN"] = "TRANSFER_IN";
    OperationType["TRANSFER_OUT"] = "TRANSFER_OUT";
    OperationType["NULL_OP"] = "NULL_OP";
})(OperationType || (exports.OperationType = OperationType = {}));
var TokenTag;
(function (TokenTag) {
    TokenTag["EMPTY"] = "";
    TokenTag["TRADE_FEES"] = "tradeFees";
    TokenTag["REWARDS"] = "rewards";
})(TokenTag || (exports.TokenTag = TokenTag = {}));
exports.STACKTRACE_KEY = 'stacktrace';
exports.BTC_ADDRESS_MAINNET = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599';
exports.ETH_ADDRESS_MAINNET = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
exports.ETHER_GAS_TOKEN_IDENTIFIER = 'Eth';
exports.ETHER_GAS_TOKEN_SYMBOL = 'ETH';
exports.ETHER_GAS_TOKEN_DECIMALS = 18;
//# sourceMappingURL=constants.js.map