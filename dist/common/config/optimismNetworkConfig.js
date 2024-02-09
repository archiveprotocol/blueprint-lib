"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptimismNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class OptimismNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 1451262;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.OPTIMISM);
    }
    getNetworkName() {
        return 'Optimism';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.OptimismNetworkConfig = OptimismNetworkConfig;
//# sourceMappingURL=optimismNetworkConfig.js.map