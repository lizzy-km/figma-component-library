import React, { JSX } from "react";
export interface LayoutProps {
    backgroundColor?: string;
    className?: string;
    layoutStyle?: React.CSSProperties;
    sideMenu?: sideMenuProps;
    menuItemStyle?: {
        width: {
            desktop: number | string;
            tablet: number | string;
            mobile: number | string;
        };
        style?: React.CSSProperties;
    };
    children?: JSX.Element;
    header?: HeaderProps;
    content?: () => JSX.Element;
}
export interface HeaderProps {
    height: number;
    style?: React.CSSProperties;
    children?: () => JSX.Element;
}
export interface menuItemsProps {
    label: string;
    route: string;
    backgroundColor?: string;
    textColor?: string;
    activeColor?: {
        background: string;
        text: string;
    };
    icon?: {
        position: 'left' | 'right';
        component: JSX.Element;
    };
}
export interface sideMenuProps {
    width: {
        desktop: number | string;
        tablet: number | string;
        mobile: number | string;
    };
    height: number | string;
    sideMenuStyle?: React.CSSProperties;
    menuItems: menuItemsProps[];
    ElementType?: "NavLink" | "Link" | "a" | "div";
    menuItemStyle?: {
        width?: {
            desktop: number | string;
            tablet: number | string;
            mobile: number | string;
        };
        style: React.CSSProperties;
    };
    menuItemsDynamicStyle?: menuItemsDynamicStyleProps;
    bottomSection?: menuItemsProps[];
}
export interface menuItemsDynamicStyleProps {
    backgroundColor: string;
    textColor: string;
    activeColor: {
        background: string;
        text: string;
    };
}
