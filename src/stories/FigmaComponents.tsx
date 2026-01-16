import { useState } from "react"
import { FrameData } from "../frameData";
interface figmaColorToRgbaProps {
    r: number;
    g: number;
    b: number;
    a: number;
}
function figmaColorToRgba({ r, g, b, a }: figmaColorToRgbaProps): string {
    return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
}
interface FigmaComponentsProps {
    frameName?: string;
    nodeId?: string;
    fileId?: string;
}

interface FigmaFrameData {
    // Define the structure based on Figma API response
    background?: {
        type: string,
        color: figmaColorToRgbaProps
    }[],
    absoluteBoundingBox: { width: number, height: number, x?: number, y?: number },
    cornerRadius?: number,
    children?: Array<{ [key: string]: any }>,
    style?: { [key: string]: any },
    layoutMode?: string,
    paddingBottom?: number
    paddingLeft?: number
    paddingRight?: number
    paddingTop?: number
    id: string,
    name: string,
    type: string,
    itemSpacing?: number,
    counterAxisAlignItems?: string,
    primaryAxisAlignItems?: string,
    [key: string]: any,

}



export const FigmaComponents = ({
    frameName = "Default Frame",
    nodeId = "0:1",
    fileId = "lL5kl0JB3QYSjTXHKxzJbM"
}: FigmaComponentsProps) => {


    // const [data, setData] = useState<FigmaFrameData | null>(null);

    const data: {
        [key: string]: any
    } = FrameData






    // useEffect(() => {
    //     async function fetchFigmaData() {
    //         await fetch(`https://api.figma.com/v1/files/${fileId}/nodes?ids=${nodeId}`, {
    //             method: 'GET',
    //             headers: {
    //                 'X-Figma-Token': ""
    //             }
    //         }).then(response => {
    //             return response.json();
    //         }).then(jsonData => {
    //             setData(jsonData);
    //         })
    //             // .then(data => {
    //             //     console.log("Figma Frame Data:", data);
    //             //     setBgColor(data.nodes[nodeId].document.background[1].color);

    //             //     setStyleObj({
    //             //         width: data.nodes[nodeId].document.absoluteBoundingBox.width,
    //             //         height: data.nodes[nodeId].document.absoluteBoundingBox.height,
    //             //         borderRadius: data.nodes[nodeId].document.cornerRadius
    //             //     })
    //             // })
    //             .catch(error => {
    //                 console.error("Error fetching Figma frame data:", error);
    //             });
    //     }

    //     fetchFigmaData();

    // }, [])

    console.log("Figma Data:", data);

    return <div>
        <h2>{frameName}</h2>

        <div style={{
            position: "relative"
        }} >

            {
                data?.nodes['0:1']?.document.children.filter((node: FigmaFrameData) => node.id === nodeId)?.map((node: FigmaFrameData) => {
                    return <Frame node={node} />

                })
            }

        </div>

    </div>
}


function Frame({ node }: {
    node: FigmaFrameData
}) {

    const bgColor = node?.background && node.background?.length > 0 ? (node.background[1]?.color) ?? node.background[0]?.color : { r: 1, g: 1, b: 1, a: 1 }

    return <div key={node["id"]} style={{
        backgroundColor: figmaColorToRgba(bgColor ?? { r: 1, g: 1, b: 1, a: 1 }),
        width: node.absoluteBoundingBox.width,
        height: node.absoluteBoundingBox.height,
        borderRadius: node.cornerRadius || 0,
        border: '1px solid #000',
        display: 'flex',
        flexDirection: node.layoutMode === "VERTICAL" ? 'column' : 'row',
        zIndex: +node["id"].split(":").join(""),
        paddingTop: node.paddingTop || 0,
        paddingBottom: node.paddingBottom || 0,
        paddingLeft: node.paddingLeft || 0,
        paddingRight: node.paddingRight || 0,
        gap: node.itemSpacing || 0,
        alignItems: node.counterAxisAlignItems?.toLocaleLowerCase(),
        justifyContent: node.primaryAxisAlignItems?.toLocaleLowerCase(),
        // ...node.style
    }} >
        {/* {node.name && <h4>{node.name}</h4>} */}
        {
            node.children && (node?.children)?.length > 0 && (node.children as FigmaFrameData[])?.map((childNode: FigmaFrameData) => {
                return <Frame node={childNode} />
            }
            )
        }
    </div>
}