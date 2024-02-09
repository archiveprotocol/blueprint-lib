// import { config } from 'dotenv';
import { LoggerManager } from 'logging-library';

// config();

export enum LogLevel {
  DEBUG = 'debug',
  ERROR = 'error',
  INFO = 'info',
  TRACE = 'trace',
  WARNING = 'warning',
}

export class ArchiveLogger extends LoggerManager {
  // to override the kafka configs, override the getKafkaConfig method
  public static getDefaultBlueprintIdentifier(): string {
    return ''; // default has no blueprint ID
  }
}
