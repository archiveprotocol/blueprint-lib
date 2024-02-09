"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitrumNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class ArbitrumNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 226828;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.ARBITRUM);
    }
    getNetworkName() {
        return 'Arbitrum';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.ArbitrumNetworkConfig = ArbitrumNetworkConfig;
//# sourceMappingURL=arbitrumNetworkConfig.js.map