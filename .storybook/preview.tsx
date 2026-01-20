import type { Preview } from '@storybook/react-vite'

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
};

export default preview;