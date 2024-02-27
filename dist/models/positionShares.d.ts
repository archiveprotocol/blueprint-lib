import BigNumber from 'bignumber.js';
/** Represents the number of shares the user has at a specific block.
 *
 *  positionBalance is optional for non-rebasing LP tokens, mandatory for rebasing LP tokens.
 */
export declare class PositionShares {
    /** Address of the receipt token, or if not receipt token, the address of the input token which will form the shares of the position */
    sharesIdentifier: string;
    /** Amount of 'shares' added/removed in this transaction, it's positive if shares were added, negative if shares were removed */
    amountAdded: BigNumber;
    /** Price of one share in USD */
    sharePriceUsd: number;
    /** Use this value for the position balance field if populated in positionValue */
    positionBalance: BigNumber | null;
    /** It will be true in some cases where the position represents a liability instead of an asset (i.e. aave debt token) */
    isLiabilityPosition: boolean;
    /** The fee (in USD) that the protocol took from the user as a platform toll (ie. liquidation fee) */
    adjustmentValueUsd: number;
    constructor(
    /** Address of the receipt token, or if not receipt token, the address of the input token which will form the shares of the position */
    sharesIdentifier?: string, 
    /** Amount of 'shares' added/removed in this transaction, it's positive if shares were added, negative if shares were removed */
    amountAdded?: BigNumber, 
    /** Price of one share in USD */
    sharePriceUsd?: number, 
    /** Use this value for the position balance field if populated in positionValue */
    positionBalance?: BigNumber | null, 
    /** It will be true in some cases where the position represents a liability instead of an asset (i.e. aave debt token) */
    isLiabilityPosition?: boolean, 
    /** The fee (in USD) that the protocol took from the user as a platform toll (ie. liquidation fee) */
    adjustmentValueUsd?: number);
}
