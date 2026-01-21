import React, { ReactNode } from "react";

export interface ViewProps {
    isScrollable?: boolean;
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    width?: number|string;
    height?: number|string;
    backgroundColor?: string;
    paddingX?: number;
    paddingY?: number;
    textColor?: string;
    children?: React.ReactNode | string | React.ReactNode[];
    rounded?: {
        topLeft?: number
        topRight?: number
        bottomLeft?: number
        bottomRight?: number

    } | number,
    gap?: number,
    mah?: number|string
    maw?: number|string
    borderColor?: string
    borderWidth?: number
    borderType?: "solid" | "rige" | "dashed" | "dotted" | "double" | "groove"
    style?: React.CSSProperties
    className?: string;
    layout: "flex-center" | "flex-start" | "flex-end" | "flex-between" | ""
    onClick?: React.MouseEventHandler<HTMLDivElement>
    onRightClick?: React.MouseEventHandler<HTMLDivElement>,
    tooltip?: {
        component: ReactNode,
        position: "left" | "right" | "top" | "bottom"
    }
}