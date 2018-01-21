import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import API_KEY from '../../Assets/keys/api_key.json'
import SECRET from '../../Assets/keys/secret.json'
console.log(`API_KEY: ${API_KEY.key}`)
console.log(`Secret: ${SECRET.key}`)

const request = require('request');
const crypto = require('crypto');
const OAuth = require('oauth-1.0a');
 
const oauth = OAuth({
  consumer: { key: API_KEY, secret: SECRET},
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
})

const request_data = {
  url: 'https://api.meetup.com/oauth/request/',
  method: 'GET'
}

request({
  Origin: 'http://localhost:3000',
  url: request_data.url,
  method: request_data.method,
  form: oauth.authorize(request_data)
}, function(error, response, body) {
  // Process your data here
  console.log(response)
  console.log(body)
});

class Dashboard extends Component {

  render() {
    

    const options = {

    }

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
