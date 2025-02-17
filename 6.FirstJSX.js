2 ways to crate a React element
1.using pure core React as
  
  const heading = React.createElement(
  "h1", {id="heading"},"Namastey React");

2.using JSX -- Javascript Syntax

App.js

import React from "react";
import ReactDOM from "react-dom";
const jsxHeading = <h1>Hello React By Namaste React</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);





For Refer-- index.html
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
