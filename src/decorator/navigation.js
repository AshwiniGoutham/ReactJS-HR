import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';
import PeopleIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayTwoTone';
import PermIdentityIcon from '@material-ui/icons/PermIdentityTwoTone';
import SettingsIcon from '@material-ui/icons/SettingsTwoTone'
import { Paper } from '@material-ui/core';
import {Link} from 'react-router';

const styles = (theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  navbar: {
    height: 56
  }
});

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <Paper className={classes.root} elevation={8}>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
          >
            <BottomNavigationAction component ={Link} to={"/selectRole"} label="Role" icon={<PermIdentityIcon/>} className="navbar-item"/>
            <BottomNavigationAction component ={Link} to={"/requests"} label="Requests" icon={<AssignmentTurnedInIcon/>} className="navbar-item"/>
            <BottomNavigationAction component ={Link} to={"/teamView"} label="Team View" icon={<PeopleIcon/>} className="navbar-item"/>
            <BottomNavigationAction component ={Link} to={"/calendarView"} label="Calendar" icon={<CalendarTodayIcon/>} className="navbar-item"/>
            <BottomNavigationAction component ={Link} to={"/admin"} label="Admin" icon={<SettingsIcon/>} className="navbar-item"/>
                
          </BottomNavigation>
        </Paper>
        <div className={classes.navbar}></div>
      </div>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
