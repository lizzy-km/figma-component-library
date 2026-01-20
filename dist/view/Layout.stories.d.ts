import type { StoryObj } from '@storybook/react-vite';
import { ViewContainer } from 'quix-ui';
declare const meta: {
    title: string;
    component: typeof ViewContainer;
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
        display: {
            options: string[];
        };
        direction: {
            options: string[];
        };
        isScrollable: {
            control: "boolean";
        };
        alignItems: {
            options: string[];
        };
        justifyContent: {
            options: string[];
        };
        paddingX: {
            control: "number";
        };
        paddingY: {
            control: "number";
        };
        children: {
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
export declare const View: Story;
