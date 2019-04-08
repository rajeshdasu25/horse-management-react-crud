import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '../_components/appbar';
import Nav from '../_components/nav'; 


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    //width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  title: {
    fontSize: '18px'
  },
  items: {
    fontSize: '14px'
  },
  left: {
    textAlign: 'left'
  },
  right: {
    textAlign: 'right'
  }
});


class Profile extends Component {

   render() {
      const { classes } = this.props;
      const userData = JSON.parse(localStorage.getItem('user')); console.log('userData: ', userData);

      return (
        <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <div>
                        </div>
                    </Grid>
                </Grid>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography className={classes.title}>Welcome {userData.last_name}, {userData.first_name}..!!!</Typography>
                  </CardContent>
                  <CardContent>
                    <Grid container spacing={24}>
                      <Grid item xs={6} className={classes.right} >
                          <Typography className={classes.items}>First Name: </Typography>
                      </Grid>
                      <Grid item xs={6} className={classes.left}>
                          <Typography className={classes.items}>{userData.first_name}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                      <Grid item xs={6} className={classes.right} >
                          <Typography className={classes.items}>Last Name: </Typography>
                      </Grid>
                      <Grid item xs={6} className={classes.left}>
                          <Typography className={classes.items}>{userData.last_name}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                      <Grid item xs={6} className={classes.right} >
                          <Typography className={classes.items}>Phone Number: </Typography>
                      </Grid>
                      <Grid item xs={6} className={classes.left}>
                          <Typography className={classes.items}>{userData.ph_country_code} {userData.phone_number}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                      <Grid item xs={6} className={classes.right} >
                          <Typography className={classes.items}>Email: </Typography>
                      </Grid>
                      <Grid item xs={6} className={classes.left}>
                          <Typography className={classes.items}>{userData.email}</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
            </main>
            </div>
        </div>
      );
   }
}
  
Profile.propTypes = {
      classes: PropTypes.object.isRequired,
};
    
  
function mapStateToProps(state) {
    return state;
}


const connectedHomePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Profile)));

export { connectedHomePage as Profile };
  