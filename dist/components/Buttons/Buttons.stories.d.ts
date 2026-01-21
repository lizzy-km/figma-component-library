import type { StoryObj } from '@storybook/react-vite';
import Buttons from './Buttons';
declare const meta: {
    title: string;
    component: typeof Buttons;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: "color";
        };
        textColor: {
            control: "color";
        };
        width: {
            control: "number";
        };
        height: {
            control: "number";
        };
        paddingX: {
            control: "number";
        };
        paddingY: {
            control: "number";
        };
        label: {
            control: "text";
        };
        rounded: {
            topLeft: {
                control: string;
            };
            topRight: {
                control: string;
            };
            bottomLeft: {
                control: string;
            };
            bottomRight: {
                control: string;
            };
        };
        style: {
            control: "text";
        };
        className: {
            control: "text";
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Button: Story;
