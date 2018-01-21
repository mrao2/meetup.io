import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Dashboard extends Component {
  render() {
    return (
    	<div className="container-fluid">
	    	<h1>
	    		Dashboard content
	    	</h1>

	    	<p>
	    		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	    	</p>


<FloatingActionButton>
      <ContentAdd />
    </FloatingActionButton>
    	</div>



    )
  }
}

export default Dashboard
