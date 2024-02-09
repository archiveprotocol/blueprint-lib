import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from 'apy-vision-config';

export class CeloNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 5272596;
  }

  getNetwork(): number {
    return Number(CHAINID.CELO);
  }

  getNetworkName(): string {
    return 'Celo';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
