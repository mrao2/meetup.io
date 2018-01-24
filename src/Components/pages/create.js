import React, { Component } from 'react'
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "meetupapp",
  password: "pass",
  database: "meetupapp"
});

class Create extends Component {
  state = {
    userName: '',
    password: '',


  }

  change = (e) => {
   this.setState({
     [e.target.name]: e.target.value
   });
  };

  onSubmit = () => {
    console.log(this.state)
    var sql = "INSERT INTO login (userName, password) VALUES (this.state.userName, this.state.password)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    this.setState({
      userName: '',
      password: '',
    });
  };







  render() {
    return (
    	<form>
      <TextField
         name="userName"
         hintText="Username"
         floatingLabelText="Username"
         value={this.state.userName}
         onChange={e => this.change(e)}
         floatingLabelFixed
       />
     <br />
     <TextField
         name="password"
         hintText="Password"
         floatingLabelText="Password"
         value={this.state.password}
         onChange={e => this.change(e)}

         floatingLabelFixed
       />
       <br />
       <TextField
        disabled={true}
           name="apiKey"
           floatingLabelText="Api Key"
           value={this.state.apiKey}
           onChange={e => this.change(e)}
           floatingLabelFixed
         />
         <br />
       <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>



    )
  }
}

export default Create
