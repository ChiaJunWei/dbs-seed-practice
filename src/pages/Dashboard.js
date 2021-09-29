import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import '../Styles/dashboard.css'
import LoggedIn from "./isLogin"
import GetUserData from "./GetUserData"


const Dashboard = () => {
    var data=GetUserData();
    LoggedIn();

    return (
        <div className='dashboard-container'>
            <Sidebar/>           

            <div className='dashboard-components-container'>
                <p style={{color: "#538b01"}}> Welcome back, {(data.user)} </p>
                <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt = "dbs-logo"width="200" height="300"></img>
                <p> ID:{(data.id)} </p>
                <p> bye </p>
                 
            </div>
        </div>
    )
}

export default Dashboard
