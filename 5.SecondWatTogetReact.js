  /* First Way using 
   CDN Links

   Second way 
   In console 
   npm install react
   for dom : npm install react-dom */
// Rest is same 


index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div id="root"></div>
    <h1>Hello</h1>

    <script src="App.js"></script>
</body>
</html>


App.js
const  parent = React.createElement(
    "div",{id:"parent"},
    React.createElement("div", {id:"child"},
        React.createElement("h1", {}, "Iam a h1 Tag")
    )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);







