/* eslint-disable @typescript-eslint/no-explicit-any */

import { get, set } from "../utils";

// formStore.ts
type Listener = () => void;

export class FormStore {
    private values: any;
    private listeners = new Map<string, Set<Listener>>();

    constructor(initialValues: any) {
        this.values = initialValues;
    }

    getValues() {
        return this.values;
    }

    getValue(name: string) {
        return get(this.values, name);
    }

    setValue(name: string, value: any) {
        this.values = set(this.values, name, value);
        this.notify(name);
    }

    subscribe(name: string, fn: Listener) {
        if (this.listeners.get(name)?.add(fn)) {

            this.listeners.set(name, new Set([fn]))
            return () => this.listeners.get(name)?.delete(fn) ?? false
        }

        return false

    }

    private notify(name: string) {
        this.listeners.get(name)?.forEach(fn => fn());
        this.listeners.get("*")?.forEach(fn => fn());
    }
}
