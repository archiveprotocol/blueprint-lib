"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FantomNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class FantomNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 3500000;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.FANTOM);
    }
    getNetworkName() {
        return 'Fantom';
    }
    isContractNameLookupEnabled() {
        return true;
    }
}
exports.FantomNetworkConfig = FantomNetworkConfig;
//# sourceMappingURL=fantomNetworkConfig.js.map