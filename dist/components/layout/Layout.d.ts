import { LayoutProps, menuItemsDynamicStyleProps, menuItemsProps, sideMenuProps } from "./types";
import './layout.style.css';
export declare function Layout(props: LayoutProps): import("react/jsx-runtime").JSX.Element;
export declare function SideMenu(props: {
    sideMenu: sideMenuProps;
    top: number;
}): import("react/jsx-runtime").JSX.Element;
export declare function MenuItem(item: menuItemsProps, ElementType?: "NavLink" | "Link" | "a" | "div", menuItemsDynamicStyle?: menuItemsDynamicStyleProps): import("react/jsx-runtime").JSX.Element;
export declare function Header(): import("react/jsx-runtime").JSX.Element;
export declare function Content(): import("react/jsx-runtime").JSX.Element;
export declare function Footer(): import("react/jsx-runtime").JSX.Element;
