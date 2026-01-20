import { jsx } from 'react/jsx-runtime';

function ViewContainer(props) {
    const { display, isScrollable, direction, alignItems, justifyContent, width, height, backgroundColor, paddingX, paddingY, textColor, className, rounded } = props;
    return jsx("div", { className: className, style: {
            display: display || 'block',
            overflowY: isScrollable ? 'scroll' : 'hidden',
            flexDirection: direction || 'row',
            alignItems: alignItems || 'stretch',
            justifyContent: justifyContent || 'flex-start',
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
        }, children: props.children });
}

function Buttons(props) {
    const { onClick, width, height, label, paddingX, paddingY, backgroundColor, textColor, rounded, className } = props;
    return jsx("button", { className: className, style: {
            width: width ? `${width}px` : 'auto',
            height: height ? `${height}px` : 'auto',
            paddingInline: paddingX ?? 4,
            paddingBlock: paddingY ?? 4,
            backgroundColor: backgroundColor || 'transparent',
            color: textColor || 'inherit',
            borderTopLeftRadius: typeof rounded === 'number' ? rounded : rounded?.topLeft ?? 4,
            borderTopRightRadius: typeof rounded === 'number' ? rounded : rounded?.topRight ?? 4,
            borderBottomLeftRadius: typeof rounded === 'number' ? rounded : rounded?.bottomLeft ?? 4,
            borderBottomRightRadius: typeof rounded === 'number' ? rounded : rounded?.bottomRight ?? 4,
            cursor: 'pointer',
        }, onClick: onClick, children: label });
}

export { Buttons, ViewContainer };
