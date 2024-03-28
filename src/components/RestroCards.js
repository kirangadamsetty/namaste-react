import {RES_IMG} from "../utils/constants.js"


const RestroCards = (props) =>{
    const {resData} = props
    const {info} = resData
    return(
         <div className = "res-card">
         <div className = "img-container">
            <img src = {RES_IMG + info.cloudinaryImageId}/>
            </div>
             <div>
                <h2 className = "card-heading">{info.name}</h2>
                <p>{info.avgRating} Rating</p>
                <p className = "card-cusinie-pargraph">{info.cuisines.join(", ")}</p>
                <p>{info.costForTwo}</p>
                </div>
         
         </div>
    )
}


export default RestroCards