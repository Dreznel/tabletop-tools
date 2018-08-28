import React, { Component} from 'react';
import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

class HitPointTracker extends Component {

  //this.state = { hp: 5 };


  render() {
    const { classes } = this.props;
    return (
      <div className = "hp-tracker">
        <Button variant="fab" color = "primary" aria-label="Add" className={classes.button}>
          <AddIcon/>
        </Button>
      </div>
    )
  }
}

export default HitPointTracker;
