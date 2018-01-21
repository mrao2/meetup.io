import React from 'react'
import ReactDOM from 'react-dom'

// import { Route, Router, browserHistory, IndexRedirect, IndexRoute } from 'react-router'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

// const Routes = props => {
// 	return {
// 		<Router history={browserHistory}>
// 			<Route path="/">
// 				<IndexRoute component={App} />
// 			</Route>
// 			<Route path="*">
// 				<IndexRedirect to="/" />
// 			</Route>
// 		</Router>
// 	}
// }

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
