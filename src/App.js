import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Error from "./components/Error.js"
import RestaurentMenu from "./components/RestaurentMenu.js"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom" 


const RootContainer = () =>{
    return(
        <div className = "root-container">
<Header/>
<Outlet/>
        </div>
    )
}
 

const appRouter  = createBrowserRouter([
    {
        path:"/",
        element : <RootContainer/>,
        errorElement : <Error/>,
        children :[
            {
                path:"/",
                element : <Body/>
            },
            {
                path:"/about",
                element : <About/>
            },
            {
                path :"/contact",
                element : <Contact/>
            },
            {
                path : "/restaurents/:resId",
                element : <RestaurentMenu/>
            }
        ]
    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router= {appRouter}/>)



