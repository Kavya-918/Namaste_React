
//installed react-router-dom 


//App.js


import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
//import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/**
 * Header
 * - Logo
 * -Nav Items
 * Body
 * -search 
 * - Restaurent container
 * -Restaurent card
 *   img, name of res, star rating, cusine , delivary time
 * Footer
 * -Copyrights
 * -Links
 * -Address
 * -contact information
 */


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//previously directly rendered
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);







//created About.js
//after http://localhost:1234/ i give http://localhost:1234/about
//it will routed to that page

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is Kavya React Learning</h2>
        </div>
    )
}

export default About;
