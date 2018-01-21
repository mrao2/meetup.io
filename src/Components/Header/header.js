import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import {
  Link
} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'


class Header extends Component {
  render() {
    const style = {
      backgroundcolor: "red" }
    return (
    	<header>

	    	<div className="logo">
	    		<a href="/">LOGO</a>
	    	</div>


        <nav>

          <RaisedButton label="Login"  backgroundColor="Yellow" href="/Login"  />


        </nav>



    	</header>
    )
  }
}

export default Header
