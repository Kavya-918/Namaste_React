import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

   
const Body = () => {

    //Local state variablr - super powerful variable
    //if you want to update list then use setlistofresturants
    const [listOfRestaurants, setListOfRestraunt] = useState(resList); // find and update dom 

  
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
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
