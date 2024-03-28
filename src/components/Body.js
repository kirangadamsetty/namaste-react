import RestroCards from "./RestroCards.js"
import Shimmar from "./Shimmar.js"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus.js"

const Body = () =>{
    const [listOfRestaurent , setListOfRestaurent] = useState([]);
    const [filteredRestaurent , setFilteredRestaurent] = useState([])
      const [searchInput , setSearchInput]= useState([]);
     useEffect(()=>{
           fetchData()
     }, []);
    
     const fetchData = async () =>{
        try{
        const data  = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json()         
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
        <div className = "search-container">
        <button className = "filtered-button" 
        
        onClick = {()=>{
            const filteredData = listOfRestaurent.filter((resObj)=> resObj.info.avgRating > 4.5)
            setFilteredRestaurent(filteredData)
        }}
        > Top Rated Restaurents</button>
     <button className = "filtered-button"
     onClick = {()=>{
        const filteredData = listOfRestaurent.filter((res)=>
          res.info.avgRating < 4.5
     
        )
        setFilteredRestaurent(filteredData)
     } }
     
     >Low Rated Restaurents</button>





        <div>
       <input type = "search" value = {searchInput}
        onChange = {(e)=>{
            setSearchInput(e.target.value) 
        }}
       />
       <button className = "search-input"
       
       onClick  = {()=>{
        const filteredData = listOfRestaurent.filter((res)=>
           res.info.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        setFilteredRestaurent(filteredData)
       }}
       >Search</button>
       </div>
        </div>
        <div className = "restro-card-container">                         
               {filteredRestaurent.map((res)=> (
                <Link
                keys = {res.info.id}
                to={"/restaurents/" + res.info.id}
                >
                <RestroCards resData ={res}/>
                </Link>
                
               ))}
                 </div>        
        </div>
    )
}
export default Body












