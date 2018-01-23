import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Snackbar from 'material-ui/Snackbar';




class eventPage extends Component {
  constructor(props) {
    super(props);
      this.state = {
           open: false,
         };
       }

       handleClick = () => {
         this.setState({
           open: true,
         });
       };

       handleRequestClose = () => {
         this.setState({
           open: false,
         });
       };
       const firstPart = 'Thank you, ',
           secondPart = ' for signing in! ';
  render() {
    return (
    	<div className="container-fluid">

	    	<h1>
	    		first
	    	</h1>

        <br/>
         <div clasName='form'>
         <Row>
         <Col mdOffset={4} xs={3}>
         <Paper zDepth={2}>
          <TextField hintText='First Name' id='firstname'/>
          <br/>
          <TextField hintText='Last Name'id='lastname'/>
          <br/>

          <Col xsOffset={3} xs={2}>
          <br/>
          <RaisedButton label="Login"  backgroundColor="darkGrey" onClick={this.handleClick}/>

          <Snackbar
         open={this.state.open}
         message=firstPart + firstname + secondPart
         autoHideDuration={4000}
         onRequestClose={this.handleRequestClose}
       />
          </Col>
        </Paper>
        </Col>
        </Row>
         </div>

    	</div>



    )
  }
}

export default eventPage
