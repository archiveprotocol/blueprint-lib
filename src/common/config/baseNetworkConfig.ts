import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from 'apy-vision-config';

export class BaseNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 1;
  }

  getNetwork(): number {
    return Number(CHAINID.BASE);
  }

  getNetworkName(): string {
    return 'Base';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
