import React, { useEffect } from 'react';
import { FigmaComponentProps } from './types';
import { Container } from './styled';

const FigmaComponent: React.FC<FigmaComponentProps> = ({ frameName, frameUrl, children }) => {

    const figmaApiToken: string | undefined = "figd_XJlJp_mbXl6x57M-V2YOJuKj0oWsb7CxizHQf5Of"

    const figmaFramedata = async () => {
        if (!figmaApiToken) {
            console.warn("Figma API token is not defined");
            return;
        }

        await fetch(`https://api.figma.com/v1/lL5kl0JB3QYSjTXHKxzJbM/${figmaApiToken}`, {
            method: 'GET'
        }).then(response => response.json())
            .then(data => {
                console.log("Figma Frame Data:", data);
            })
            .catch(error => {
                console.error("Error fetching Figma frame data:", error);
            });
    }


    useEffect(() => {
        figmaFramedata().then(() => {
            console.log("Figma frame data fetched");
        }
        );
    }, [])

    return (
        <Container>
            <h2>{frameName}</h2>
            <iframe
                title={frameName}
                width="800"
                height="600"
                src={frameUrl}
                allowFullScreen
                style={{ border: '1px solid #ccc', borderRadius: '8px' }}
            ></iframe>
            <div>{children}</div>
        </Container>
    )
}

export default FigmaComponent;