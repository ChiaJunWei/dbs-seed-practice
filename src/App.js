import "./App.css";
import { Navigate } from 'react-router-dom';
import React from 'react'
import { Route, BrowserRouter as Router} from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import Home from "./pages/Home"
import Balance from "./pages/Balance";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";



const App=() =>{


	return (
		<div className='main-container'>		
			<Router>
				<Navbar/>
					<Route exact path="/" component={Home} />
					<Route path="/Dashboard" component={Dashboard} />
					<Route path="/balance"	component={Balance} />
					<Route path="/login" component={Login}/>
					<Route path="/transfer" component={Transfer}	/>
				<Footer/>
			</Router>
			
		</div>
		
	);
}

export default App;
