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



function Balance() {
    const [data,setdata] = useState({});
    
    LoggedIn();  

       const useStyles = makeStyles((theme)=> ({
         table:{
             minWidth: 650,
             margin: '5px',
         },
         tableContainer:{
             borderRadius:15,
             margin: '0px 100px 300px 300px',             
             maxWidth:1000,
             

         },
         tableHeaderCell:{
             fontWeight:'bold',
             backgroundColor: theme.palette.primary.light,

         }
         
     }));

     const classes= useStyles();
    return(      
      <div>
        <Sidebar/>
        <div className= "table-container">
        <TableContainer component={Paper} className={classes.tableContainer} >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Account Name</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">Account Number</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">Available Bal</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
         <TableRow              >
                <TableCell component="th" scope="row">
1
                </TableCell>
                <TableCell align="left">2 </TableCell>
                <TableCell align="left">3</TableCell>         
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