import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AppBar from './Components/AppBar';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column",
    
  },
  paper:{
    marginTop: 30,
    height: 300,
    width: 400,
    margin: '0 auto',
    textAlign: 'center',
    padding: 10,
  },
  button:{
    backgroundColor: '#005cb2',
    color: 'white',
    padding: 10,
    "&:hover": {
      backgroundColor: '#1c87e5', 
    }
  }

}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar />
    <Paper elevation={3} className= {classes.paper}>
      
      <h1>Login</h1>
      <form className={classes.root} noValidate autoComplete="off">
  
       <TextField id="u_name" label="User Name" variant="outlined" />
       <br />
       <TextField id="pwd" label="Password" variant="outlined" />
       <br />
       <Button className = {classes.button} variant="contained"> LogIn </Button>

      </form>

      </Paper>
  </div>
  );
}

export default App;
