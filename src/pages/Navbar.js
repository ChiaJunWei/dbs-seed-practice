import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import header1 from '../assets/dbslogo.png';

export const Navbar = () => {
	const location = useLocation();
	if (location.state === undefined) {
		location.state = {};
	}
	console.log(location);
	return (
		<div id="nav" >
			
			<li className="nav-link-logo">
			<Link
				className="navigation-link"
				to={{ pathname: "/", state: { ...location.state } }}
			>
				<img src={header1} alt = "dbs-logo"width="180" height="60"></img>
			</Link>
			</li>

			<ul className="nav-bars" >

				<li className="nav-link">
					<Link
						className="navigation-link"
						to={{ pathname: "/", state: { ...location.state } }}
					>
						HOME
					</Link>
				</li>
				<li className="nav-link">
					<Link
						className="navigation-link"
						to={{ pathname: "/dashboard", state: { ...location.state } }}
					>
						Dashboard
					</Link>
				</li>
				
				<li className="nav-link">
					<Link
						className="navigation-link"
						to={{
							pathname: "/balance",
							state: { ...location.state },
						}}
					>
						Account Balances
					</Link>
				</li>
				{Object.keys(location.state).length === 0 ? (
					<li className="nav-link">
						<Link
							className="navigation-link"
							to={{
								pathname: "/login",
								state: { ...location.state },
							}}
						>
							Log In
						</Link>
					</li>
				) : (
					<li className="nav-link">
						<Link
							className="navigation-link"
							to={{
								pathname: "/",
								state: {},
							}}
						>
							Logout [{location.state.name}]
							
						</Link>
						
					</li>
				)}
			</ul>
		</div>
	);
};
