import {RES_IMG} from "../utils/constants.js"
import star from "../utils/images/star.png"

const RestroCards = (props) =>{
    const {resData} = props
    const {info} = resData
    return(
         <div className = "flex flex-col h-full bg-cover p-2 rounded-lg hover:hover:scale-95 transition-transform transform-gpu">
         <div className = "h-44 overflow-hidden">
            <img className = "h-full w-full object-cover rounded-2xl" src = {RES_IMG + info.cloudinaryImageId}/>
            </div>
             <div className = "flex flex-col flex-grow my-4">
            
             <h2 className = "font-semibold text-xl w-12/12">{info.name}</h2>
                <p className = "text-lg font-semibold flex "><span className = "mr-2"><img src = {star}/></span>{info.avgRating} </p>
                
       
                <p className = "text-sm font-semibold text-ellipsis overflow-hidden w-12/12">{info.cuisines.join(", ")}</p>
                <p className = "font-semibold text-sm">{info.costForTwo}</p>
                </div>
         
         </div>
    )
}


//higher order component will take a component enhances it and returns it
export const withOfferLabel = (RestroCards) =>{
    return  (props) =>{
        const {resData} = props
        const {info} = resData
        return(
               <div>
                <h1 className = "bg-black z-20 text-white font-bold  px-4 rounded-r-lg absolute">{info.aggregatedDiscountInfoV3.header} {info.aggregatedDiscountInfoV3.subHeader}</h1>
                <RestroCards {...props}/>
               </div>
        )
    }
}
export default RestroCards