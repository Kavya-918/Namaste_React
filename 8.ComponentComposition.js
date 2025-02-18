import React from "react";
import ReactDOM from "react-dom";

//1st component
const Title = () =>(
    <h1 className="head" tabIndex="5">Hello from 1st component</h1>
);



//2nd Component
//Component Composition -- imp interview
//CC- Putting one component inside another component
const HeadingComponent = () =>(
        <div id ="container">
            <Title/> // this is Component composition
            <h1 className="heading">Namaste React Using React - Functional Component</h1>
        </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>); // to render component like this

      //Html same --
