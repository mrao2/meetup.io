import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import _config from './Assets/scss/_config.scss'


// Components
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Homepage from './Components/pages/Homepage'
import Contacts from './Components/pages/contacts'
import Login from './Components/pages/login'
import Dashboard from './Components/pages/dashboard'
import Create from './Components/pages/create'
import eventPage from './Components/pages/eventPage'

// Includes
import './Assets/css/default.min.css'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(_config)} >

      <Router>
      <div className="App">

      <Header />

        <Route exact path='/' component={Homepage} />
        <Route exact path='/Contacts' component={Contacts} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Dashboard' component={Dashboard} />
        <Route exact path='/Create' component={Create} />
        <Route exact path='/eventPage' component={eventPage} />


      <Footer />

      </div>

      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
