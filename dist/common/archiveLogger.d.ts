import { LoggerManager } from 'logging-library';
export declare enum LogLevel {
    DEBUG = "debug",
    ERROR = "error",
    INFO = "info",
    TRACE = "trace",
    WARNING = "warning"
}
export declare class ArchiveLogger extends LoggerManager {
    static getDefaultBlueprintIdentifier(): string;
}
