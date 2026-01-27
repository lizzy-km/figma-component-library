import { StoryObj } from "@storybook/react-vite";
import Layout from "./Layout";
declare const meta: {
    title: string;
    component: typeof Layout;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Layout1: Story;
