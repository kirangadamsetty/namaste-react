import React, {lazy, Suspense , useState, useEffect} from "react" 
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Contact from "./components/Contact.js"
import Error from "./components/Error.js"
import RestaurentMenu from "./components/RestaurentMenu.js"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom" 
import UserContext from "./utils/UserContext.js"
import { Provider } from "react-redux"
import appStore from "./utils/appStore.js"
import Cart from "./components/Cart.js"
const RootContainer = () =>{
    
const [userName , setUserName] = useState(null)


useEffect(()=>{
  const data = {
    user : "Jai Sri Ram"
  }
  setUserName(data.user)
}, [])

    return(
        <Provider store = {appStore}>
        <UserContext.Provider value = {{loggedUser : userName, setUserName}}>
        <div className = "root-container">
      
<Header/>
<Outlet/>

        </div>
        </UserContext.Provider>
        </Provider>
    )
}
const Grocery = lazy(()=> import("./components/Grocery.js"))
const About  = lazy(()=> import("./components/About.js"))

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
                element :<Suspense fallback = {"Loading..."}><About/></Suspense>
            },
            {
                path :"/contact",
                element : <Contact/>
            },
            {
                path : "/restaurents/:resId",
                element : <RestaurentMenu/>
            },
            {
                path : "/grocery",
                element : <Suspense fallback = {"Loading..."}><Grocery/></Suspense>
            },
            {
                path : "/cart",
                element : <Cart/>
            }
        ]
    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router= {appRouter}/>)



