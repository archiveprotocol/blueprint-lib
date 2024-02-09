"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class BaseNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 1;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.BASE);
    }
    getNetworkName() {
        return 'Base';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.BaseNetworkConfig = BaseNetworkConfig;
//# sourceMappingURL=baseNetworkConfig.js.map