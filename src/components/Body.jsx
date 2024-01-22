import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
  // State Variable
  const [resList,setResList]=useState([]);
  const [filteredResList,setFilteredResList]=useState([]);
  const [searchText,setSearchText]=useState('');

  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4265702&lng=78.3251902&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // Optional Chaining
    setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus=useOnlineStatus();

  if(onlineStatus===false) return <h1>Looks like you are offline!! Please check interenet connection</h1>
  // Conditional Rendering
  if(resList.length === 0){
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="search">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
            const filteredres=resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredResList(filteredres);
          }}>Search</button>
        </div>
        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
          const filteredList=resList.filter((res) => res.info.avgRating > 4);
          setResList(filteredList);
        }}>Top Rated restaurant</button>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredResList.map((d)=>(
        <Link key={d.info.id} to={"restaurants/"+d.info.id}>
          {d.info.isOpen?<RestaurantCardPromoted resData={d}/>:<RestaurantCard resData={d}/>}
        </Link>))}
      </div>
    </div>
  )
}

export default Body;