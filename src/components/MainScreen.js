import React,{Component,props,} from 'react'
import folderimg from "./folder.png";
import fileimg from "./file.png";
import pdfimg from "./pdf.png";
import pptimg from "./ppt.png";
import cppimg from "./cpp.png";
import txtimg from "./txt.png";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Popup1 from './Popup';
<script type="text/javascript" src="data.json"></script>
var path="D:/projects/RemoteNFS/src/files/test.txt";

export default function MainScreen(props) {
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
        console.log(Filename);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            }
        };
        xhttp.open("GET", "http://localhost:5000/upload?path=D:/projects/RemoteNFS/src/files/test.txt", true);
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
                    <input id="filename" type="file"/>
                    <input type="submit" onClick={submit} value="Upload"/>
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
