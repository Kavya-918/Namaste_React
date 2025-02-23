//for doing manually and increasing lines of code to optimaized the code as 

//this old change refer above file code optimazation a
<RestaurantCard resData = {resList[0]} />
                <RestaurantCard resData = {resList[1]} />
                <RestaurantCard resData = {resList[2]} />
                <RestaurantCard resData = {resList[3]} />
                <RestaurantCard resData = {resList[4]} />
                <RestaurantCard resData = {resList[5]} />
                <RestaurantCard resData = {resList[6]} />
                <RestaurantCard resData = {resList[7]} />
                <RestaurantCard resData = {resList[8]} />
                <RestaurantCard resData = {resList[9]} />
                <RestaurantCard resData = {resList[10]} />
                <RestaurantCard resData = {resList[11]} />
                <RestaurantCard resData = {resList[12]} />
                <RestaurantCard resData = {resList[13]} />
                <RestaurantCard resData = {resList[14]} />
                <RestaurantCard resData = {resList[15]} />


  //Optimaized code for call and loop until the data having
  {resList.map((restaurant) => (
                      <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                  ))}


//refer purpose --
    const Body = () => {
      return (
          <div className="body">
              <div className="search">Search</div>
              <div className="res-container">
                  {/* Instead of writing manually, use a loop to render the restaurant cards */}
                  {resList.map((restaurant) => (
                      <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                  ))}
              </div>
          </div>
      );
  }
