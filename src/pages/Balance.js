import React, { useState, useEffect } from "react";


function Balance() {
    const [accounts, setAccounts] = useState([]);
    const [items, setitems] = useState([]);
	// const location = useLocation();
	// const history = useHistory();


    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setitems(json))
    },[])

    return(
        <div>
        {items.map((data) => {
            return (
                <ol>
                    <li>{JSON.stringify(data.id)} {JSON.stringify(data.title)}</li>
                </ol>
            );

        })}
        
        </div> 
        );
};

export default Balance;