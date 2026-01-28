import { ViewProps } from "./types";
import './style.css'
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
        {props.children}

       



    </div>;
}