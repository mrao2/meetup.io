import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';




class eventPage extends Component {
  render() {
    return (
    	<div className="container-fluid">
        
	    	<h1>
	    		Event Title Goes Here
	    	</h1>

        <br/>
         <div clasName='form'>
         <Row>
         <Col mdOffset={4} xs={3}>
         <Paper zDepth={2}>
          <TextField hintText='Name'/>
          <br/>
          <TextField hintText='email'/>
          <Col xsOffset={3} xs={2}>
            <RaisedButton label="Login"  backgroundColor="darkGrey"/>
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
