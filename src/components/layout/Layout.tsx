/* eslint-disable @typescript-eslint/no-explicit-any */
import { LayoutProps, menuItemsDynamicStyleProps, menuItemsProps, sideMenuProps } from "./types";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import './layout.style.css'
import { JSX } from "react";
import { styled } from "storybook/theming";
import { useViewportSize } from "./hooks/useElementSize";

export default function Layout(props: LayoutProps) {


    const { backgroundColor, layoutStyle, className, sideMenu, header

    } = props

    const size = useViewportSize();



    const LayoutSection = styled.section`
    width:${layoutStyle?.width}
    `
    const Content = styled.section``

    const navigate = useNavigate()


    function SideMenu(props: {
        sideMenu: sideMenuProps, top: number
    }) {
        const { width, sideMenuStyle, menuItems, ElementType, bottomSection, menuItemStyle, menuItemsDynamicStyle } = props.sideMenu




        const bottomNode = (menuItemStyle: {
            style?: React.CSSProperties,
            width?: {
                desktop: number | string,
                tablet: number | string,
                mobile: number | string
            }
        }) => {
            if (bottomSection) {
                return (
                    bottomSection.map((item) => {
                        return MenuItem({ item, menuItemStyle })
                    })
                )
            }
        }

        return (
            <aside key={'aside'} className={" quix_side_menu "} style={{
                position: 'absolute',
                left: size.width < 450 ? 8 : sideMenuStyle?.left ?? 0,
                bottom: size.width < 450 ? Number(menuItemStyle?.width?.mobile ?? 48) / 2 : sideMenuStyle?.bottom ?? 0,
                width: size.width < 450 ? '100%' : size.width > 450 && size.width < 850 ? width.tablet : size.width >= 850 ? width.desktop : 300,
                top: size.width < 450 ? 'none' : props?.top ?? 80,
                height: size.width < 450 ? menuItemStyle?.width?.mobile : '90%',
                // height: 48,
                zIndex: 99,
                ...sideMenuStyle
            }} >
                {
                    menuItems && menuItems.map((item) => {

                        return MenuItem({
                            item,
                            ElementType, menuItemsDynamicStyle: menuItemsDynamicStyle, menuItemStyle
                        })
                    })
                }

                {/* Bottom Section  */}
                {size.width > 450 && <div className=" sidemenu_bottom_section " >


                    <div className=" items " >
                        {
                            bottomNode(menuItemStyle as {
                                style?: React.CSSProperties,
                                width?: {
                                    desktop: number | string,
                                    tablet: number | string,
                                    mobile: number | string
                                }
                            })
                        }
                    </div>
                </div>}
            </aside>
        )
    }


    function MenuItem({ item, ElementType, menuItemsDynamicStyle, menuItemStyle }: {
        item: menuItemsProps, ElementType?: "NavLink" | "Link" | "a" | "div", menuItemsDynamicStyle?: menuItemsDynamicStyleProps, menuItemStyle?: {
            style?: React.CSSProperties,
            width?: {
                desktop: number | string,
                tablet: number | string,
                mobile: number | string
            },
        }
    }) {



        const windowWidth = size.width

        const MenuItemElement = styled.div`
     background-color:${menuItemsDynamicStyle?.backgroundColor ?? '#d4d4d480'};
     color:${menuItemsDynamicStyle?.textColor ?? "#121212"};

     &:hover{
     background-color:${menuItemsDynamicStyle?.activeColor?.background ?? '#d4d4d4'};
     color:${menuItemsDynamicStyle?.activeColor?.text ?? "#121212"}
     }
    `


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
            <Element key={item.label} children={
                <div key={item.label} style={{
                    padding: windowWidth > 850 ? 10 : 6,
                    width: '100%'
                }} >

                    {/* MenuEl  */}
                    <MenuItemElement
                        className={'  '} style={{
                            transition: '0.2s all',
                            justifyContent: windowWidth > 850 ? menuItemStyle?.style?.justifyContent : 'center',
                            borderRadius: windowWidth > 850 ? menuItemStyle?.style?.borderRadius : 2,
                            width: windowWidth < 450 ? menuItemStyle?.width?.mobile : windowWidth > 450 && windowWidth < 850 ? menuItemStyle?.width?.tablet : windowWidth > 850 ? menuItemStyle?.width?.desktop : menuItemStyle?.width?.desktop,
                            ...menuItemStyle?.style

                        }} >
                        {/* Left Icon  */}
                        {
                            item.icon && item.icon.position === 'left' && item.icon.component
                        }

                        {/* Label */}

                        {windowWidth > 850 && <p className=" quix_menuItem_label " style={{
                            paddingInline: 10,
                            paddingBlock: 8,
                        }} >
                            {
                                item?.label
                            }
                        </p>}

                        {/* Right Icon  */}
                        {
                            item.icon && item.icon.position === 'right' && item.icon.component
                        }


                    </MenuItemElement>

                </div>
            }  >

            </Element>
        )
    }




    return (
        <LayoutSection className={`${className}`} style={{
            backgroundColor,
            ...layoutStyle

        }} >
            {/* Header Section  */}
            {header && <section style={{
                height: header.height,
                ...header.style
            }} >
                {header.children && (header?.children() as JSX.Element)}
            </section>}

            {/* SideMenu Section  */}
            {sideMenu && SideMenu({ sideMenu, top: (header?.height ?? 80) + 20 })}

            {/* Content Section  */}
            <Content style={{
                position: 'absolute',
                left: size.width < 450 ? 0 : size.width < 850 ? sideMenu?.width.tablet : size.width > 850 ? sideMenu?.width.desktop : 300,
                top: (header?.height ?? 80) + 20,
                padding: 10,
                height: Number(size.height) - (Number(header?.height) + 70),
                margin: 5,
                zIndex: 10,
                width: (size.width) - (size.width < 450 ? Number(0) : size.width < 850 ? Number(sideMenu?.width?.tablet ?? 60) : size.width > 850 ? Number(sideMenu?.width?.desktop ?? 300) : Number(sideMenu?.width?.desktop ?? 300))+30

            }} >

                <Outlet />
            </Content>
        </LayoutSection>
    )
}
