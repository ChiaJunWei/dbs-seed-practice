import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar/Sidebar';
import '../Styles/Login.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles  } from '@material-ui/core/styles';
import LoggedIn from "./isLogin"
import GetUserData from "./GetUserData"


function Balance() {
    var data=GetUserData();
    
    LoggedIn();  

       const useStyles = makeStyles((theme)=> ({
         table:{
             minWidth: 650,
             margin: '5px',
             
         },
         tableContainer:{
             borderRadius:15,
             margin: '150px 500px 300px 400px',             
             maxWidth:1000,
             
             

         },
         tableHeaderCell:{
             fontWeight:'bold',
             backgroundColor: 'lightblue',
             overflow: "hidden"

         }
         
     }));

     const classes= useStyles();
    return(      
      <div>
        <Sidebar/>
        <div className= "table-container">
        <TableContainer component={Paper} className={classes.tableContainer} sx={{overflow: 'hidden',boxShadow: 10}}>  
        <Table className={classes.table} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Account Name</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">Account Number</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">Available Bal</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
         <TableRow              >
                <TableCell component="th" scope="row">{data.firstname} </TableCell>
                <TableCell align="left">{data.NRIC}</TableCell>
                <TableCell align="left">{data.Number}</TableCell>         
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        </div>
        </div>


        );
        
};

export default Balance;


// import React from "react";
// import {useSelector} from "react-redux"
// import {selectUser} from '../redux/userSlice'
// import {selectTempUser} from '../redux/temploginSlice'
// import LoggedIn from "./isLogin"
// import GetUserData from "./GetUserData"
// import '../Styles/Login.css'
// import Sidebar from './Sidebar/Sidebar';




// function Balance() {
//     const user = useSelector(selectUser);
//     const tempuser = useSelector(selectTempUser);  
//     var data=GetUserData();
//     LoggedIn();


//     return(
//         <div className='transfer-container'>
//             <Sidebar/>  
//         <div className="BalanceTable">
//             <table style={{border:"1px solid"}}>
//                 <tr style={{border:"1px solid"}}>
//                     <th >Full Name</th>
//                     <th>Balance</th>
//                 </tr>
//                 <tr style={{border:"1px solid"}}>
//                     <td style={{border:"1px solid"}}>{(data.user)}</td>
//                     <td style={{border:"1px solid"}}> ${(data.id)}</td>
//                 </tr>
           
//         </table>   
//         </div> 
//         </div>
//         );
// };

// export default Balance;