import { ViewProps } from "./types";

export default function ViewContainer(props: ViewProps) {
    const { display, isScrollable, direction, alignItems, justifyContent, width, height, backgroundColor, paddingX, paddingY, textColor, className, rounded, gap, style } = props;
    return <div className={className} style={{
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
        gap,
        ...style
    }}>
        {props.children}

        {/* <Form fields={[
            {
                className: '',
                children: [{
                    name: 'Email',
                    placeholder: 'enter your email',
                    required: true,
                    type: '',
                    label: "Email",
                    value: ''
                }],
                label: '',


            }

        ]}

            submitButtonText="Login"

            onSubmit={() => {

                // alert('Submited!')
            }} /> */}

    </div>;
}