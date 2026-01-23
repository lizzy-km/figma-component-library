import type { StoryObj } from '@storybook/react-vite';
import ViewContainer from './FlexView';
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
            control: "text";
        };
        height: {
            control: "text";
        };
        layout: {
            options: string[];
        };
        gap: {
            control: "number";
        };
        direction: {
            options: string[];
        };
        isScrollable: {
            control: "boolean";
        };
        paddingX: {
            control: "number";
        };
        paddingY: {
            control: "number";
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
        mah: {
            control: "number";
        };
        maw: {
            control: "number";
        };
        borderColor: {
            control: "color";
        };
        borderWidth: {
            control: "number";
        };
        borderType: {
            options: string[];
        };
        style: {
            control: "text";
        };
        className: {
            control: "text";
        };
        tooltip: {
            position: {
                control: string;
            };
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
        onRightClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const FlexView: Story;
export declare const ScrollableFlexView: Story;
