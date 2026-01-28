import { RouteObject } from "react-router-dom";
import FlexView from "../src/view/FlexView";

export const route: RouteObject[] = [
    {
        path: '/',
        index: true,
        element: <FlexView paddingX={10} paddingY={10} width={100} height={100} textColor="#333333" backgroundColor="#d4d4d4" layout="" >
            Home
        </FlexView>
    },
    {
        path: '/setting',
        element: <div>Setting</div>
    }
]