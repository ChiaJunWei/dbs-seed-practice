import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';


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
        link:"/balance"

    },
    {
        title:"Settings",
        icon:<SettingsIcon/>,
        link:"/setting"

    },
    {
        title:"About Me",
        icon:<InfoIcon/>,
        link:"/about"

    }

]