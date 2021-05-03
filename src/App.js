import "./App.css";
import { Navigate } from 'react-router-dom';
import React from 'react'
import { Route, BrowserRouter as Router} from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import Home from "./pages/Home"
import LoginSys from "./pages/LoginSys";
import Balance from "./pages/Balance";


function App() {
	return (
		<div>
		
			<Router>
				<Navbar/>        
					<Route exact path="/" component={Home} />
					<Route path="/balance"	component={Balance} />
					<Route path="/login" component={LoginSys}	/>
			</Router>
		</div>
		
	);
}

export default App;
