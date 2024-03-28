import {useSelector} from "react-redux"
import { RES_IMG } from "../utils/constants.js"
import {clearItem} from  "../utils/cartSlice.js"
import { useDispatch } from "react-redux"


const Cart = () =>{

    const item = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () =>{
        dispatch(clearItem())
    }


    return(
        <div className = "w-6/12 m-auto bg-gray-100">
            <h1 className = "text-center font-bold m-4 text-2xl">CartItems</h1>
            <div className = "text-center">  
            <button className = "bg-red-400 rounded-lg p-4 text-white"  
             onClick = {handleClearCart}
            >Clear Cart</button>
            {item.length === 0 && <h1 className = "font-bold text-2xl p-4">Your Cart is Empty, Please Add Items</h1>}
            </div>
            {item.map((item)=>{
       
       return  (
         <div className ="my-4 border-b-2 py-4 px-4 flex justify-between">
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
    )
}
export default Cart