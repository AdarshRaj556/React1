import RestaurantCard from "./RestaurantCard";
import {useState,useEffect, use} from "react";
import resObj from "../utils/mockdata";
const Body=()=>{
    const [listOfRestaurant,setListOfRestaurant]=useState(resObj);
    const [searchText,setsearchText]=useState("");

    // console.log("body rerender");
    // useEffect(()=>{
    //   fetchData();
    // },[])
    // const fetchData= async ()=>{
    //   const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5492263&lng=77.1858229&collection=83636&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    //   const json= await data.json();
    //   const restaurants = json.data.cards
    //     .map(cardWrapper => cardWrapper.card.card)
    //     .filter(card => card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
    //   setNewListOfRestaurant(restaurants);
    //   setListOfRestaurant(restaurants);
    // }
    return(
      <div className="Body">
        <div className="filter">
            <div className="search">
              <input type="text" className="searchBox" value={searchText} onChange={(e)=>{
                const value=e.target.value.toLowerCase();
                setsearchText(value);
                const tempsearchObj=resObj.filter(
                (res)=>{
                  let restaurantName=res.info.name.toLowerCase();
                  let flag=1;
                  for(let k=0;k<Math.min(restaurantName.length,value.length);k++){
                    if(restaurantName[k]!=value[k]){
                      flag=0;
                    }
                  }
                  return flag===1;
                }
              )
              const temp=resObj.filter((res)=>{
                let newres=res.info.name.toLowerCase();
                return newres.includes(value);
                })
              tempsearchObj.push(...temp);
              const seen = new Set();
              const combined = tempsearchObj.filter(res => {
                if (seen.has(res.info.id)) return false;
                  seen.add(res.info.id);
                  return true;
                  });
              if(value.length===0){
                setListOfRestaurant(resObj);
              }else{
                setListOfRestaurant(combined);
              }
              //  console.log(searchText);
              }}
              onKeyDown={(e)=>{
                if(e.key==="Enter"){
                  const temp=resObj.filter((res)=>{
                    let newres=res.info.name.toLowerCase();
                    return newres.includes(searchText);
                  })
                  setListOfRestaurant(temp)
                }
              }}
              ></input>
              <button id="search-btn" onClick={()=>{
                // console.log(searchText);
                const temp=resObj.filter((res)=>{
                  let newres=res.info.name.toLowerCase();
                  return newres.includes(searchText);
                });
                setListOfRestaurant(temp);
              }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
                const tempObj=resObj.filter(
                    (res)=>res.info.avgRating>4.5);
                setListOfRestaurant(tempObj);
            }}>Top Rated Restaurant
            </button>
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