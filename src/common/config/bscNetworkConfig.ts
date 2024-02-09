import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from 'apy-vision-config';

export class BscNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 586851;
  }

  getNetwork(): number {
    return Number(CHAINID.BSC);
  }

  getNetworkName(): string {
    return 'Binance Smart Chain';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
