import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from 'apy-vision-config';

export class MaticNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 4931780;
  }

  getNetwork(): number {
    return Number(CHAINID.MATIC);
  }

  getNetworkName(): string {
    return 'Polygon';
  }

  isContractNameLookupEnabled(): boolean {
    return true;
  }
}
