"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvmosEvmNetworkConfig = void 0;
const evmGasOracle_1 = require("../gas/evmGasOracle");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const apy_vision_config_1 = require("apy-vision-config");
class EvmosEvmNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 1;
    }
    getNetwork() {
        return Number(apy_vision_config_1.CHAINID.EVMOS);
    }
    getNetworkName() {
        return 'Evmos Evm';
    }
    isContractNameLookupEnabled() {
        return true;
    }
    getGasOracle(context) {
        if (!this.gasOracle) {
            this.gasOracle = new evmGasOracle_1.EvmGasOracle(context);
        }
        return this.gasOracle;
    }
}
exports.EvmosEvmNetworkConfig = EvmosEvmNetworkConfig;
//# sourceMappingURL=evmosEvmNetworkConfig.js.map