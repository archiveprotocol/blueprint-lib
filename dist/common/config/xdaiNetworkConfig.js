"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XdaiNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class XdaiNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 11813493;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.XDAI);
    }
    getNetworkName() {
        return 'Gnosis Chain';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.XdaiNetworkConfig = XdaiNetworkConfig;
//# sourceMappingURL=xdaiNetworkConfig.js.map