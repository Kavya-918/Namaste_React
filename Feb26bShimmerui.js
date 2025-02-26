//before acutual page load you show fake data to use 

//create component shimmer.js

const Shimmer = () =>{
    return(
     <div className="shimmer-container">
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
        <div className="shimmer-card">Cards</div>
         <div className="shimmer-card">Cards</div>


    </div>
    );

};

export default Shimmer;



Body.js
//we imported shimmer here
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);

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
        
        setListOfRestraunt(restaurants);
    };

  ///shimmer calling
    if(listOfRestaurants.length == 0){
        return <Shimmer/>
    }


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


//added css property for looking as a card
App.css
.shimmer-container{
    display: flex;
    flex-wrap: wrap;
}

.shimmer-card{
    width: 200px;
    height: 400px;
    background-color: #f0f0f0;
    margin: 20px;
}

