import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import ViewContainer from './ViewContainer';
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
        width: { control: 'number' },
        height: { control: 'number' },
        display: {
            options: ["block", "flex", "inline-block", "inline-flex"]
        },
        gap: {
            control: 'number'
        },
        direction: {
            options: ["row", "column", "row-reverse", "column-reverse"]
        },
        isScrollable: { control: 'boolean' },

        alignItems: {
            options: ['stretch', 'center', 'flex-start']
        },
        justifyContent: {
            options: ['flex-start', 'center', 'space-between']
        },
        paddingX: { control: 'number' },
        paddingY: { control: 'number' },
        children: { control: 'text' },
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
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: { onClick: fn() },
} satisfies Meta<typeof ViewContainer>;

export default meta;
type Story = StoryObj<typeof meta>;


export const View: Story = {
    args: {
        isScrollable: false,
        width: 400,
        height: 700,
        paddingX: 10,
        paddingY: 10,
        display: "flex",
        direction: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "#181a22",
        textColor: "#f4e0e0",
        children: 'View Layout Component',
        rounded: {
            topLeft: 8,
            topRight: 8,
            bottomLeft: 8,
            bottomRight: 8,
        },

        className: '',
    },
};

export const ScrollableView: Story = {
    args: {
        isScrollable: true,
        width: 400,
        height: 700,
        paddingX: 10,
        paddingY: 10,
        display: "flex",
        direction: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "#181a22",
        textColor: "#f4e0e0",
        children: "View Layout Component",

        rounded: {
            "topLeft": 8,
            "topRight": 8,
            "bottomLeft": 8,
            "bottomRight": 8
        },

        className: ""
    }
};

