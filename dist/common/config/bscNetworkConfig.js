"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BscNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class BscNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 586851;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.BSC);
    }
    getNetworkName() {
        return 'Binance Smart Chain';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.BscNetworkConfig = BscNetworkConfig;
//# sourceMappingURL=bscNetworkConfig.js.map