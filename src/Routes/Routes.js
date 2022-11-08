import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../Pages/Login/Login ";
import Register from "../Pages/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <div>okay?</div>
            },
            {
                path: '/home',
                element: <div>okay?</div>
            },

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])