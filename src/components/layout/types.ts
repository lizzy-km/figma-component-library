import React, { JSX } from "react";

export interface LayoutProps {
    backgroundColor?: string,
    className?: string,
    layoutStyle?: React.CSSProperties,
    sideMenu?: sideMenuProps,
    ElementStyle?: React.CSSProperties,
    children?: JSX.Element,
    header?: HeaderProps


}

export interface HeaderProps {
    height: number,
    style: React.CSSProperties
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
    sideMenuStyle?: React.CSSProperties,
    menuItems: menuItemsProps[],
    ElementType?: "NavLink" | "Link" | "a" | "div",
    ElementStyle?: React.CSSProperties,
    menuItemsDynamicStyle?: menuItemsDynamicStyleProps
    bottomSection?: menuItemsProps[]

}

export interface menuItemsDynamicStyleProps {
    backgroundColor: string,
    textColor: string,
    activeColor: {
        background: string,
        text: string
    },
}