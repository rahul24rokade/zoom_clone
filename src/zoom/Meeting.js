import React from "react";
import microphone from './microphone.png'
import webcam from './webcam.png'  

function MeetingPage(){
    return(
        <div className="meeting">
          <div className="screen rel">
          <div className="btns abs">
          
              <button className ="icon mic rel s24">
              
                  <div classname= "tip fontr abs s13 cfff" img src ={microphone}>Turn off Microphone</div>
              </button>
              
              <button className ="icon webcam rel s24">
              
                  <div classname= "tip fontr abs s13 cfff" img src ={webcam}>Turn off Webcam</div>
              </button>
          </div>
          </div>
          <div className="stats rel">
              <h2 className="s20 fontr c333">Meeting ready</h2>
              <h2 className="s14 fontr c333"> localhost:3000/meeting/id</h2>
              <div className="btns abs">
                  <button className="s14 fontr cfff">
                      Join now
                  </button>
                  <button className="s14 fontr cfff">
                      Present
                  </button>
              </div>
          </div>
        </div>
    )
}

export default MeetingPage;

