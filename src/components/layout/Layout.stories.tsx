import { Meta, StoryObj } from "@storybook/react-vite";
import { Layout } from "./Layout";

const meta = {
    title: 'UI/Layout',
    component: Layout,


    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',

    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },

        layoutStyle: { control: 'text' },

        className: { control: 'text' },




    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Layout1: Story = {
    args: {
        backgroundColor: '#121212',

    }
}
