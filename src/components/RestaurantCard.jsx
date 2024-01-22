import { CDN_URL } from "../utils/constants";


const RestaurantCard=(props)=>{
  return (
    <div className="res-card m-3 p-2 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <img
        className="res-logo rounded-lg" 
        alt="res-logo"
        src={CDN_URL+props.resData.info.cloudinaryImageId}/>
      <h3 className="font-bold py-4">{props.resData.info.name}</h3>
      <h4>{props.resData.info.cuisines.join(', ')}</h4>
      <h4>{props.resData.info.avgRating}</h4>
      <h4>{props.resData.info.costForTwo}</h4>
    </div>
  )
}

// Higher order Component
export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;