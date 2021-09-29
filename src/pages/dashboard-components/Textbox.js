import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import GetUserData from "../../Functionals/GetUserData"
import Title from './Title';
import PersonIcon from '@mui/icons-material/Person';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function VerticalDividerText() {
    var userData=GetUserData();


  return (
    <Grid container>
      <Title>About Me</Title>
      <PersonIcon/>
      <Grid item xs>
        <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
            <p3> First name :  {(userData.firstname)} </p3>
        </ListItem>
        <Divider />
        <ListItem button divider>
            <p3> Last name :  {(userData.lastname)} </p3>
        </ListItem>
        <ListItem button>
            <p3> NRIC :  {(userData.NRIC)} </p3>
          </ListItem>
        </List>
      </Grid>
      <Divider orientation="vertical" flexItem>
      </Divider>
      <Grid item xs>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
            <p3> Age :  {(userData.Age)} </p3>
        </ListItem>
        <Divider />
        <ListItem button divider>   
            <p3> Phone Number :  {(userData.Number)} </p3>
          </ListItem>
        <ListItem button>
              <p3> Email :  {(userData.email)} </p3>
        </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}