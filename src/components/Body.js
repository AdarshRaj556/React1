import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resObj from "../utils/mockdata";
const Body=()=>{
    const [listOfRestaurant,setListOfRestaurant]=useState(resObj);
    return(
      <div className="Body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const tempObj=listOfRestaurant.filter(
                    (res)=>res.info.avgRating>4.5);
                setListOfRestaurant(tempObj);
            }}>Top Rated Restaurant</button>
            </div>
        <div className="res-container">
          {
            listOfRestaurant.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
          }
        </div>
      </div>
    );
  }

export default Body;