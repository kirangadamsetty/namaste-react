
import ProfileCards from "./ProfileCards"
import ClassProfileCard from "./ClassProfileCard"
import React from "react"


class About extends React.Component{
  constructor(props){
    super(props)
   this.state = {
    user : {
      name : "Kiran",
         },
     count : 0,
     hiddenMessage : ""
   }
  //  console.log("Constructor")
  }  
  async componentDidMount(){
    const gitData = await fetch("https://api.github.com/users/kirangadamsetty");
    const jsonData = await gitData.json();
    this.setState({
      user : jsonData
      
    })
    this.timer = setInterval(()=>{
      console.log("Namaste Kiran")
    }, 1000)
    // console.log("ComponentDidMount")
  }

  componentDidUpdate(prevProps , prevState){
         if(prevState.count === 3){
           this.setState({
            hiddenMessage : "Now the Count is 4 lets Stop"
           })
         }
        //  console.log("ComponentDidUpdate")
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render(){    
    const {user} = this.state
      // console.log("render")
    return(      
        <div>              
              <h1>About US</h1>
              <div className = "userContainer">
              <div>
            <h2>{user.name}</h2>         
           <p>{user.id}</p>
           <button  
             onClick  = {()=>{
              this.setState({
                count : this.state.count + 1
              })
             }}
           >IncreaseCount</button>
           <h3>{this.state.count}</h3>
           <p>{this.state.hiddenMessage}</p>
           </div>
           <img className = "gitProfilePic" src = {user.avatar_url}/>
           </div>
          
            <ClassProfileCard name = "Ram"/>
            <ProfileCards name = "Hanuman"/>
        </div>
    )
  }
}
export default About