import {useEffect, useState} from "react"
import Shimmar from "./Shimmar.js"
import {useParams} from "react-router-dom"
import useRestroMenu from "../utils/useRestroMenu.js"
import MenuCategories from "./MenuCategories.js"

const RestaurentMenu = () =>{
const {resId} = useParams()
  const resCard = useRestroMenu(resId)
 const [showIndex , setShowIndex]= useState(null)
  if (resCard === null) return <Shimmar/> 
   const {name } = resCard?.data?.cards[2]?.card?.card?.info;
   const {cuisines } = resCard?.data?.cards[2]?.card?.card?.info;
   const {itemCards} = resCard?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  const categoryList = resCard?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  const categories = categoryList.filter((e)=> e.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
  return(
        <div> 
        <div className = "m-auto w-6/12 my-4 flex justify-between border-b-2 border-dashed py-4">
        <div>
           <h1 className = "font-bold text-2xl">{name}</h1>
            <p className =" text-sm mt-4">{cuisines.join(", ")}</p>
        </div>
           <div className = "border-2 w-24 p-2 py-4 rounded-lg">
            <p className = "text-center mb-2 font-semibold">⭐ {resCard?.data?.cards[2]?.card?.card?.info?.avgRating}</p>
            <hr/>
            <p className = "text-xs mt-2">{resCard?.data?.cards[2]?.card?.card?.info?.totalRatingsString}</p>
           </div>
           </div>
            <ul>
              {categories.map((menuItems , index)=> <li key = {menuItems?.card?.card?.itemCards?.card?.info?.id}>{<MenuCategories setShowIndex = {()=>{setShowIndex(index)}}  showItem = {index === showIndex && true} itemData = {menuItems}/>}</li>)}
            </ul>
        </div>
    )
}
export default RestaurentMenu