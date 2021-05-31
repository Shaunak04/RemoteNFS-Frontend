import React,{props} from "react";
import Popup from "reactjs-popup";

const contentStyle = {
  width: "400px",
};

export default function CustomModal(props) {
  
  function deletefile(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
        console.log(this);
        }
    };
    var filenew = props.propname;
    let json = require('../files.json');
    var fileid = json[filenew];
    // console.log(filenew,fileid);
    xhttp.open("GET", "http://localhost:5000/delete?id="+fileid, true);
    xhttp.send();
    // console.log(props.propname);
  }

  function download(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
        console.log(this);
        }
    };
    var filenew = props.propname;
    let json = require('../files.json');
    var fileid = json[filenew];
    // console.log(filenew,fileid);
    xhttp.open("GET", "http://localhost:5000/download?id="+fileid+"&name="+filenew, true);
    xhttp.send();
    // console.log(props.propname);
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
            className="buttond"  onClick={download}
          >
            📁 Download 
          </button>
          <button
            className="buttonc"
            onClick={deletefile}
          >
           ❌Delete
          </button>
        </div>
      </div>
    )}
  </Popup>
    )}
