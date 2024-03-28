import {useState} from "react"


const ProfileCards = (props) =>{
    const {name} = props
    const [count] = useState(0)


    return(
        <div className = "profile-container">
            <h1>{name}</h1>
            <h3>Beloved God</h3>
            <p>Helped Ram to find Sita</p>
            <p>{count}</p>
        </div>
    )
}

export default ProfileCards

