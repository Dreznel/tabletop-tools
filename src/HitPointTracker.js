import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function HitPointTrackerButton(props) {
  const { classes } = props;
  return (
    <div className = "hp-tracker">
      <Button variant="fab" color = "primary" aria-label="Add" className={classes.button}>
        <AddIcon/>
      </Button>
    </div>
  )
}

HitPointTrackerButton.propTypes = {
  classes: PropTypes.object.isRequired
};



export default withStyles(styles)(HitPointTrackerButton);
