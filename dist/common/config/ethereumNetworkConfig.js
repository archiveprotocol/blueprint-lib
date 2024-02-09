"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthereumNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class EthereumNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 9562480;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.ETHEREUM);
    }
    getNetworkName() {
        return 'Ethereum';
    }
    isContractNameLookupEnabled() {
        return true;
    }
}
exports.EthereumNetworkConfig = EthereumNetworkConfig;
//# sourceMappingURL=ethereumNetworkConfig.js.map