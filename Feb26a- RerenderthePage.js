import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
//import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState(resList);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.3217689&lng=76.6156121&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        const restaurants = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0].info.name);
        
        //console.log(json);
        //console.log(restaurants);
        
        setListOfRestraunt(restaurants);
    };

    


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5);
                    setListOfRestraunt(filteredList);
                }}>
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;


