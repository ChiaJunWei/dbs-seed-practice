import React from "react";
import { Link} from "react-router-dom";
import header1 from '../assets/dbslogo.png';
import '../Styles/Login.css'

import {useSelector} from "react-redux"
import {selectUser} from '../redux/userSlice'
import {selectTempUser} from '../redux/temploginSlice'
import {logout} from "../redux/userSlice"
import {templogout} from "../redux/temploginSlice"
import {useDispatch} from "react-redux"


export const Navbar = () => {

	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const tempuser = useSelector(selectTempUser);
	


	const handleLogout = (e)=>{
		e.preventDefault();
		dispatch(logout());
		dispatch(templogout());
	}	 
	

	return (
		<div id="nav" >
			
			<li className="nav-link-logo">
			<Link
				className="navigation-link"
				to={{ pathname: "/" }}
			>
				<img src={header1} alt = "dbs-logo"width="180" height="60"></img>
			</Link>
			</li>

			<ul className="nav-bars" >

				<li className="nav-link">
					<Link
						className="navigation-link"
						to={{ pathname: "/"}}
					>
						HOME
					</Link>
				</li>
				<li className="nav-link">
					<Link
						className="navigation-link"
						to={{ pathname: "/dashboard"}}
					>
						Dashboard
					</Link>
				</li>
				
				<li className="nav-link">
					<Link
						className="navigation-link"
						to={{
							pathname: "/balance",
						}}
					>	
						Account Balances
					</Link>
				</li>
				{user!=='me' || tempuser!=='me' ?(
					
				<li className="nav-link">
				<Link
					className="navigation-link"
					to={{
						pathname: "/",
					}}
					onClick={(e)=> handleLogout(e)}
				>
					Logout 					
				</Link>
				</li>
									

				) : (
					<li className="nav-link">
					<Link
						className="navigation-link"
						to={{
							pathname: "/login",
						}}
					>
						Log In
					</Link>
				</li>

				)
						}
			</ul>
		</div>
	);
};
