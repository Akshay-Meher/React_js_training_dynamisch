import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../Pages/Home';
import ProductsRouter from '../Pages/ProductsRouter';
import RootLayOut from '../Pages/RootLayOut';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayOut />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/products", element: <ProductsRouter /> },
        ]
    },


]);

function Routering() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Routering