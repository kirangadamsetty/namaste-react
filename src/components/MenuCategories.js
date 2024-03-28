import { useDispatch } from "react-redux"
import {RES_IMG} from "../utils/constants.js"
import {useState} from "react"
import { addItem } from "../utils/cartSlice.js"
const MenuCategories = (props) => {
    const {itemData , showItem , setShowIndex} = props
    const {itemCards} = itemData?.card?.card
    const dispatch = useDispatch()
    const handler = () =>{
        setShowIndex()
        
    }
    const handleAddItems = (item)=>{
        dispatch(addItem(item))
    }
    return(
        <div className = "bg-gray-50 w-6/12 m-auto px-4 py-4 my-4 shadow-sm" onClick = {(handler)}>

        <div className = "flex justify-between py-2 cursor-pointer">
        <h1 className = "font-bold text-xl">{itemData?.card?.card?.title} ({itemCards.length})</h1>
        <button>🔻</button>
        </div>

       <div>
       {showItem && itemCards.map((item)=>{
       
      return  (
        <div className ="my-4 border-b-2 py-4 flex justify-between">
        <div className = "w-10/12 pr-3">
        <p className = "font-semibold text-xl">{item?.card?.info?.name}</p>
        <p className = "font-bold text-lg">₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</p>
        <p className = "text-gray-700 text-xs mt-4">{item?.card?.info?.description}</p>
        </div>
        <div className="relative w-2/12">
        <div className = "bg-cover rounded-lg shadow-md h-28  relative">
        <button className = "bg-white rounded-lg text-sm font-bold px-8 text-orange-500 border-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
        onClick = {() => handleAddItems(item)}
        
        >ADD +</button>
        <img className = "h-full w-full object-cover" src = {RES_IMG + item?.card?.info?.imageId}/>
        </div>
        </div>
        </div>
        
        )




       }
       )
       
       }
       
      
       </div>
          
        </div>
    )
}

export default MenuCategories





