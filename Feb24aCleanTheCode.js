/* Created the separate folder as src folder inside this component folder
   where you create the separate component for cleaner code and easy understand*/

App.js inside src folder
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";

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







RestaurantCard.js --component folder create this
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;

    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime} = resData ?.info;
    return(
        
        <div className="res-card" style={{ backgroundColor : "#f0f0f0"}}>
            <img className="res-logo"
            alt ="res-logo"
             src={CDN_URL+
             resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>

        </div>
    );
};
export default RestaurantCard;












Body.js
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

   
const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {console.log("button clicked")}}>
                    Top Rated Restaurants</button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
                {/* Instead of writing manually, use a loop to render the restaurant cards */}
                {resList.map((restaurant) => (
                    <RestaurantCard  key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;


Header.js
import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;  







// created separate folder as utility here you put all links and hardcoded value
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL = "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147704672/images/1adf4-eba4-a33c-774a-0c8b431df6f4_Food-Ordering-App-iOS-System-Design.png";


//insidee this utlity created a file mockData and kept the resLIst hardcode value
const resList = [
    {
      "info": {
        "id": "426",
        "name": "Hotel Empire",
        "cloudinaryImageId": "gswvotfmtwj47y7o7nqh",
        "locality": "HSR Layout",
        "areaName": "HSR Layout",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Kebabs",
          "Biryani"
        ],
        "avgRating": 4.4,
        "parentId": "475",
        "avgRatingString": "4.4",
        "totalRatingsString": "81K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-21 02:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "ABOVE ₹3000",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "32K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/hotel-empire-hsr-layout-rest426",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "65797",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        "avgRating": 4.5,
        "parentId": "371281",
        "avgRatingString": "4.5",
        "totalRatingsString": "55K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-21 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.5",
            "ratingCount": "4.6K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "17751",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/0ea5cab6-b85f-4c95-b728-c3c2e5c3d5aa_17751.JPG",
        "locality": "NGK Complex",
        "areaName": "BTM 1st Stage",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "21809",
        "avgRatingString": "4.2",
        "totalRatingsString": "23K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-20 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Rolls.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Rolls.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/faasos-wraps-rolls-and-shawarma-ngk-complex-btm-1st-stage-rest17751",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "14975",
        "name": "Behrouz Biryani",
        "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
        "locality": "NGK Complex",
        "areaName": "BTM 1st Stage",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "1803",
        "avgRatingString": "4.3",
        "totalRatingsString": "9.8K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-20 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹199"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/behrouz-biryani-ngk-complex-btm-1st-stage-rest14975",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "18973",
        "name": "Nandhana Palace",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian"
        ],
        "avgRating": 4.4,
        "parentId": "2120",
        "avgRatingString": "4.4",
        "totalRatingsString": "38K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-21 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Andhra.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Andhra.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "8.5K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/nandhana-palace-koramangala-rest18973",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23819",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/6e07e63a-1fcf-4d8c-b964-ea625f6dce67_23819.JPG",
        "locality": "BTM Layout",
        "areaName": "BTM Layout",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "2456",
        "avgRatingString": "4.6",
        "totalRatingsString": "24K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-21 02:55:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-btm-layout-rest23819",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23683",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/547a1c53-66ed-474e-999d-6e9e4b570f83_23683.jpg",
        "locality": "2nd Stage",
        "areaName": "Btm Layout",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "58K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-21 03:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹139"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-2nd-stage-btm-layout-rest23683",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "334475",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/6c5652c0-9a23-4cd6-abb4-3bc90a464fe1_334475.JPG",
        "locality": "2nd Stage",
        "areaName": "BTM Layout",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "9.8K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-21 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kfc-2nd-stage-btm-layout-rest334475",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "307",
        "name": "A2B - Adyar Ananda Bhavan",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/b61a8555-13c8-4034-816c-5afc7e8a5b31_307.jpg",
        "locality": "BTM Layout",
        "areaName": "BTM Layout",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Sweets",
          "Chinese"
        ],
        "avgRating": 4.5,
        "parentId": "22",
        "avgRatingString": "4.5",
        "totalRatingsString": "78K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-20 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "11K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-btm-layout-rest307",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "42579",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_42579.JPG",
        "locality": "Vega City Mall",
        "areaName": "Btm Layout",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.2,
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "46K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-21 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/burger-king-vega-city-mall-btm-layout-rest42579",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "325024",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/12133286-6be9-4896-9ac3-9f4d58756b15_325024.jpg",
        "locality": "BTM Layout",
        "areaName": "BTM Layout",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.7,
        "parentId": "1040",
        "avgRatingString": "4.7",
        "totalRatingsString": "3.1K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-20 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "150"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/theobroma-btm-layout-rest325024",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "272236",
        "name": "EatFit",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/3c750fad-dc13-45c9-af6a-45099295e23e_272236.jpg",
        "locality": "2nd Stage",
        "areaName": "BTM Layout",
        "costForTwo": "₹270 for two",
        "cuisines": [
          "Chinese",
          "Healthy Food",
          "Tandoor",
          "Pizzas",
          "North Indian",
          "Thalis",
          "Biryani"
        ],
        "avgRating": 4.4,
        "parentId": "76139",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-21 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/eatfit-2nd-stage-btm-layout-rest272236",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "289252",
        "name": "BOX8  Desi Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/c5c44bec-a894-4f97-8896-f5d018734dbb_289252.jpg",
        "locality": "2nd stage",
        "areaName": "Btm Layout",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Thalis",
          "Home Food"
        ],
        "avgRating": 4.6,
        "parentId": "10655",
        "avgRatingString": "4.6",
        "totalRatingsString": "4.3K+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "10-20 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-21 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/box8-desi-meals-2nd-stage-btm-layout-rest289252",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "155398",
        "name": "The Good Bowl",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/bcbf8db9-0e8d-4e2a-971c-68d2bf61340b_155398.jpg",
        "locality": "NGK Complex",
        "areaName": "BTM 1st Stage",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "7918",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.5K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-20 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/the-good-bowl-ngk-complex-btm-1st-stage-rest155398",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "590119",
        "name": "Bakingo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/fe8598d4-a559-4695-bd4f-9f0e42c8b08b_590119.jpg",
        "locality": "1st  Stage",
        "areaName": "BTM Layout",
        "costForTwo": "₹299 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "3818",
        "avgRatingString": "4.6",
        "totalRatingsString": "7.9K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-21 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/bakingo-1st-stage-btm-layout-rest590119",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "42060",
        "name": "Sharief Bhai Biryani",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/d12f9cc3-5e55-48f5-a32b-8bbd5ac089d7_42060.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "South Indian",
          "Kebabs",
          "Ramzan Special",
          "Sweets",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "469102",
        "avgRatingString": "4.3",
        "totalRatingsString": "52K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-21 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Biryani.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹198",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "4.8K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/sharief-bhai-biryani-koramangala-rest42060",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "103797",
        "name": "Starbucks Coffee",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/10/01aad64d-3d38-4dbe-a8ae-b092002d0f46_103797.JPG",
        "locality": "Bannerghatta Road",
        "areaName": "BTM Layout",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "avgRating": 4.4,
        "parentId": "195515",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.9K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-20 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹138"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "2.2K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/starbucks-coffee-bannerghatta-road-btm-layout-rest103797",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "382641",
        "name": "Wendy's Burgers",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/7a2ffcfc-7542-47a1-a303-d1485f4d2bb0_382641.JPG",
        "locality": "Bommanahalli",
        "areaName": "BTM Layout",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.2,
        "parentId": "972",
        "avgRatingString": "4.2",
        "totalRatingsString": "7.0K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-20 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/wendys-burgers-bommanahalli-btm-layout-rest382641",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "11215",
        "name": "Taco Bell",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/f5148abd-9c7c-4864-9ff9-7cd0a485e2ae_11215.JPG",
        "locality": "Gopalan Innovation Mall",
        "areaName": "Bannerghatta Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Mexican",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.3,
        "parentId": "1557",
        "avgRatingString": "4.3",
        "totalRatingsString": "34K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-20 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3f3a29c6-fc46-4da5-8b11-e7b5c2ca6922"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/taco-bell-gopalan-innovation-mall-bannerghatta-road-rest11215",
        "type": "WEBLINK"
      }
    },
];
export default resList;
