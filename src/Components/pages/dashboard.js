import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Grid, Row, Col } from 'react-flexbox-grid'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ContentSend from 'material-ui/svg-icons/content/send';


class Dashboard extends Component {
  render() {
    var meetup = require('meetup-api')({
       key: '5f32d183226637a717a283f397e65'
    });

    meetup.getRSVPs({
       event_id: 246436583,
       urlname: 'banodejs'
    }, function(err, resp) {
       if (err) {
           console.error('Found meetup error', err);
       }
       //console.log(JSON.stringify(resp, null, 2));

       const namesOfPeopleWhoRSVPD = resp.results
        .map(rsvp => rsvp.member.name)
       console.log(namesOfPeopleWhoRSVPD);

        const nameOfEvent = resp.results
            .map(rsvp => rsvp.event.name)
        const [first] = nameOfEvent
        console.log(first);


    });

    return (
    	<div className="container-fluid">
        <div classname="bodyHeader">
            <h1>
    	    		Welcome to your Dashboard!
    	    	</h1>
    	    	<p>
              "Please choose your organization and event to get started."
            </p>
        </div>
        <div classname="orgList">
          <Row>
          <Col sm={2} lg={4}>
          <Paper zDepth={2}>
          <List>
          <Subheader>Events</Subheader>
            <ListItem primaryText="Org 1" rightIcon={<IconButton href="/eventPage"><ContentSend href="/eventPage" /></IconButton>}  />
            <ListItem primaryText="Org 2"  />
            <ListItem primaryText="Org 3"  />
            <ListItem primaryText="Org 4"  />
          </List>
          </Paper>
          </Col>
          </Row>
        </div>


    	</div>



    )
  }
}

export default Dashboard
