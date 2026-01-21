import React, { JSX, ReactNode } from "react";

export interface LayoutProps {
    backgroundColor?: string,
    className?: string,
    style?: React.CSSProperties,
    sideMenu?: sideMenuProps,
    ElementStyle?: React.CSSProperties,


}

export interface menuItemsProps {
    label: string,
    route: string,
    backgroundColor?: string,
    textColor?: string,
    activeColor?: {
        background: string,
        text: string
    }
    icon?: {
        position: 'left' | 'right',
        component: JSX.Element
    }
}

export interface sideMenuProps {
    width: number | string,
    height: number | string,
    style?: React.CSSProperties,
    menuItems: menuItemsProps[],
    ElementType?: "NavLink" | "Link" | "a" | "div",
    ElementStyle?: React.CSSProperties,
    menuItemsDynamicStyle?: menuItemsDynamicStyleProps
    top: number

}

export interface menuItemsDynamicStyleProps {
    backgroundColor: string,
    textColor: string,
    activeColor: {
        background: string,
        text: string
    },
}