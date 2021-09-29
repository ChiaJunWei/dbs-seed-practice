import React from "react";
import {useSelector} from "react-redux"
import {selectUser} from '../redux/userSlice'
import {selectTempUser} from '../redux/temploginSlice'
import LoggedIn from "./isLogin"
import GetUserData from "./GetUserData"
import '../Styles/Login.css'
import Sidebar from './Sidebar/Sidebar';




function Balance() {
    const user = useSelector(selectUser);
    const tempuser = useSelector(selectTempUser);  
    var data=GetUserData();
    LoggedIn();



    
    // useEffect(()=> {
    //     fetch('https://609206fb85ff510017211e36.mockapi.io/Customer')
    //     .then(response => response.json())
    //     .then(json => setitems(json))
    // },[])

    return(
        <div className='transfer-container'>
            <Sidebar/>  
        <div className="BalanceTable">
            <table style={{border:"1px solid"}}>
                <tr style={{border:"1px solid"}}>
                    <th >Full Name</th>
                    <th>Balance</th>
                </tr>
                <tr style={{border:"1px solid"}}>
                    <td style={{border:"1px solid"}}>{(data.user)}</td>
                    <td style={{border:"1px solid"}}> ${(data.id)}</td>
                </tr>



            
        {/* {items.map((user) => {
            return(
                  <tr style={{border:"1px solid"}}>
                    <td style={{border:"1px solid"}}>{(user.username)}</td>
                    <td style={{border:"1px solid"}}> ${(user.balance)}</td>
                </tr>
            );
        })} */}
        </table>   
        </div> 
        </div>
        );
};

export default Balance;