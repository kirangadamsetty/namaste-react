import {LOGO_IMG} from "../utils/constants.js"
import {useState} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext.js"
import {useContext} from "react"
import man from '../utils/images/man.png'
import trolley from "../utils/images/trolley.png"
import cooking from "../utils/images/cooking.png"
import swiggy from "../utils/images/swiggy.jpg"
import {useSelector} from "react-redux"



const Header  = () =>{
  const [loginInbutton, setLoginButton] = useState("LogIn")
   const onlineStatus = useOnlineStatus()
   const {loggedUser} = useContext(UserContext)
   const cartItems = useSelector((store) => store.cart.items)
    return(
    <div className = "flex justify-around items-center p-4 shadow-lg">
      <div>
          <a href = "/">
          <img className = "w-16" src = {swiggy}/>
      </a>
      </div>
      <div>
        <ul className = "flex place-items-center">
       
                  <li className = "px-4 font-sans font-bold"><Link to = "/">Home</Link></li>
            <li className = "px-4 font-sans font-bold"><Link to = "/about">About Us</Link></li>
            <li className = "px-4 font-sans font-bold"><Link to = "/grocery">Grocery</Link></li>
            <li className = "px-4 font-sans font-bold"><Link to = "/contact">Contact Us</Link></li>
           
           
            <li className = "w-10"><img src = {man}/></li>
        <li className = "px-4 font-sans font-bold">{onlineStatus ? "Online💗" : "Offline💔"}</li>
        <li className = "px-4 font-sans font-bold">{loggedUser}</li>
           <li className = "px-4 font-sans font-bold"><button className ="px-5 py-1 bg-red-400 text-white rounded-md"
            onClick = {()=>{
                  loginInbutton === "LogIn" ? setLoginButton("LogOut") : setLoginButton("LogIn")
            }}
           
           >{loginInbutton} </button></li>
            <li className = "px-4 font-sans font-bold w-16 flex"><Link to = "./cart"><img src = {trolley}/> </Link><span className = "bg-red-200 w-10  rounded-full">{cartItems.length}</span></li>
        </ul>
      
      </div>
    </div>
    )
}


export default Header