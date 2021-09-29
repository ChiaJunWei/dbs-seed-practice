import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import {login} from "../redux/userSlice"
import {templogin} from "../redux/temploginSlice"
import axios from 'axios';
import '../Styles/Login.css'
import header2 from '../assets/desktoplogo.png';
import { useHistory } from "react-router-dom";

const Login = () =>{
    const [name,setName]= useState("");
    const [password,setPassword]= useState("");
    const [stayLogin, setstayLogin]= useState(false);
    const dispatch= useDispatch();
    let history = useHistory();


    const handleSubmit= async(e)=>{             
        e.preventDefault();

        axios.get('https://jsonplaceholder.typicode.com/users/1')        
        .then((response) => {
            console.log(response);
            if (response.status > 300) {
                alert(response.statusText)
            } else {
                console.log('success')
                if (stayLogin === false){
                dispatch(   
                    templogin({
                        loggedIn:true,
                        userData: response.data,
                        user: response.data.username,
                        id: response.data.id
                    })
                );
                } else {
                    dispatch(   
                        login({
                            loggedIn:true,
                            userData: response.data,
                            user: response.data.username,
                            id: response.data.id
                        })
                    );

                }
                history.push("/dashboard")                      

            }
        }, (error) => {
            console.log(error);
        });
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



// export class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//             value: '',
//             customerid: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }
    

//     handleSubmit(event) {
//         event.preventDefault();
//         var data = {};
//         data.username = this.state.username;
//         data.password = this.state.password;
//         // dispatch(
//         //     login({
//         //         name:data.username,
//         //         email:data.password,

//         // })
//         // );

//         axios.post('https://609206fb85ff510017211e36.mockapi.io/Customer', data)
//             .then((response) => {
//                 console.log(response);
//                 if (response.status > 300) {
//                     alert(response.statusText)
//                 } else {
//                     console.log('success')
//                     // HERE REDUX

                    
//                     this.props.history.push({
//                         pathname: '/dashboard',

//                     });
//                 }
//             }, (error) => {
//                 console.log(error);
//             });
//     }

//     render() {
//         return (
//             <div className="login-container">
//             <div className="login">
//                 <div className="box">
//                     <div className='form-wrap'>
//                         <img src={header2} alt="DBS Banking" className="dbslogo" /><br /><br />

//                         <form>
//                             <div className="form-group">
//                                 <label>Username</label>
//                                 <input id='logininput' type="text" className="form-control" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange} name="username" />
//                             </div>

//                             <div className="form-group">
//                                 <label>Password</label>
//                                 <input id='logininput' type="password" className="form-control" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Enter Password" />
//                             </div>

//                             <button onClick={this.handleSubmit} className="btn btn-primary btn-block"><b>Login</b></button>

//                             <p className="forgot-password">
//                                 <a href="#">Forgot password?</a>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         )
//     }
// }

// export default Login


