import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar/Sidebar';
import '../Styles/TranscationTable.css'
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles  } from '@material-ui/core/styles';

import LogInCheck from "../Functionals/LogInCheck"
import GetUserData from "../Functionals/GetUserData"



function TransactionTable() {
    const [data,setdata] = useState({});
    var userData=GetUserData();
    var accountInfo = [];
    const url = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/view"
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
              setdata = response.data;
              
          }
  },[])})




    //  useEffect(()=> {
    //     fetch('https://jsonplaceholder.typicode.com/users/')
    //     .then(response => response.json())
    //     .then(json => setdata(json))
    // },[])
    // console.log(data)








    var mydata = Object.keys(data).map(function(key) {
        return data[key];
     });

     

     const useStyles = makeStyles((theme)=> ({
         table:{
             minWidth: 650,
             margin: '5px',
         },
         tableContainer:{
             borderRadius:15,
             margin: '0px 100px 300px 300px',             
             maxWidth:1500,
             

         },
         tableHeaderCell:{
             fontWeight:'bold',
             backgroundColor: theme.palette.primary.light,
             color:theme.palette.getContrastText(theme.palette.primary.light)
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
              <TableCell className={classes.tableHeaderCell}>custID</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">payeeID</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">date</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">amount</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">eGift</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mydata.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.custID}
                </TableCell>
                <TableCell align="left">{row.payeeID}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.eGift}</TableCell>
                <TableCell align="left">{row.message}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
        </div>


        );
        
};

export default TransactionTable;