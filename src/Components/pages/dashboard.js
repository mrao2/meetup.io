import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import CONSUMER_KEY from '../../Assets/keys/consumer_key.json'
import CONSUMER_SECRET from '../../Assets/keys/consumer_secret.json'
console.log(`KEY: ${CONSUMER_KEY.key}`)
console.log(`SECRET: ${CONSUMER_SECRET.key}`)

const request = require('request');
// const crypto = require('crypto');
// const OAuth = require('oauth-1.0a');
 
// const oauth = OAuth({
//   consumer: { key: CONSUMER_KEY, secret: CONSUMER_SECRET},
//   signature_method: 'HMAC-SHA1',
//   hash_function(base_string, key) {
//     return crypto.createHmac('sha1', key).update(base_string).digest('base64');
//   }
// })

// const request_data = {
//   url: 'https://api.meetup.com/oauth/request/',
//   method: 'GET'
// }

// request({
//   url: 'https://api.meetup.com/find/groups?zip=11211&radius=1&category=25&order=members',
//   method: 'GET',
// }, function(error, response, body) {
//   // Process your data here
//   console.log(response)
//   console.log(body)
// });

// OAuth1.0 - 3-legged server side flow (Twitter example)
// step 1
// var qs = require('querystring')

// const options = {
//   url: 'https://api.meetup.com/oauth/request/',
//   oauth: { 
//       callback: 'https://meetupmohith.herokuapp.com/Dashboard',
//       consumer_key: CONSUMER_KEY,
//       consumer_secret: CONSUMER_SECRET
//     },
//     headers: {
//       Host: "api.meetup.com",
//       Origin: "http://localhost:3000"
//     }
//   }
// request.post(options, function (e, r, body) {
//   // Ideally, you would take the body in the response
//   // and construct a URL that a user clicks on (like a sign in button).
//   // The verifier is only available in the response after a user has
//   // verified with twitter that they are authorizing your app.
//   if (e) throw e

//   console.log(r)
//   console.log(body)
// })


// OAuth1.0 - 3-legged server side flow (Twitter example)
// step 1
var qs = require('querystring')
const options = {
  oauth: { 
    callback: 'https://meetupmohith.herokuapp.com/Dashboard',
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET
  },
  url: 'https://api.meetup.com/oauth/request/',
  headers: {
      Host: "api.meetup.com",
      Origin: "https://meetupmohith.herokuapp.com"    
  }
}
request.get(options, function (e, r, body) {
  // Ideally, you would take the body in the response
  // and construct a URL that a user clicks on (like a sign in button).
  // The verifier is only available in the response after a user has
  // verified with twitter that they are authorizing your app.
  console.log(r)
  console.log(body)

  // step 2
  var req_data = qs.parse(body)
  var uri = 'https://secure.meetup.com/authorize/?oauth_token='
     + qs.stringify({oauth_token: req_data.oauth_token})
  // redirect the user to the authorize uri
 
  // step 3
  // after the user is redirected back to your server
  // var auth_data = qs.parse(body)
  //   , oauth =
  //     { consumer_key: CONSUMER_KEY
  //     , consumer_secret: CONSUMER_SECRET
  //     , token: auth_data.oauth_token
  //     , token_secret: req_data.oauth_token_secret
  //     , verifier: auth_data.oauth_verifier
  //     }
  //   , url = 'https://api.meetup.com/oauth/access/'
  //   ;

 })

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
