import type { Preview } from '@storybook/react-vite'
import QuixRouterProvider from "../src/Provider/routes/RouterProvider";
import { route } from './route';

const preview: Preview = {

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        text: /Text$/i,
        size: /Size$/i,
        width: /Width$/i,
        height: /Height$/i,
        options: /Options$/i,
        action: /Action$/i,
      },
    },


  },

  decorators: [
    (Story) => (
      <QuixRouterProvider routes={[{
        path: '/',
        Component: Story,
        ErrorBoundary:Story,
        children:route

      }]} />

    )
  ]
};

export default preview;