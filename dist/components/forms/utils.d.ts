export declare function get(obj: any, path: string): any;
export declare function set(obj: any, path: string, value: any): any;
export declare const storageCache: Map<string, string | null>;
export declare function getLocalStorage(key: string): string | null | undefined;
export declare function setLocalStorage(key: string, value: string): void;
