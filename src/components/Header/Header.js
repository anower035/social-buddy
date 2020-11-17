import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core';
import { useLocation } from 'react-router-dom';


const useStyles= makeStyles({
  header:{
    backgroundColor:"#1976D2",
    boxShadow:'0',
    alignItems:"center",
    padding:'2px',
    width:'100'
  },
  text:{
    margin:'0px',
  }
})



const Header = () => {
  const classes= useStyles()
  const location=useLocation()
    return (
      <AppBar position="static" className={classes.header}>
        <Toolbar variant='dense'>
          <Typography>
             <h1 className={classes.text}>{location.pathname.includes('/posts/') ? 'Post-Details' : 'WelCome to Social-Buddy'}</h1>
          </Typography>
        </Toolbar>
      </AppBar>
    );
};

export default Header;




