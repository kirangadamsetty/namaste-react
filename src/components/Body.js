import RestroCards, {withOfferLabel} from "./RestroCards.js"
import Shimmar from "./Shimmar.js"
import {useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus.js"
import UserContext from "../utils/UserContext.js"

const Body = () =>{
    const [listOfRestaurent , setListOfRestaurent] = useState([]);
    const [filteredRestaurent , setFilteredRestaurent] = useState([])
      const [searchInput , setSearchInput]= useState([]);
      const RestroWithOffers = withOfferLabel(RestroCards)
        const {setUserName, loggedUser} = useContext(UserContext)
     useEffect(()=>{
           fetchData()
     }, []);
    
     const fetchData = async () =>{
        try{
        const data  = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json()  
        console.log(jsonData)       
        setListOfRestaurent(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurent(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }catch(error){
            console.log(error)
        }
    }
    const onlineStatus = useOnlineStatus()
       if (onlineStatus === false) return <h1>Check your internet connection, you are offline</h1>


    return listOfRestaurent.length === 0 ? <Shimmar/> : (
        <div className = "body-container">

        <div className = "flex my-8 container mx-auto max-w-screen-xl">

      
        <button className = "px-4 py-2 bg-red-400 text-white font-semibold rounded-md mr-4" 
        
        onClick = {()=>{
            const filteredData = listOfRestaurent.filter((resObj)=> resObj.info.avgRating > 4.5)
            setFilteredRestaurent(filteredData)
        }}
        > Top Rated Restaurents</button>
     <button className = "px-4 py-2 bg-red-400 text-white font-semibold rounded-md mx-4"
     onClick = {()=>{
        const filteredData = listOfRestaurent.filter((res)=>
          res.info.avgRating < 4.5
     
        )
        setFilteredRestaurent(filteredData)
     } }
     
     >Low Rated Restaurents</button>
        <div>
       <input  className = "border-2 py-2 ml-4" type = "search" value = {searchInput}
        onChange = {(e)=>{
            setSearchInput(e.target.value) 
        }}
       />
       <button className = "border-2  py-2 px-4"
       
       onClick  = {()=>{
       const filteredData = listOfRestaurent.filter((res)=>
        res.info.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        setFilteredRestaurent(filteredData)
       }}
       >Search</button>

       <input type = "text" className = "border-2 ml-4 py-2 px-4" value = {loggedUser} onChange = {(e)=>setUserName(e.target.value)}/>
       </div>
        </div>


       <div className = "container my-4 mx-auto max-w-screen-xl">
        <div className = "grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10 ">                         
               {filteredRestaurent.map((res)=> (
                
                <Link
                keys = {res.info.id}
                to={"/restaurents/" + res.info.id}
                >

                {res.info.aggregatedDiscountInfoV3 === undefined ? <RestroCards resData ={res}/> : <RestroWithOffers resData ={res}/>}
               
                </Link>
                
               ))}
            </div>        
        </div>
        </div>
    )
}
export default Body












