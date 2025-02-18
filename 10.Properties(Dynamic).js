/* properties shortform is props
it just passing an arguments to the function like only
for dynamically pass any data use props
*/
                                                                            // First Way To Do 

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

//here you mapped
const RestaurantCard = (Props) =>{
    return(
        
        <div className="res-card" style={{ backgroundColor : "#f0f0f0"}}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/iivuhjc2mswi9lublktf" alt="dish_image"></img>
      // and called by mapped name 
            <h3>{Props.resName}</h3>
            <h4>{Props.cuisine}</h4>
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
      //Passing value Dynamically and mapped to props
                <RestaurantCard 
                resName = "Meghana Foods"
                cuisine = "Biryani, North India, Asia"
                />
                <RestaurantCard 
                resName = "KFC"
                cuisine = "Burger, Fast Food, Asia"/>
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




                               // Second way to do -- some cool developer do like this

    const RestaurantCard = ({resName,cuisine}) =>{
    return(
        
        <div className="res-card" style={{ backgroundColor : "#f0f0f0"}}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/iivuhjc2mswi9lublktf" alt="dish_image"></img>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
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
                <RestaurantCard 
                resName = "Meghana Foods"
                cuisine = "Biryani, North India, Asia"
                />
                <RestaurantCard 
                resName = "KFC"
                cuisine = "Burger, Fast Food, Asia"/>
            </div>
        </div>
    );
};

  
