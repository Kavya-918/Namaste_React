
 // Hard Coded the values - part1 kavfood


//App.js
import React from "react";
import ReactDOM from "react-dom";


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


const Header = () => {
    return (
        <div className="header">
            <div className="Logo-container">
                <img
                    className="logo"
                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147704672/images/1adf4-eba4-a33c-774a-0c8b431df6f4_Food-Ordering-App-iOS-System-Design.png"
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () =>{
    return(
        
        <div className="res-card" style={{ backgroundColor : "#f0f0f0"}}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xph0vf5pvbxjf8xchwjk" alt="dish_image"></img>
            <h3>Meghana Foods</h3>
            <h4>Biryani Curry, North Indian, Asian</h4>
            <h4> 4.4 stars</h4>
            <h4> 38 minutes</h4>
        </div>
    );
};

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);




//index.css
  
.header {
    display: flex;
    /* to get elements to left  */
    justify-content: space-between;
    border: 1px solid black;
}
.logo {
    width: 100px;
    height: 100px;
   
}
.nav-items > ul{
    display: flex;
    font-size: 24px;
    /*Rmove the dot of home and all */
    list-style-type: none;
}

.nav-items > ul > li{
    padding: 20px;
    margin: 10px;
}

.res-container{
    /*To get beside beside cards*/
    display: flex;
    flex-wrap: wrap;
}
.res-card{
    /*To get the box like container*/
    width: 200px;
    height: 400px;
    padding: 5px;
    /* Giving space beween one card to another card*/
    margin: 20px;
}

.res-card:hover{
    cursor: pointer;
    border: 1px solid black;
}

.search{
    padding: 10px;
}

.res-logo{
    width: 100%;
    padding: 1px;
    height: 50%;
}



//No change to html but refer
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
    <!-- <img className="Logo" src="./kavya.png" alt="logo" /> -->
    <!-- <h1>Hello</h1> -->

    <script type="module" src="App.js"></script>
</body>
</html>
            
