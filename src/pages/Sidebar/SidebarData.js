import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


export const SidebarData= [
    {
        title:"Overview",
        icon:<HomeIcon/>,
        link:"/dashboard"

    },

    {
        title:"Transfer",
        icon:<LocalAtmIcon/>,
        link:"/transfer"

    },
    {
        title:"Transcation History",
        icon:<AccountBalanceIcon/>,
        link:"/transaction" 

    },
    {
        title:"Balance",
        icon:<AccountBalanceWalletIcon/>,
        link:"/balance"

    },
    // {
    //     title:"About Me",
    //     icon:<InfoIcon/>,
    //     link:"/about"

    // }

]