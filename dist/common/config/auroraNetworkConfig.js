"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuroraNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class AuroraNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 45999977;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.AURORA);
    }
    getNetworkName() {
        return 'Aurora';
    }
    isContractNameLookupEnabled() {
        return true;
    }
}
exports.AuroraNetworkConfig = AuroraNetworkConfig;
//# sourceMappingURL=auroraNetworkConfig.js.map