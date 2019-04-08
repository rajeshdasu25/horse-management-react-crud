import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
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
  }
});


class Home extends Component {

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
                <Card className={classes.card}>
                  <CardContent>
                    <Typography className={classes.title}>Welcome to the Horse Management Application..!!!</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography className={classes.title}>User Signed as {userData.first_name} {userData.last_name}</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography>Please click on <a href="/horses">Horses</a> menu for its Management</Typography>
                  </CardContent>
                </Card>
            </main>
            </div>
        </div>
      );
   }
}
  
Home.propTypes = {
      classes: PropTypes.object.isRequired,
};
    
  
function mapStateToProps(state) {
    return state;
}


const connectedHomePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Home)));

export { connectedHomePage as Home };
  