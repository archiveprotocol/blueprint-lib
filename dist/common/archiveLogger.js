"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveLogger = exports.LogLevel = void 0;
// import { config } from 'dotenv';
const logging_library_1 = require("logging-library");
// config();
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "debug";
    LogLevel["ERROR"] = "error";
    LogLevel["INFO"] = "info";
    LogLevel["TRACE"] = "trace";
    LogLevel["WARNING"] = "warning";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class ArchiveLogger extends logging_library_1.LoggerManager {
    // to override the kafka configs, override the getKafkaConfig method
    static getDefaultBlueprintIdentifier() {
        return ''; // default has no blueprint ID
    }
}
exports.ArchiveLogger = ArchiveLogger;
//# sourceMappingURL=archiveLogger.js.map