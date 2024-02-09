"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeloNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class CeloNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 5272596;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.CELO);
    }
    getNetworkName() {
        return 'Celo';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.CeloNetworkConfig = CeloNetworkConfig;
//# sourceMappingURL=celoNetworkConfig.js.map