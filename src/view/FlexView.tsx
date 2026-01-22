import { ViewProps } from "./types";
import './style.css'
import { Layout } from "../components/layout/Layout";
export default function FlexView(props: ViewProps) {
    const { isScrollable, direction, width, height, backgroundColor, paddingX, paddingY, textColor, className, rounded, gap, style, layout, onClick, onRightClick, tooltip } = props;
    return <div onContextMenu={onRightClick} onClick={onClick} className={`${className} ${layout} quix_view `} style={{
        overflowY: isScrollable ? 'scroll' : 'hidden',
        flexDirection: direction || 'row',
        width: width ? width : 'auto',
        height: height ? height : 'auto',
        backgroundColor: backgroundColor || 'transparent',
        paddingInline: paddingX ? `${paddingX}px` : undefined,
        paddingBlock: paddingY ? `${paddingY}px` : undefined,
        color: textColor || 'inherit',
        borderTopLeftRadius: typeof rounded === 'number' ? rounded : rounded?.topLeft ?? 4,
        borderTopRightRadius: typeof rounded === 'number' ? rounded : rounded?.topRight ?? 4,
        borderBottomLeftRadius: typeof rounded === 'number' ? rounded : rounded?.bottomLeft ?? 4,
        borderBottomRightRadius: typeof rounded === 'number' ? rounded : rounded?.bottomRight ?? 4,
        gap,
        transition: '0.3s all',
        position: tooltip ? 'relative' : 'unset',
        ...style
    }}>

        {
            tooltip && <div style={
                {
                    position: 'absolute',
                    width: '100px',
                    height: '200px',
                    padding: 2,
                    top: tooltip.position === 'top' ? (-(height ?? 100) + 10) : 0,
                    bottom: tooltip.position === 'bottom' ? (-(height ?? 100) + 10) : 0,
                    left: tooltip.position === 'left' ? (-(width ?? 100) - 10) : 0,
                    right: tooltip.position === 'right' ? (-(width ?? 100) + 10) : 0,
                    backgroundColor: '#d4d4',
                    zIndex: 10
                }
            } className="quix_tooltip" >
                {
                    tooltip.component
                }
            </div>
        }
        {/* {props.children} */}

        <Layout
            layoutStyle={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column',
                borderRadius: 10,
            }}
            backgroundColor="#748873"

            header={{
                height:80,
                style:{
                    width:'100%'
                }
            }}

            sideMenu={{
                menuItems: [

                    {
                        label: 'Home',
                        route: '/',

                        icon: {
                            position: 'right',
                            component: <div style={{
                                width: 24,
                                height: 24,
                                border: '1px solid #333333',
                                marginInline: 10,
                                borderRadius: 4

                            }}
                            >

                            </div>
                        }

                    },
                    {
                        label: 'Setting',
                        route: '/setting',
                        icon: {
                            position: 'right',
                            component: <div style={{
                                width: 24,
                                height: 24,
                                border: '1px solid #333333',
                                marginInline: 10,
                                borderRadius: 4

                            }}
                            >

                            </div>
                        }

                    }
                ],

                bottomSection: [
                    {
                        label: 'Logout',
                        route: '#logout',
                        backgroundColor: '#E5E0D880',
                        textColor: '#121212',
                        activeColor: {
                            background: '#E5E0D8',
                            text: '#121212'
                        },
                        icon: {
                            position: 'right',
                            component: <div style={{
                                width: 24,
                                height: 24,
                                border: '1px solid #333333',
                                marginInline: 10,
                                borderRadius: 4

                            }}
                            >

                            </div>
                        }

                    }

                ],

                width: 270,
                height: '90%',
                sideMenuStyle: {
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    borderRight: '1px solid #121212',
                    flexDirection: 'column'
                },
                ElementStyle: {
                    height: 48,
                    width: '100%',
                    borderRadius: 8,
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: 8,
                    cursor: 'pointer',

                },
                ElementType: 'div',
                menuItemsDynamicStyle: {
                    backgroundColor: '#d4d4d480',
                    textColor: '#121212',
                    activeColor: {
                        background: '#d4d4d4',
                        text: '#121212'
                    },
                }

            }}

        >
            <div>Content</div>
        </Layout>




    </div>;
}