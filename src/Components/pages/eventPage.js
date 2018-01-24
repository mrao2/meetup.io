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
           firstName: '',
           lastName: '',
         };
       };
       change = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
       };
       onSubmit = () => {
         console.log(this.state)
         this.setState({
           open: true,
           firstName: '',
           lastName: '',
         });
       };

       handleRequestClose = () => {
         this.setState({
           open: false,
         });
       };
  render() {
    return (
    	<div className="container-fluid">

	    	<h1>
         Login to your event!
	    	</h1>

        <br/>

         <div clasName='form'>
         <Row>
         <Col mdOffset={4} xs={3}>
         <Paper zDepth={2}>
         <TextField
             name="firstName"
             hintText="First name"
             floatingLabelText="First name"
             value={this.state.firstName}
             onChange={e => this.change(e)}
             floatingLabelFixed
           />
          <br/>
          <TextField
            name="lastName"
            hintText="Last Name"
            floatingLabelText="Last Name"
            value={this.state.lastName}
            onChange={e => this.change(e)}
            floatingLabelFixed
          />
          <br/>
          <Col xsOffset={3} xs={2}>
          <br/>
          <RaisedButton label="Login"  backgroundColor="darkGrey" onClick={() => this.onSubmit()}/>

          <Snackbar
         open={this.state.open}
         message="Thank you for signing in!"
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
