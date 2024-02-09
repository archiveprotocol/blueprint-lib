"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaxNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class AvaxNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 56877;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.AVAX);
    }
    getNetworkName() {
        return 'Avalanche';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.AvaxNetworkConfig = AvaxNetworkConfig;
//# sourceMappingURL=avaxNetworkConfig.js.map