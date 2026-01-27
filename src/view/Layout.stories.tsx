import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import ViewContainer from './FlexView';
// import { ViewContainer } from 'quix-ui';
const meta = {
    title: 'UI/View',
    component: ViewContainer,


    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',

    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        textColor: { control: 'color' },
        width: { control: 'text' },
        height: { control: 'text' },
        layout: {
            options: ['flex-start', 'flex-center', 'flex-between', 'flex-end', '']
        },
        gap: {
            control: 'number'
        },
        direction: {
            options: ["row", "column", "row-reverse", "column-reverse"]
        },
        isScrollable: { control: 'boolean' },

        paddingX: { control: 'number' },
        paddingY: { control: 'number' },
        rounded: {
            topLeft: { control: 'number' },
            topRight: { control: 'number' },
            bottomLeft: { control: 'number' },
            bottomRight: { control: 'number' },
        },
        mah: { control: 'number' },
        maw: { control: 'number' },
        borderColor: { control: 'color' },
        borderWidth: { control: 'number' },
        borderType: { options: ["solid", "rige", "dashed", "dotted", "double", "groove"] },
        style: { control: 'text' },
        className: { control: 'text' },
        tooltip: {
            position: {
                control: 'text'
            }
        }
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: {
        onClick: fn(),
        onRightClick: fn()
    },
} satisfies Meta<typeof ViewContainer>;

export default meta;
type Story = StoryObj<typeof meta>;


export const FlexView: Story = {
    args: {
        isScrollable: false,
        width: "100vw",
        height: '100vh',
        paddingX: 10,
        paddingY: 10,
        direction: "row",
        backgroundColor: "#181a22",
        textColor: "#f4e0e0",
        children: 'View Layout Component',
        rounded: {
            topLeft: 8,
            topRight: 8,
            bottomLeft: 8,
            bottomRight: 8,
        },
        layout: '',
        className: '',
        // tooltip: {
        //     component: <div style={{
        //         width:600,
        //         height:600
        //     }} > Tooltip </div>,
        //     position: 'left'
        // }
    },
};

export const ScrollableFlexView: Story = {
    args: {
        isScrollable: false,
        width: 400,
        height: 400,
        paddingX: 10,
        paddingY: 10,
        direction: "column",
        backgroundColor: "#181a22",
        textColor: "#f4e0e0",
        children: <ViewContainer layout='' paddingX={10} paddingY={8} width={100} height={100} backgroundColor='#d4d4d4' textColor='#121212' children=" View Children " />,
        layout: "flex-center",
        rounded: {
            "topLeft": 8,
            "topRight": 8,
            "bottomLeft": 8,
            "bottomRight": 8
        },

        className: ""
    }
};

