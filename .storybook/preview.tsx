import type { Preview } from '@storybook/react-vite'
import { MemoryRouter } from "react-router-dom";

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

  decorators:[
    (Story)=>(
      <MemoryRouter initialEntries={['/']} >
        <Story/>
      </MemoryRouter>
    )
  ]
};

export default preview;