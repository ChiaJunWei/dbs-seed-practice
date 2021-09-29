import React, {  useState } from 'react';
import axios from 'axios';
import '../Styles/transfer.css'
import Sidebar from './Sidebar/Sidebar';
import {useSelector} from "react-redux"
import {selectUser} from '../redux/userSlice'
import {selectTempUser} from '../redux/temploginSlice'
import LogInCheck from "../Functionals/LogInCheck"
import GetUserData from "../Functionals/GetUserData"

const Transfer =() => {
    const [payeeid,setPayeeid]= useState("");
    const [amount,setAmount]= useState("");
    const [egift,setEgift]= useState(false);
    const [message,setMessage]= useState("");

    var userData=GetUserData();
    LogInCheck();
    
    const url = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts"
    const xApiKey = "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd"
    let config ={
      headers:{ 'x-api-key': xApiKey }
    }
    let bodydata ={
        body: JSON.stringify({
        "custID": userData.custID,
        "accountKey": userData.accountKey,
        "payeeID":payeeid,
        "amount":amount,
        "eGift":egift,
        "message":message,

     })
    }    


    const handleSubmit= async(e)=>{             
        e.preventDefault();

        axios.post(url,bodydata,config)        
        .then((response) => {
            console.log(response);
            if (response.status > 300) {
                alert(response.statusText)
            } else {
                alert(response.statusCode);
                alert(response.message);

            }
        })
    }



    return (
        <div className='transfer-container'>
            <Sidebar/>
            <div className='transfer-page-container'>
            <div className="transfer">
                <div className="transfer-box">
                    <div className='form-wrap'>
                        <div className="trans-box"> <h2 className='h2'>Transfer</h2> </div>                       
                        <table style={{border:"1px solid"}} >   
                            <tr >
                                <td>
                                    <label> Payee Account ID:</label>
                                </td>
                                <td>
                                < input id='transferinput' type= "text" placeholder="Account No." value={payeeid} onChange= {(e)=>setPayeeid(e.target.value)}/>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    <label> Amount:</label>
                                </td>
                                <td>
                                <input id='transferinput' type= "text" placeholder="Amount:" value={amount} onChange= {(e)=>setAmount(e.target.value)}/>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    <label> eGift?</label>
                                </td>
                                <td>
                                <input id='transferinput' type= "checkbox" id='egiftbutton' checked={egift} onChange={(e)=>{setEgift(e.target.checked)}}/>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    <label> Message:</label>    
                                </td>
                                <td>
                                <input id='transferinput' type= "text" placeholder="Message" value={message} onChange= {(e)=>setMessage(e.target.value)}/>
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


    )

}

export default Transfer
