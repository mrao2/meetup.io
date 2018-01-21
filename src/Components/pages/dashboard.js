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

class Dashboard extends Component {
  render() {
    const styles = {
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          tileBackground: 'Red'

        },
        gridList: {
          width: 800,
          height: 450,
          overflowY: 'auto',
        },
      };

      const tilesData = [
        {
          img: 'images/grid-list/00-52-29-429_640.jpg',
          title: 'Breakfast' ,
          author: 'jill111',
        },
        {
          img: 'images/grid-list/burger-827309_640.jpg',
          title: 'Tasty burger',
          author: 'pashminu',
        },
        {
          img: 'images/grid-list/camera-813814_640.jpg',
          title: 'Camera',
          author: 'Danson67',
        },
        {
          img: 'images/grid-list/morning-819362_640.jpg',
          title: 'Morning',
          author: 'fancycrave1',
        },
        {
          img: 'images/grid-list/hats-829509_640.jpg',
          title: 'Hats',
          author: 'Hans',
        },
        {
          img: 'images/grid-list/honey-823614_640.jpg',
          title: 'Honey',
          author: 'fancycravel',
        },
        {
          img: 'images/grid-list/vegetables-790022_640.jpg',
          title: 'Vegetables',
          author: 'jill111',
        },
        {
          img: 'images/grid-list/water-plant-821293_640.jpg',
          title: 'Water plant',
          author: 'BkrmadtyaKarki',
        },
      ];
    return (
    	<div className="container-fluid">
        <div className="bodyHeader">
            <h1>
    	    		Welcome to your Dashboard!
    	    	</h1>
    	    	<p>
              "Please choose your organization and event to get started."
            </p>
        </div>
        <div className="orgList">
          <Row>
          <Col sm={2} lg={4}>
          <Paper zDepth={2}>
          <List>
          <Subheader>Organizations</Subheader>
            <ListItem primaryText="Org 1"   />
            <ListItem primaryText="Org 2"  />
            <ListItem primaryText="Org 3"  />
            <ListItem primaryText="Org 4"  />
          </List>
          </Paper>
          </Col>
          <Col xsOffset={1} xs={8} lg={5}>
            <Paper zDepth={2}>
            <div style={styles.root}>
              <GridList
                cellHeight={180}
                style={styles.gridList}
              >
              <Subheader>Events</Subheader>
                  {tilesData.map((tile) => (
                    <GridTile
                      key={tile.img}
                      title={tile.title}
                      subtitle={<span>by <b>{tile.author}</b></span>}
                      actionIcon={<IconButton href="/eventPage"><StarBorder color="white" /></IconButton>}
                    >
                      <img src={tile.img} />
                    </GridTile>
                  ))}
                </GridList>
              </div>
              </Paper>
              </Col>
          </Row>
        </div>


    	</div>



    )
  }
}

export default Dashboard
