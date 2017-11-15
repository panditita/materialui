import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from "./HeaderBar";
import BottomBar from "./BottomBar";
import Card1 from "./Card1";
import Card2 from "./Card2";
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper style={styles.paper}>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <HeaderBar />
                <h1 className="App-title">Welcome to Glasgow JavaScript</h1>
              </header>
            </Paper>
          </Grid>
          <Grid style={{
            display: 'flex',
            justifyContent: 'center',
          }} item xs={6}>
            <Card1 />
          </Grid>
          <Grid style={{
            display: 'flex',
            justifyContent: 'center',
            padding: 30,
          }} item xs={6}>
            <Card2 />
          </Grid>

          <Grid item xs={12}>
            <Paper style={styles.paper}>
            <footer style={{
            display: 'flex',
            justifyContent: 'center'}}>
            <BottomBar />
          </footer>
            </Paper>
          </Grid>
        </Grid>
      </div >
    );
  }
}

export default withStyles(styles)(App);
