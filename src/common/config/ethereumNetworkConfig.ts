import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from 'apy-vision-config';

export class EthereumNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 9562480;
  }

  getNetwork(): number {
    return Number(CHAINID.ETHEREUM);
  }

  getNetworkName(): string {
    return 'Ethereum';
  }

  isContractNameLookupEnabled(): boolean {
    return true;
  }
}
