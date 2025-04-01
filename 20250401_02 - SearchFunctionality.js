//Body.js
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredResturant,setFilteredRestraunt] = useState([]);

    const[searchText, setSearchText] = useState("");

    console.log("Body rendered")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.3217689&lng=76.6156121&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await response.json();
        console.log(json); // Debugging: Log the API response structure

        // Dynamically find the card that contains restaurant data
        const restaurantData = json?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        // Extract restaurants safely or set an empty array
        const restaurants = restaurantData?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRestraunt(restaurants);

        // search functionality
        const restaurantData1 = json?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        // search functionality
        const restaurants1 = restaurantData1?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
 // search functionality
        setFilteredRestraunt(restaurants1);
    };

return listOfRestaurants.length == 0 ? (
    <Shimmer/>
):
(

    //return (
        <div className="body">
            <div className="filter">
                {/* //giving search functionality */}
                <div className="search">
                    {/* updating searching */}
                    <input type="text"
                     className="search-box"
                     value={searchText} 
                    onChange={(e)=> {
                        setSearchText(e.target.value);
                    }}/>
                    <button 
                    onClick={() => {
                        //filter the resturant card and update the UI
                        //searchText
                        console.log(searchText);
                        //filter out the values includes that particular name
                        const filteredResturant = listOfRestaurants.filter(
                            // if user search on lowercase also it working
                            (res) => res.info.name.toLowerCase().includes(searchText)
                        );

                        setFilteredRestraunt(filteredResturant);


                        
                    }}
                    >Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5);
                    setListOfRestraunt(filteredList);
                }}>
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* to display it */}
                {filteredResturant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;


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
    /*height: 400px; --automatically takes height*/
    
    /* Giving space beween one card to another card*/
    margin: 10px;
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

.filter-btn{
    margin: 10px;
    cursor: pointer;
}

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


.login{
    padding: 0 10px;
    cursor: pointer;

}
/* for search */
.filter{
    display: flex;
}
