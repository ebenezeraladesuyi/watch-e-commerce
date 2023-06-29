// import React from 'react'
import {createBrowserRouter}  from "react-router-dom";
import { HomeLayout } from "../layout/homeLayout";
import { LandingComp } from "../pages";


export const element = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <LandingComp />,
            },
        ]
    }
])