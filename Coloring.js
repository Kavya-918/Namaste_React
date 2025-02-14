//hello world with coloring ....

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
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script> 
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="App.js"></script>
</body>
</html>

App.js

const heading = React.createElement
("h1", {id:"heading", xyz:"abc"}, "Hello World From REACT");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);

App.css


#heading{
    color: aquamarine;
}
