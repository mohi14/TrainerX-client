import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login ";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch(' https://trainerx-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(` https://trainerx-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addServices',
                element: <AddServices></AddServices>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

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