import React,{Component,props,} from 'react'
import fileimg from "./file.png";
import 'reactjs-popup/dist/index.css';
import Popup1 from './Popup';
// import Filename from "./arr.js"
<script type="text/javascript" src="data.json"></script>
var path="D:/projects/RemoteNFS/src/files/test.txt";
function makereq(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        console.log("correct");
        }
        else{
            console.log(this.status);
        }
    };
    console.log("hello");
    xhttp.open("GET", "http://127.0.0.1:5000/files", true);
    xhttp.send();
}

export default function MainScreen(props) {
    makereq();
    var Filearr=[];
    var Filename=[];
    let json = require('../files.json');
    for(var k in json) {
        Filename.push(k);
    }
    function submit()
    {
        var x = document.getElementById("filename").value;
        Filename.push(x);
        console.log(x.substr(12,x.length));
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            }
        };
        console.log(Filename);
        var filenew = x.substr(12,x.length);
        xhttp.open("GET", "http://localhost:5000/upload?path=D:/projects/RemoteNFS/src/files/"+filenew, true);
        xhttp.send();
    }
    Component.defaultProps = {
        name: Filename,
    }
    for(var i=0;i<Filename.length;i++)
    {
        Filearr.push(
        <div className="holder">
            <img src={fileimg} alt="file-img" style={{height:92}}/>
            <Popup1 propname={Filename[i]} />
        </div>
        )
    }

    return (
        <div className="Main-Screen">
            <div className="top-nav">
                Current User - {props.Myprop[props.Myprop[0].index+1].name}
                <form action="localhost:5000/upload?path=">
                    File Upload:   
                    <input class="uploadbtn" id="filename" type="file"/>
                    <input class="uploadbtn" type="submit" onClick={submit} value="Upload"/>
                </form>
                <p id="demo">
                </p>
            </div>
            <div className="folder-structure" >
                {Filearr}
            </div>
        </div>
    )
}
