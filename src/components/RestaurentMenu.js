import {useEffect, useState} from "react"
import Shimmar from "./Shimmar.js"
import {useParams} from "react-router-dom"
import useRestroMenu from "../utils/useRestroMenu.js"


const RestaurentMenu = () =>{
const {resId} = useParams()
  const resCard = useRestroMenu(resId)


  if (resCard === null) return <Shimmar/> 
   const {text } = resCard?.data?.cards[0]?.card?.card;
   const {cuisines } = resCard?.data?.cards[2]?.card?.card?.info;
   const {itemCards} = resCard?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
   return(
        <div>
            <h1>{text}</h1>
            <p>{cuisines.join(", ")}</p>
            <ul>
               {itemCards.map((item)=>(
                <li key = {item.card.info.id}>
                {item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100} 
                </li>
               )
                )}
            </ul>
        </div>
    )
}
export default RestaurentMenu