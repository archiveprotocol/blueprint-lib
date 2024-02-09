import { OperationType } from './constants';
import { TokenInfo } from './tokenInfo';
export declare class Operation {
    operation: OperationType;
    inputTokens: TokenInfo[];
    outputTokens: TokenInfo[];
    constructor(operation: OperationType, inputTokens: TokenInfo[], outputTokens: TokenInfo[]);
}
