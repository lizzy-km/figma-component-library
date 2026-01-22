/* eslint-disable @typescript-eslint/no-explicit-any */
import { LayoutProps, menuItemsDynamicStyleProps, menuItemsProps, sideMenuProps } from "./types";
import { Link, NavLink } from "react-router-dom"
import './layout.style.css'
import {  useRef, useState } from "react";
export function Layout(props: LayoutProps) {
    const { backgroundColor, layoutStyle, className, sideMenu, children,header

    } = props

    const parentEl = useRef<HTMLDivElement | null>(null)
    return (
        <section ref={parentEl} className={`${className}`} style={{
            backgroundColor,
            ...layoutStyle

        }} >
            {/* Header Section  */}
         { header &&  <section style={{
            height:header.height,
            ...header.style
         }} >

            </section>}

            {/* SideMenu Section  */}
            {sideMenu && SideMenu({sideMenu,top:(header?.height??80)})}

            {/* Content Section  */}
            <section style={{
                position: 'absolute',
                left: sideMenu?.width,
                top: header?.height,
                padding: 10,
                maxHeight: Number(parentEl?.current?.clientHeight) - (Number(header?.height)+20),
                height: Number(parentEl?.current?.clientHeight) - (Number(header?.height)+20),
                overflow: 'scroll',
                width: (parentEl?.current?.clientWidth ?? 1280) - (Number(sideMenu?.width ?? 270) + 20)
            }} >
                {children}
            </section>
        </section>
    )
}


export function SideMenu(props: {
    sideMenu:sideMenuProps,top:number
}) {
    const { width, sideMenuStyle, menuItems, ElementType, bottomSection } = props.sideMenu



    const bottomNode = () => {
        if (bottomSection) {
            return (
                bottomSection.map((item) => {
                    return MenuItem(item)
                })
            )
        }
    }

    return (
        <aside className={" quix_side_menu "} style={{
            position: 'absolute',
            left: sideMenuStyle?.left ?? 0,
            bottom: sideMenuStyle?.bottom ?? 0,
            width: width,
            // height,
            top: props?.top ?? 80,
            ...sideMenuStyle
        }} >
            {
                menuItems && menuItems.map((item) => {

                    return MenuItem(item, ElementType, (item as menuItemsDynamicStyleProps))
                })
            }

            {/* Bottom Section  */}
            <div className=" sidemenu_bottom_section " >


                <div className=" items " >
                    {
                        bottomNode()
                    }
                </div>
            </div>
        </aside>
    )
}


export function MenuItem(item: menuItemsProps, ElementType?: "NavLink" | "Link" | "a" | "div", menuItemsDynamicStyle?: menuItemsDynamicStyleProps) {

    const [isHover, setIsHover] = useState(false)
    const color = {
        bg: isHover ? menuItemsDynamicStyle?.activeColor?.background ?? '#d4d4d4' : menuItemsDynamicStyle?.backgroundColor ?? '#d4d4d480',
        text: isHover ? menuItemsDynamicStyle?.activeColor?.text ?? "#121212" : menuItemsDynamicStyle?.textColor ?? '#121314  '
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
        window.location.replace(route)
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
                        // border: isHover ? '' : '1px solid #121212 '
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

