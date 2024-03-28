import {useEffect, useState} from "react"
import {MENU_API} from "./constants.js"
const useRestroMenu = (resId)=>{
    const [resCard , setResCard] = useState(null)

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
    const data = await fetch(MENU_API + resId)
       const jsonData  = await data.json()
         setResCard(jsonData)
    }
    return resCard
}
export default useRestroMenu

