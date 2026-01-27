export default function useElementSize<T extends HTMLElement>(): readonly [import("react").RefObject<T | null>, {
    width: number;
    height: number;
}];
export declare class WindowSize {
    size: {
        width: number;
        height: number;
    };
    constructor();
    resizeWindow(): void;
    update(): {
        width: number;
        height: number;
    }[];
    destroy(): void;
}
export declare const useWindowSize: WindowSize;
