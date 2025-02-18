//App.js

import React from "react";
import ReactDOM from "react-dom";

//React Element --rendering
const heading = (
    <h1 className="head" tabIndex="5">Namaste React Using JSX</h1>
);
//want to render elements just as root.render(heading);


//React Functional Component --- rendering
const HeadingComponent = () =>(
        <div id ="container">
            <h1 className="heading">Namaste React Using React - Functional Component</h1>
        </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// to render component like this
root.render(<HeadingComponent/>); 
            
            
            
            //index.html
            
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <h1>Hello</h1>

    <script type="module" src="App.js"></script>
</body>
</html>
