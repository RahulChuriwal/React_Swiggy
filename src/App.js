import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Cart from "./componenets/Cart.js";
import Error from "./componenets/Error";
import RestaurantMenu from "./componenets/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const Grocery = lazy(() => import("./componenets/Grocery"))

const AppLayout = () => {
    const [userName, setuserName] = useState();

    useEffect(() => {
        const data = {
            name: "Rahul Churiwal"
        }
        setuserName(data.name);
    }, [])

    return (
        <Provider store={appStore}>
            <div className="ap">
                <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
                    <Header />
                    <Outlet />
                </UserContext.Provider>
            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [{
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
        },
        {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)