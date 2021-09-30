import React, { useState } from 'react';
import '../Styles/Login.css'
import header2 from '../assets/DBS-Bank-logo.png';
import { useHistory } from "react-router-dom";

const Login = () =>{
    const [name,setName]= useState("");
    const [password,setPassword]= useState("");
    const [stayLogin, setstayLogin]= useState(false);
    let history = useHistory();

    const handleSubmit= async(e)=>{             
        e.preventDefault();
        history.push("/")     
    }
    
    

        return (
            <div className="login-container">
            <div className="login">
                <div className="box">
                    <div className='form-wrap'>
                        <img src={header2} alt="DBS Banking" className="dbslogo" /><br /><br />

                        <form onSubmit={(e)=>{handleSubmit(e)}}>
                            <div className="form-group">
                                <label>Username</label>
                                <input id='logininput' type="name" className="form-control" placeholder="Enter Username" value={name} onChange= {(e)=>setName(e.target.value)} name="name" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input id='logininput' type="password" className="form-control" value={password} onChange= {(e)=>setPassword(e.target.value)} name="password" placeholder="Enter Password" />
                            </div>

                            <p className="stay-logged-in"> Stay logged in?      
                                <input type= "checkbox" id='stay-logged-in-input' checked={stayLogin} onChange={(e)=>{setstayLogin(e.target.checked)}}/>
                            </p>
                            <button className="btn btn-primary btn-block"><b>Login</b></button>
                            <p className="forgot-password">
                                <a href="/#">Forgot password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
}
    


export default Login

