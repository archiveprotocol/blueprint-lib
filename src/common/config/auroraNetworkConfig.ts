import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from 'apy-vision-config';

export class AuroraNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 45999977;
  }

  getNetwork(): number {
    return Number(CHAINID.AURORA);
  }

  getNetworkName(): string {
    return 'Aurora';
  }

  isContractNameLookupEnabled(): boolean {
    return true;
  }
}
