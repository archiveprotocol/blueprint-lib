"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MumbaiNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class MumbaiNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 0;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.MUMBAI);
    }
    getNetworkName() {
        return 'Mumbai';
    }
    isContractNameLookupEnabled() {
        return true;
    }
}
exports.MumbaiNetworkConfig = MumbaiNetworkConfig;
//# sourceMappingURL=mumbaiNetworkConfig.js.map