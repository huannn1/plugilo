export interface IConsole {
    log(message: any): void;
    debug(message: any): void;
    error(message: any): void;
    warn(message: any): void;
    info(message: any): void;
}