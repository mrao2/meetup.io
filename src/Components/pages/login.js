import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import _default from '../../Assets/scss/_config.scss';

class login extends Component {
  render() {
      const style = {
        height: 100,
        width: 200,
        margin: 5,
        align: 'center',
        textAlign: 'center',
        display: 'inline-block',
        marginRight: 20
      };
      const buttonStyle = {


      }
    return (
    	<div className="loginCard">
      <Paper zDepth={2}>
       <TextField hintText="Username" style={style} underlineShow={false} id="user" />
       <Divider />
       <TextField hintText="Password" style={style} underlineShow={false} id="pass" />
       <Divider />
       <RaisedButton label="Login"  backgroundColor="darkGrey" href="/Dashboard" style={buttonStyle}   />
      </Paper>
      <br/>
      No account no problem! <a href="/Create">Create One</a>
    	  </div>



    )
  }
}

export default login
