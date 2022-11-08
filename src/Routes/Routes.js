import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <div>okay?</div>
            }
        ]
    }
])