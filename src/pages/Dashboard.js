import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import { useLocation,useHistory } from "react-router-dom";
import BalanceBarChart from './Charts/BalanceBarChart';
import './Dashboard.css'
import SavingsBar from './Charts/SavingsBar';


const Dashboard = () => {
    const location = useLocation();
	const history = useHistory();
    
	if (
		location.state === undefined ||
		Object.keys(location.state).length === 0
	) {
		history.push("/Login");
	}

    return (
        <div className='dashboard-container'>
            <div>                
                <Sidebar/>                
            </div>
            <div className='dashboard-components-container'>
                <h1> Welcome to DBS , {location.state.name} </h1>
                {/* <div className='barChart' id='BalanceBarChart'> 
                <BalanceBarChart/>   
                </div> */}
                <div  className='SavingsbarChart'>
                    <h1 className="Savings">Savings</h1>                   
                    <SavingsBar/>
                
                </div>
                 
            </div>
        </div>
    )
}

export default Dashboard
