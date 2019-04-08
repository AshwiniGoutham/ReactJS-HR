import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../theme';
import '../css/header.css';


const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar
});
function onHomeClick() { 
  alert("Clicked") 
}
function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar color="default" position="fixed" style={{background:'rgba(135,33,46,100)',color:'white'}}>
        <Toolbar> 
          <Typography variant="h6" color="inherit">
           <img src={props.image} alt="No Image" onClick={onHomeClick}/>
           <span className="pagetitle">{props.mess}</span>  
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
    </div>
    
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SimpleAppBar);
