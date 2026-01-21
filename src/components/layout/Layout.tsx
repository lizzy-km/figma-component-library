/* eslint-disable @typescript-eslint/no-explicit-any */
import { LayoutProps, menuItemsDynamicStyleProps, menuItemsProps, sideMenuProps } from "./types";
import { Link, NavLink } from "react-router-dom"
import './layout.style.css'
import { useState } from "react";
export function Layout(props: LayoutProps) {
    const { backgroundColor, style, className, sideMenu

    } = props
    return (
        <section className={`${className}`} style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            backgroundColor,
            ...style

        }} >
            {sideMenu && SideMenu(sideMenu)}
        </section>
    )
}


export function SideMenu(props: sideMenuProps) {
    const { width, height, style, menuItems, ElementType, menuItemsDynamicStyle } = props





    return (
        <aside className={" quix_side_menu "} style={{
            position: 'absolute',
            left: style?.left ?? 0,
            bottom: style?.bottom ?? 0,
            width,
            height,
            top: style?.top ?? 80,
            // ...style
        }} >
            {
                menuItems && menuItems.map((item) => {

                    return MenuItem(item, ElementType, menuItemsDynamicStyle)
                })
            }
        </aside>
    )
}


export function MenuItem(item: menuItemsProps, ElementType?: "NavLink" | "Link" | "a" | "div", menuItemsDynamicStyle?: menuItemsDynamicStyleProps) {

    const [isHover, setIsHover] = useState(false)
    const color = {
        bg: isHover ? menuItemsDynamicStyle?.activeColor?.background : 'transparent',
        text: isHover ? menuItemsDynamicStyle?.activeColor?.text : menuItemsDynamicStyle?.textColor
    }

    function onHover() {
        if (!isHover)
            setIsHover((prev) => !prev)
    }

    function onLeave() {
        if (isHover)
            setIsHover((prev) => !prev)
    }

    const navigate = (route: string) => {
        // window.location.replace(route)
    }
    const Element = ({ children }: { children?: any }) =>
        ElementType === 'NavLink' ?
            <NavLink key={item.label} style={{
                width: "100%"
            }} to={item.route} >
                {children}
            </NavLink> :

            ElementType === 'Link' ?
                <Link style={{
                    width: "100%"
                }} key={item.label} to={item.route} >
                    {children}
                </Link> :

                ElementType === 'a' ?
                    <a style={{
                        width: "100%",
                        textDecoration: 'none'
                    }} key={item.label} href={item.route}>
                        {children}
                    </a> :

                    <div style={{
                        width: "100%"
                    }} key={item.label} onClick={() => {
                        navigate(item.route)
                    }} >
                        {children}
                    </div>

    return (
        <Element children={
            <div key={item.label} style={{
                padding: 10,
                width: '100%'
            }} >
                {/* MenuEl  */}
                <div onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                    className={'quix_menu_item  '} style={{
                        transition: '0.2s all',
                        backgroundColor: color.bg,
                        color: color.text,
                        border: isHover ? '' : '1px solid #121212 '
                    }} >
                    {/* Left Icon  */}
                    {
                        item.icon && item.icon.position === 'left' && item.icon.component
                    }

                    {/* Label */}
                    <p className=" quix_menuItem_label " style={{
                        paddingInline: 10,
                        paddingBlock: 8,
                        color: color.text
                    }} >
                        {
                            item?.label
                        }
                    </p>

                    {/* Right Icon  */}
                    {
                        item.icon && item.icon.position === 'right' && item.icon.component
                    }


                </div>

            </div>
        }  >

        </Element>
    )
}

export function Header() {
    return (
        <header>
            Head
        </header>
    )
}

export function Content() {
    return (
        <section>
            Content
        </section>
    )
}

export function Footer() {
    return (
        <footer>
            Footer
        </footer>
    )
}

