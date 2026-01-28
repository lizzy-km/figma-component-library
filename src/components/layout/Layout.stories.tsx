import { Meta, StoryObj } from "@storybook/react-vite";
import Layout from "./Layout";

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
    
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Layout1: Story = {
    args: {
        backgroundColor: '#748873',
        layoutStyle:{
            "width": "100vw",
            "height": "100vh",
            "position": "relative",
            "display": "flex",
            "justifyContent": "flex-start",
            "alignItems": "flex-start",
            "flexDirection": "column",
            "borderRadius": 10
        },
            header:{
                "height": 60,

                "style": {
                    "width": "100%",
                    "paddingBlock": 8,                    
                    "borderBlock": "1px solid #121212"
                },
                children() {
                    return <div style={{
                        width:'100%',
                        paddingInline:10
                    }} > Header </div>
                },
            },
            sideMenu:{
                menuItems: [

                    {
                        label: 'Home',
                        route: '/',

                        icon: {
                            position: 'right',
                            component: <div style={{
                                width: 24,
                                height: 24,
                                border: '1px solid #333333',
                                marginInline: 10,
                                borderRadius: 4

                            }}
                            >

                            </div>
                        }

                    },
                    {
                        label: 'Setting',
                        route: '/setting',
                        icon: {
                            position: 'right',
                            component: <div style={{
                                width: 24,
                                height: 24,
                                border: '1px solid #333333',
                                marginInline: 10,
                                borderRadius: 4

                            }}
                            >

                            </div>
                        }

                    }
                ],

                bottomSection: [
                    {
                        label: 'Logout',
                        route: '#logout',
                        backgroundColor: '#E5E0D880',
                        textColor: '#121212',
                        activeColor: {
                            background: '#E5E0D8',
                            text: '#121212'
                        },
                        icon: {
                            position: 'right',
                            component: <div style={{
                                width: 24,
                                height: 24,
                                border: '1px solid #333333',
                                marginInline: 10,
                                borderRadius: 4

                            }}
                            >

                            </div>
                        }

                    }

                ],

                width: {
                    desktop: 270,
                    tablet: 60,
                    mobile: '100%'
                },
                height: '90%',
                sideMenuStyle: {
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    borderRight:   '1px solid #121212',
                    flexDirection:  'column'
                },
                menuItemStyle: {

                    width: {
                        desktop: '90%',
                        tablet: '80%',
                        mobile: 48
                    },
                    style: {
                        height: 48,
                        borderRadius: 8,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 8,
                        cursor: 'pointer',
                    }


                },
                ElementType: 'NavLink',
                menuItemsDynamicStyle: {
                    backgroundColor: '#d4d4d480',
                    textColor: '#121212',
                    activeColor: {
                        background: '#d4d4d4',
                        text: '#121212'
                    },
                }

            },
            // content:()=><div style={{
            //     maxWidth:'100%',
            //     height:'100%',
            //     maxHeight:"100%",
            //     backgroundColor:'#d4d4d4',
            //     padding:10
            // }} >Content</div>

    }
}
