import React,{useState,List,props,Component} from 'react';
import imglogo from "./logo.png";
import userphotos from "./userphoto.jpg"
import userphotos1 from "./userphoto1.jpg"
import userphotos2 from "./userphoto2.jpg"
import userphotos3 from "./userphoto3.jpg"
import userphotos4 from "./userphoto4.jpg"
import MainScreen from "./MainScreen";
export default function SideMenu(props) {
    // const [array,setArray]= useState("");
    var UserArr=[];
    var imgArr=[userphotos,userphotos1,userphotos2,userphotos3,userphotos4];
    function printname()
    {
        alert("Mount error: No user found on network(localhost:5000)");
    }
    let index_num=0;
    let array= [
        {index:index_num},
        {name:"Shaunak",files:["file1.txt","file2.pdf","newfile.txt"]},
        {name:"Saumitra",files:[".docx","folder.txt","syllabus.pdf"]},
        {name:"Anmol",files:["file1.txt","folder.txt","change.ppt"]},
    ];
    for(var i=2;i<array.length;i++)
    {
        UserArr.push(
            <div className="user" onClick={() => printname()}>
                <span className="user-photo" ><img src={imgArr[i%imgArr.length]} alt="userphoto" style={{height:50,borderRadius:'100%'}}/></span>
                <span className="user-name" >{array[i].name}</span>
            </div>
        )
    }
    Component.defaultProps = {
        prop1: array,
    }

    return (
        <div className="side-Menu">
            <img src={imglogo} alt="NFS" style={{backgroundColor:"#a8dadc",height:52}} />

            <div className="user-list">
                <div className="user1" onClick={() => printname()}>
                    <span className="user-photo"><img src={imgArr[0]} alt="userphoto" style={{height:50,borderRadius:'100%'}}/></span>
                    <span className="user-name">{array[1].name} </span>
                </div>
                <hr/>
                <div className="online">Other users ({array.length-2})</div>
                <hr/>
                {UserArr}
            </div>
            <MainScreen Myprop={array} />
        </div>
        
    )
}
