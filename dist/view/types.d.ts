export interface ViewProps {
    display?: "block" | "flex" | "inline-block" | "inline-flex";
    isScrollable?: boolean;
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    alignItems?: "stretch" | "center" | "flex-start";
    justifyContent?: "flex-start" | "center" | "space-between";
    width?: number;
    height?: number;
    backgroundColor?: string;
    paddingX?: number;
    paddingY?: number;
    textColor?: string;
    children?: React.ReactNode | string;
    rounded?: {
        topLeft?: number;
        topRight?: number;
        bottomLeft?: number;
        bottomRight?: number;
    } | number;
    className?: string;
    onClick?: () => void;
}
