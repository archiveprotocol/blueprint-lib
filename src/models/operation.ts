import { OperationType } from './constants';
import { TokenInfo } from './tokenInfo';

export class Operation {
  constructor(
    // deposit | withdrawal | income | transfer_in | transfer_out | null_op
    public operation: OperationType,
    // tokens sent from user to protocol
    public inputTokens: TokenInfo[],
    // tokens sent from protocol to user
    public outputTokens: TokenInfo[],
  ) {}
}
