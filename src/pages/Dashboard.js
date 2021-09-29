import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Sidebar from './Sidebar/Sidebar';
import '../Styles/dashboard.css';
import Textbox from "./Textbox";
import LoggedIn from "./isLogin"


const mdTheme = createTheme();

function DashboardContent() {
    LoggedIn();
    
  
  return (

        <ThemeProvider theme={mdTheme}>
        <Sidebar/>
        <div classname="dashboard-components-container">
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />          
            <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light',
                overflow: 'auto',
                zIndex:2,
            }}
            >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                {/* Textbox */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', boxShadow: 10}}>
                    <Textbox />
                    </Paper>
                </Grid>
                
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                        boxShadow: 10
                    }}
                    >
                    <Chart />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                        boxShadow: 10
                    }}
                    >
                    <Deposits />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2   , display: 'flex', flexDirection: 'column',boxShadow: 10 }}>
                    <Orders />
                    </Paper>
                </Grid>
                </Grid>
            </Container>
            </Box>
        </Box>
        </div>
        </ThemeProvider>

  );
}

export default function Dashboard() {
  return <DashboardContent />;
}




























// import React from 'react'
// import Sidebar from './Sidebar/Sidebar';
// import '../Styles/dashboard.css'
// import LoggedIn from "./isLogin"
// import GetUserData from "./GetUserData"


// const Dashboard = () => {
//     var data=GetUserData();
//     LoggedIn();

//     return (
//         <div className='dashboard-container'>
//             <Sidebar/>           

//             <div className='dashboard-components-container'>
//                 <p style={{color: "#538b01"}}> Welcome back, {(data.user)} </p>
//                 <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt = "dbs-logo"width="200" height="300"></img>
//                 <p> ID:{(data.id)} </p>
//                 <p> bye </p>
                 
//             </div>
//         </div>
//     )
// }

// export default Dashboard
