import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar/Sidebar';
import '../Styles/Login.css'
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles  } from '@material-ui/core/styles';
import LogInCheck from "../Functionals/LogInCheck";
import GetUserData from "../Functionals/GetUserData"


function Balance() {
    var userData=GetUserData();
    var accountInfo = [];

    const url = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts"
    const xApiKey = "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd"
    let config ={
      headers:{ 'x-api-key': xApiKey }
    }
    let bodydata ={
        body: JSON.stringify({
        "custID": userData.custID,
        "accountKey": userData.accountKey })
    }    
    LogInCheck();

    useEffect(()=> {
      axios.post(url,bodydata,config)        
      .then((response) => {
          console.log(response);
          if (response.status > 400) {
              alert(response.statusText)
          } else {
              console.log('success')
              //might need to stringnify
              accountInfo = response.data;
              
          }
  },[])})



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
                <TableCell component="th" scope="row">{accountInfo.accountName} </TableCell>
                <TableCell align="left">{accountInfo.accountNumber}</TableCell>
                <TableCell align="left">{accountInfo.availableBal}</TableCell>         
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        </div>
        </div>


        );
        
};

export default Balance;