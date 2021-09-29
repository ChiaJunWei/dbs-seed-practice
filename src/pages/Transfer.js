import React, {  useState } from 'react';
import axios from 'axios';
import '../Styles/Login.css'
import Sidebar from './Sidebar/Sidebar';
import {useSelector} from "react-redux"
import {selectUser} from '../redux/userSlice'
import {selectTempUser} from '../redux/temploginSlice'
import LoggedIn from "./isLogin"
import GetUserData from "./GetUserData"

const Transfer =() => {
    const user = useSelector(selectUser);
    const tempuser = useSelector(selectTempUser);
    const [payeeid,setPayeeid]= useState("");
    const [amount,setAmount]= useState("");
    const [egift,setEgift]= useState(false);
    const [message,setMessage]= useState("");

    var data=GetUserData();
    LoggedIn();  

    // get custID,accountKey
    //user.custID, user.accountkey


    const handleSubmit= async(e)=>{             
        e.preventDefault();

        axios.get('https://jsonplaceholder.typicode.com/users/1')        
        .then((response) => {
            console.log(response);
            if (response.status > 300) {
                alert(response.statusText)
            } else {
                console.log('success')
                   

            }
        }, (error) => {
            console.log(error);
        });
    }



    return (
        <div className='transfer-container'>
            <Sidebar/>
            <div className='transfer-page-container'>
            <div className="login-container">
            <div className="login">
                <div className="box">
                    <div className='form-wrap'>
                        <div className="trans-box"> <h2 className='h2'>Transfer</h2> </div>                       
                        <table style={{border:"1px solid"}} >   
                            <tr >
                                <td>
                                    <label> Payee Account ID:</label>
                                </td>
                                <td>
                                < input type= "text" placeholder="Account No." value={payeeid} onChange= {(e)=>setPayeeid(e.target.value)}/>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    <label> Amount:</label>
                                </td>
                                <td>
                                <input type= "text" placeholder="Amount:" value={amount} onChange= {(e)=>setAmount(e.target.value)}/>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    <label> eGift?</label>
                                </td>
                                <td>
                                <input type= "checkbox" id='egiftbutton' checked={egift} onChange={(e)=>{setEgift(e.target.checked)}}/>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    <label> Message:</label>    
                                </td>
                                <td>
                                <input type= "text" placeholder="Message" value={message} onChange= {(e)=>setMessage(e.target.value)}/>
                                </td>
                                
                            </tr>
                            <tr>
                            <td></td>
                            <td>
                            <button className="transferbutton" onClick={handleSubmit}> Submit </button>
                            </td>
                            </tr>




                        </table>

                    </div>
                </div>
            </div>
            </div>
            </div>

        </div>


    )

}

export default Transfer
