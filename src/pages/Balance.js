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
import LoggedIn from "../Functionals/isLogin"
import GetUserData from "../Functionals/GetUserData"


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