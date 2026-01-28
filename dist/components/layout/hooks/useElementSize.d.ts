declare function useWindowEvent(type: keyof WindowEventMap, listener: () => void, options: any): void;
export { useWindowEvent };
export declare function useViewportSize(): {
    width: number;
    height: number;
};
