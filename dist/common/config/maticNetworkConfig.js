"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaticNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class MaticNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 4931780;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.MATIC);
    }
    getNetworkName() {
        return 'Polygon';
    }
    isContractNameLookupEnabled() {
        return true;
    }
}
exports.MaticNetworkConfig = MaticNetworkConfig;
//# sourceMappingURL=maticNetworkConfig.js.map