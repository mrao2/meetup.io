import React from 'react'
import ReactDOM from 'react-dom'

// import { Route, Router, browserHistory, IndexRedirect, IndexRoute } from 'react-router'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
