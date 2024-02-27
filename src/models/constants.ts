export enum OperationType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
  INCOME = 'income',
  TRANSFER_IN = 'transfer_in', //covers ONLY LP tokens and/or NFTs that are sent from protocol to user
  TRANSFER_OUT = 'transfer_out', //covers ONLY LP tokens and/or NFTs that are sent from user to protocol
  NULL_OP = 'null_op',
}

export enum TokenTag {
  EMPTY = '',
  TRADE_FEES = 'trade_fees',
  REWARDS = 'rewards',
  TRACKED_UNDERLYING = 'tracked_underlying',
}

export const STACKTRACE_KEY = 'stacktrace';

export const BTC_ADDRESS_MAINNET = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599';
export const ETH_ADDRESS_MAINNET = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

export const ETHER_GAS_TOKEN_IDENTIFIER = 'Eth';
export const ETHER_GAS_TOKEN_SYMBOL = 'ETH';
export const ETHER_GAS_TOKEN_DECIMALS = 18;
