import type { Meta, StoryObj } from '@storybook/react-vite';
import Buttons from './Buttons';
import { fn } from 'storybook/test';

const meta = {
    title: 'UI/Buttons',
    component: Buttons,
   
    
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
        paddingX: { control: 'number' },
        paddingY: { control: 'number' },
        label: { control: 'text' },
        rounded: {
            topLeft: { control: 'number' },
            topRight: { control: 'number' },
            bottomLeft: { control: 'number' },
            bottomRight: { control: 'number' },
        },
                style: { control: 'text' },

        className: { control: 'text' },

       
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: { onClick: fn()},
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Button: Story = {
    args: {
        width: 100,
        height: 48,
        paddingX: 10,
        paddingY: 10,
        backgroundColor: "#181a22",
        textColor: "#f4e0e0",
        label:'Button',
        rounded:{
            topLeft: 8,
            topRight: 8,
            bottomLeft: 8,
            bottomRight: 8,
        },
       
        className: '',
    },
};  

