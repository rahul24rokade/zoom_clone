import React from "react";
import zoom from "../js/core"
   

function HomePage(props){

    const createMeeting = () => {
        console.log("creating new meeting");
        var ID = zoom.generateID(5, 10);
        console.log(props);
        props.history.push("/meeting/" + ID);
    }

    return(
        <div className="home">
           <h1>ZOOM CLONE</h1>
           <h2>Lets Start</h2>
           <div className = "actions">
            <button className="btn" onClick ={ e => createMeeting()} >JOIN NEW MEETING</button>
            <input className = "room-code" placeholder = "Enter code or id"/>
           </div>
           <div className = "tablet-Frame">
               <div className = "tablet"/>

               
           </div>
        </div>
    )
}

export default HomePage;