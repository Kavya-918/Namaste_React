import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

   
const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState(resList);


  //useEffect (() => {}, []); 
  //{}-> callback function , [] ->Dependency Function
  //Callback function called after all rendered

    useEffect(() => {
        console.log("useEffect Called");
    }, []);

    
    // first starts from body it holds the callback function after render all return and jsx of listofresturant then callback function reder
    console.log("Body Called");

  // output of this it first it print Body called then it print in console as useEffect Called.

    let listOfRestaurantsJS = [
        {
            info: {
                id: "426",
                name: "Hotel Empire",
                cloudinaryImageId: "gswvotfmtwj47y7o7nqh",
                cuisines: ["Kebabs", "Biryani"], 
                costForTwo: "₹450 for two",
                avgRating: 4.4,
                deliveryTime: 27, // ✅ Taken from SLA
            }
        },

        {
            info: {
                id: "427",
                name: "KFC",
                cloudinaryImageId: "gswvotfmtwj47y7o7nqh",
                cuisines: ["Kebabs", "Biryani"], // ✅ Extracted from original data
                costForTwo: "₹450 for two",
                avgRating: 2.3,
                deliveryTime: 29, // ✅ Taken from SLA
            }
        },
        {
            info: {
                id: "428",
                name: "Dominos",
                cloudinaryImageId: "gswvotfmtwj47y7o7nqh",
                cuisines: ["Kebabs", "Biryani"], 
                costForTwo: "₹450 for two",
                avgRating: 4.1,
                deliveryTime: 29, // ✅ Taken from SLA
            }
        }
        
    ];
    
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    //console.log("button clicked");
                    //filter logic
                    const filteredList  = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5);
                      setListOfRestraunt(filteredList);
                }}>
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* Instead of writing manually, use a loop to render the restaurant cards */}
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard  key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
