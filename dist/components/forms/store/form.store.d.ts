type Listener = () => void;
export declare class FormStore {
    private values;
    private listeners;
    constructor(initialValues: any);
    getValues(): any;
    getValue(name: string): any;
    setValue(name: string, value: any): void;
    subscribe(name: string, fn: Listener): false | (() => boolean);
    private notify;
}
export {};
