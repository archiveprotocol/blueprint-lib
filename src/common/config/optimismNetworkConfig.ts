import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from 'apy-vision-config';

export class OptimismNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 1451262;
  }

  getNetwork(): number {
    return Number(CHAINID.OPTIMISM);
  }

  getNetworkName(): string {
    return 'Optimism';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
