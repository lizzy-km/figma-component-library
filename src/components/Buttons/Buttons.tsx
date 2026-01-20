import { ButtonsProps } from "./types";

export default function Buttons(props: ButtonsProps) {
    const { onClick, width, height, label, paddingX, paddingY, backgroundColor, textColor, rounded,className,style } = props;
    return <button className={className} style={{
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
        ...style
    }} onClick={onClick}>
        {label}

    </button>;
}