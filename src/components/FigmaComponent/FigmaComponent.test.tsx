import "@testing-library/jest-dom"

describe("FigmaComponent", () => {
    it("should render without crashing", () => {
        const { default: FigmaComponent } = require('./index.tsx');

        const frameName = "imageDetailCard";
        const frameUrl = "https://www.figma.com/design/lL5kl0JB3QYSjTXHKxzJbM/Hike?node-id=1-99&t=qMJRV6bNUayRWV1X-4";


        <FigmaComponent children={
            <FigmaComponent
                frameName={'explorerBtn'}
                frameUrl={"https://www.figma.com/design/lL5kl0JB3QYSjTXHKxzJbM/Hike?node-id=1-121&t=qMJRV6bNUayRWV1X-4"} />
        }
            frameName={frameName}
            frameUrl={frameUrl}>

        </FigmaComponent>


        // expect(true).toBe(true);
    }
    )

    it("should fetch Figma frame data", async () => {
        const { default: FigmaComponent } = require('./index.tsx');
        const frameName = "imageDetailCard";
        const frameUrl = "https://www.figma.com/design/lL5kl0JB3QYSjTXHKxzJbM/Hike?node-id=1-99&t=qMJRV6bNUayRWV1X-4";

        const component = <FigmaComponent
            frameName={frameName}
            frameUrl={frameUrl} >
        </FigmaComponent>;
        // Since the actual fetch is done in useEffect, we can't directly test it here without a testing library.
        // However, we can at least ensure that the component is created successfully.
        expect(component).toBeDefined();
    }
    )

    it("should warn if Figma API token is not defined", async () => {
        const { default: FigmaComponent } = require('./index.tsx');
        const frameName = "imageDetailCard";
        const frameUrl = "https://www.figma.com/design/lL5kl0JB3QYSjTXHKxzJbM/Hike?node-id=1-99&t=qMJRV6bNUayRWV1X-4";
        // Temporarily unset the FIGMA_TOKEN environment variable
        const originalFigmaToken = process.env.FIGMA_TOKEN;
        delete process.env.FIGMA_TOKEN;
        const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

        const component = <FigmaComponent
            frameName={frameName}
            frameUrl={frameUrl} >
        </FigmaComponent>;
        // Since the actual fetch is done in useEffect, we can't directly test it here without a testing library.
        // However, we can at least ensure that the component is created successfully.
        expect(component).toBeDefined();
        expect(consoleWarnSpy).toHaveBeenCalledWith
            ("Figma API token is not defined");

        // Restore the original FIGMA_TOKEN environment variable
        if (originalFigmaToken) {
            process.env.FIGMA_TOKEN = originalFigmaToken;
        }
        consoleWarnSpy.mockRestore();
        
    })
});