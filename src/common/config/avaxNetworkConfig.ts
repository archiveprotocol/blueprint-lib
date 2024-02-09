import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from 'apy-vision-config';

export class AvaxNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 56877;
  }

  getNetwork(): number {
    return Number(CHAINID.AVAX);
  }

  getNetworkName(): string {
    return 'Avalanche';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
