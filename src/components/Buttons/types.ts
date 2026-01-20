import React from "react";

export interface ButtonsProps {
    onClick: () => void;
    width?: number;
    height?: number;
    label?: string;
    paddingX?: number,
    paddingY?: number,
    backgroundColor?: string,
    textColor?: string,
    rounded?: {
        topLeft?: number
        topRight?: number
        bottomLeft?: number
        bottomRight?: number

    } | number,
    style?:React.CSSProperties
    className?: string,
}