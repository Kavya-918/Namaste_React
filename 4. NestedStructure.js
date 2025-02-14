// link to Html app.js
//Creating nested Html structure inside React
/* In HTML
<div id ="parent">
<div id "child">
<h1></h1>
</div>
 */


/* In React Nested Structure */
const  parent = React.createElement(
    "div",{id:"parent"},
    React.createElement("div", {id:"child"},
        React.createElement("h1", {}, "I'am a h1 Tag")
    )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
