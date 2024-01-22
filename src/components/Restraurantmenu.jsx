import React,{useState} from 'react';
import {useParams} from "react-router-dom";
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const Restraurantmenu = () => {
  const [showIndex,setShowIndex]=useState(0);
  const {resId}=useParams();

  const resInfo=useRestaurantMenu(resId);
  
  if(resInfo === null) return <Shimmer />;

  const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;

  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div className='text-center'>
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(', ')} - {costForTwoMessage}</p>
      {categories.map((category,index)=>
      // Controlled Component
        <RestaurantCategory 
          key={index} 
          data={category?.card?.card}
          showItems={index===showIndex?true:false}
          setShowIndex={()=>setShowIndex(index)}
        />
      )}
    </div>
  )
}

export default Restraurantmenu;
