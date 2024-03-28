import React from "react"

class ClassProfileCard extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            count : 0
        }
    }    
   
     componentDidMount(){
     }

     render(){
       const {count} = this.state

        return(
            <div className = "profile-container">
            <h1>{this.props.name}</h1>
            <h3>Beloved God</h3>
            <p>Helped Ram to find Sita</p>
            <button onClick = {()=>{
                this.setState({
                    count:this.state.count +1
                })
            }}>Total Vanara's Needed</button>
            <p>{count}</p>
        </div>
        )
     }

}
export default ClassProfileCard