import React,{props} from "react";
import Popup from "reactjs-popup";

const contentStyle = {
  width: "400px",
};

export default function CustomModal(props) {
  function download(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        }
    };
    xhttp.open("GET", "http://localhost:5000/upload?id=test.txt&filename=1K8odyKSu5eAZfAcn0ddMuwNxhzLoqhAR", true);
    xhttp.send();
  }
    return(
  <Popup
    trigger={<button className="button"> {props.propname} </button>}
    modal
    contentStyle={contentStyle}
  >
    {close => (
      <div className="modal">

        <div className="header" >⚠️ Download Prompt  </div>
        <div className="content">
          {" "}
          Are you sure you want to download?
        </div>
        <div className="actions">
          <button
            className="buttond" onClick={download}
          >
            📁 Download 
          </button>
          <button
            className="buttonc"
            onClick={() => {
              close();
            }}
          >
           ❌ No
          </button>
        </div>
      </div>
    )}
  </Popup>
    )}
