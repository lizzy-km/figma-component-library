import { FigmaComponents } from "./FigmaComponents";
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
const meta = {
    title: 'Example/FigmaComponents',
    component: FigmaComponents,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        frameName: { control: 'text' },
        nodeId: { control: 'text' },
        fileId: { control: 'text' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: { onClick: fn() },
} satisfies Meta<typeof FigmaComponents>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Frame: Story = {
    args: {
        frameName: 'imageDetailCard',
        fileId: "lL5kl0JB3QYSjTXHKxzJbM",
        nodeId: "1:7",
    },
};