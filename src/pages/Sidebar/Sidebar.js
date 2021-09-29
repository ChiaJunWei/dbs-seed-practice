import React from 'react'
import './Sidebar.css'
import  {SidebarData } from './SidebarData'
import { Link,  useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();


    return (
        <div className="Sidebar-background">
            <div className="Sidebar">
                <ul className="SidebarList">
                {SidebarData.map((val,key)=>{
                    return(
                        <li 
                            key={key} 
                            className="row"
                            id={window.location.pathname=== val.link? "active" :""}
 >
                                {" "}
                                <div id="icon">{val.icon}</div> 
                                <div id="title"> <Link className= 'url'to ={{ pathname:val.link , state: { ...location.state } }}> {val.title} </Link> </div>
                        </li>);
                })}                
            </ul>
            </div>
        </div>
    )
}

export default Sidebar
