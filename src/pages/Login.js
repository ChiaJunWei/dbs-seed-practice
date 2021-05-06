import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Login.css'
import header2 from '../assets/desktoplogo.png';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            value: '',
            customerid: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        var data = {};
        data.username = this.state.username;
        data.password = this.state.password;
        axios.post('https://609206fb85ff510017211e36.mockapi.io/Customer', data)
            .then((response) => {
                console.log(response);
                if (response.status > 300) {
                    alert(response.statusText)
                } else {
                    console.log('success')
                    window.sessionStorage.setItem("customerid", '1');
                    this.props.history.push({
                        pathname: '/dashboard',
                        //state: {CustID:response.data.customerId, name: response.data.name}
                        state:{CustID: '1', name :'Wei'},
                    });
                }
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="login-container">
            <div className="login">
                <div className="box">
                    <div className='form-wrap'>
                        <img src={header2} alt="DBS Banking" className="dbslogo" /><br /><br />

                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input id='logininput' type="text" className="form-control" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange} name="username" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input id='logininput' type="password" className="form-control" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Enter Password" />
                            </div>

                            <button onClick={this.handleSubmit} className="btn btn-primary btn-block"><b>Login</b></button>

                            <p className="forgot-password">
                                <a href="#">Forgot password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Login