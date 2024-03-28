const Contact = () =>{
    return(
        <div className = "flex flex-col items-center">
            <h1 className = "font-bold text-2xl p-4">Contact us Page</h1>
           <form className ="flex flex-col items-start bg-gray-200 rounded-lg">
            <input type = "text" placeholder  = "Full Name" className = "px-4 border-2 border-black m-4"/>
            <input type = "text" placeholder = "Message" className = " px-4 border-2 border-black m-4"/>
           <p>Submit Your Details</p>
                       <button className = "border-2 border-black m-4 bg-gray-200 px-4">Submit</button>
           </form>
        </div>
    )
}

export default Contact