import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import GetUserData from "./GetUserData"

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
    var data=GetUserData();


  return (
    <Grid container>
      <Grid item xs>
        <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
            <p3> First name :  {(data.firstname)} </p3>
        </ListItem>
        <Divider />
        <ListItem button divider>
            <p3> Last name :  {(data.lastname)} </p3>
        </ListItem>
        <ListItem button>
            <p3> NRIC :  {(data.NRIC)} </p3>
          </ListItem>
        </List>
      </Grid>
      <Divider orientation="vertical" flexItem>
      </Divider>
      <Grid item xs>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
            <p3> Age :  {(data.Age)} </p3>
        </ListItem>
        <Divider />
        <ListItem button divider>   
            <p3> Phone Number :  {(data.Number)} </p3>
          </ListItem>
        <ListItem button>
              <p3> Email :  {(data.email)} </p3>
        </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}