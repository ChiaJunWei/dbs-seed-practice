import React, { Component } from 'react';
import BalanceBarChart from './Charts/BalanceBarChart';
import axios from 'axios';
import '../Styles/Login.css'
import Sidebar from './Sidebar/Sidebar';

class Transfer extends Component {


    render() {
    return (
        <div className='dashboard-container'>
            <Sidebar/>
            <div className="login-container">
            <div className="login">
                <div className="box">
                    <div className='form-wrap'>
                        <div className="trans-box"> <h2 className='h2'>Transfer</h2> </div>
                        
                        <table style={{border:"1px solid"}} >
                            <tr >
                                <td>
                                    <label> Payee Account No:</label>
                                </td>
                                <td>
                                <input type= "text" placeholder="Account No."/>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    <label> Amount:</label>
                                </td>
                                <td>
                                <input type= "text" placeholder="Amount:"/>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    <label> Payee Account No:</label>
                                </td>
                                <td>
                                <input type= "text" placeholder="Account No."/>
                                </td>
                                
                            </tr>
                            <tr>
                            <td></td>
                            <td>
                            <button className="transferbutton"> Submit </button>
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
}

export default Transfer
