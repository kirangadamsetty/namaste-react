import {LOGO_IMG} from "../utils/constants.js"
import {useState} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header  = () =>{
  const [loginInbutton, setLoginButton] = useState("LogIn")
   const onlineStatus = useOnlineStatus()
    return(
    <div className = "navbar">
      <div className = "logo">
          <a href = "/">
          <img src = {LOGO_IMG}/>
      </a>
      </div>
      <div>
        <ul className = "nav-items">
        <li>{onlineStatus ? "Online🤎" : "Offline💚"}</li>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About Us</Link></li>
            <li><Link to = "/contact">Contact Us</Link></li>
            <li>Cart</li>
           <li><button className = "login-button"
            onClick = {()=>{
                  loginInbutton === "LogIn" ? setLoginButton("LogOut") : setLoginButton("LogIn")
            }}
           
           >{loginInbutton}</button></li>
        </ul>
      
      </div>
    </div>
    )
}


export default Header