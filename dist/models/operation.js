"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
class Operation {
    constructor(
    // deposit | withdrawal | income | transfer_in | transfer_out | null_op
    operation, 
    // tokens sent from user to protocol
    inputTokens, 
    // tokens sent from protocol to user
    outputTokens) {
        this.operation = operation;
        this.inputTokens = inputTokens;
        this.outputTokens = outputTokens;
    }
}
exports.Operation = Operation;
//# sourceMappingURL=operation.js.map