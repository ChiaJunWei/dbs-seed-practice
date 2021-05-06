import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";



function Balance() {
    // const [accounts, setAccounts] = useState([]);
    const [items, setitems] = useState([]);
	const location = useLocation();
	const history = useHistory();
    
	if (
		location.state === undefined ||
		Object.keys(location.state).length === 0
	) {
		history.push("/Login");
	}
 

    useEffect(()=> {
        fetch('https://609206fb85ff510017211e36.mockapi.io/Customer')
        .then(response => response.json())
        .then(json => setitems(json))
    },[])

    return(
        

        <div className="BalanceTable">
            <table style={{border:"1px solid"}}>
                <tr style={{border:"1px solid"}}>
                    <th >Full Name</th>
                    <th>Balance</th>
                </tr>
            
        {items.map((data) => {
            return(
                  <tr style={{border:"1px solid"}}>
                    <td style={{border:"1px solid"}}>{(data.username)}</td>
                    <td style={{border:"1px solid"}}> ${(data.balance)}</td>
                </tr>
            );
        })}
        </table>   
        </div> 
        );
};

export default Balance;