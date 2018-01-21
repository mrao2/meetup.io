import React, { Component } from 'react'
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton'
import ActionAndroid from 'material-ui/svg-icons/action/android'

class Footer extends Component {
  render() {
    const style = {
      marginRight: 24,
      color: "red500"
    };
    return (
    	<footer id="mainFooter">
        <div id="mainFooter-bounds">
          <div>
          <FlatButton
      href="https://github.com/mrao2/meetup.io"
      target="_blank"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
      style={style}
    />

          </div>
        </div>
    	</footer>
    )
  }
}

export default Footer
