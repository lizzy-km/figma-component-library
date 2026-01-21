import { ViewProps } from "./types";
import './style.css'
import { Layout } from "../components/layout/Layout";
export default function FlexView(props: ViewProps) {
    const { isScrollable, direction, width, height, backgroundColor, paddingX, paddingY, textColor, className, rounded, gap, style, layout, onClick, onRightClick, tooltip } = props;
    return <div onContextMenu={onRightClick} onClick={onClick} className={`${className} ${layout} quix_view `} style={{
        overflowY: isScrollable ? 'scroll' : 'hidden',
        flexDirection: direction || 'row',
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
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
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column',
                borderRadius: 10,
            }}
            backgroundColor="#748873"

            sideMenu={{
                menuItems: [

                    {
                        label: 'Home',
                        route: '/',
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

                    },
                    {
                        label: 'Setting',
                        route: '/setting',
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

                width: '20%',
                height: '100%',
                style: {
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    borderRight: '1px solid #121212'

                },
                top: 80,
                ElementStyle: {
                    height: 48,
                    width: '90%',
                    borderRadius: 8,
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: 8,
                    cursor: 'pointer'

                },
                ElementType: 'a',
                menuItemsDynamicStyle: {
                    backgroundColor: '#E5E0D880',
                    textColor: '#121212',
                    activeColor: {
                        background: '#E5E0D8',
                        text: '#121212'
                    },
                }

            }}

        />




    </div>;
}