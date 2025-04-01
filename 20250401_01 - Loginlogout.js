//using local variable --- cannot change login to logout
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    //to change from login to logout so create a local variable 
    let btnName = "Login";
    return (
        <div className="header">
            <div className="Logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {/* Dynamically */}
                    <button
                     className="login"
                     onClick={() => {
                        btnName = "Logout";
                        console.log(btnName)
                     }}
                     >
                        {btnName}
                        </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;  


//using usestate... you can change login to logout 

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    //to change from login to logout so create a local variable 
    //let btnName = "Login";

    const [btnNameReact,setBtnNamReact] = useState("Login");
    return (
        <div className="header">
            <div className="Logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button  className="login" 
                    onClick={() => {
                        setBtnNamReact("Logout")
                    }} >
                        {btnNameReact}
                        </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;  



Note:
btnNameReact is a constant how can modify from login to logout?
ans: Whenever you update the setBtnNamReact react is updating the btnNameReact and calling the header once again or rendering with or as "New Vaeiable" this is the beauty of react




//again login if logout

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="Logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;  
