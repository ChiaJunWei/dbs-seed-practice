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



function TransactionTable() {
    const [data,setdata] = useState({});
    
    LoggedIn();  


     useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(json => setdata(json))
    },[])
    console.log(data)

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
              <TableCell className={classes.tableHeaderCell}>id</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">Name</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">Username</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">email</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">phone</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mydata.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.website}</TableCell>
                
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