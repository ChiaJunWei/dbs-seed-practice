import "./App.css";
import React from 'react'
import { Route, BrowserRouter as Router} from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import Home from "./pages/Home"
import Balance from "./pages/Balance";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";
import TransactionTable from "./pages/TransactionTable";


const App=() =>{


	return (
		<div className='main-container'>		
			<Router>
				<Navbar/>
					<Route exact path="/" component={Home} />
					<Route exact path="/Dashboard" component={Dashboard} />
					<Route exact path="/balance"	component={Balance} />
					<Route exact path="/login" component={Login}/>
					<Route exact path="/transfer" component={Transfer}	/>
					<Route exact path="/transaction" component={TransactionTable}	/>
				<Footer/>
			</Router>
			
		</div>
		
	);
}

export default App;
