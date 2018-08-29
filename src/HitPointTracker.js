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

class HitPointTrackerButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = { name:'Generic Character', hp: 5 }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className = "hp-tracker">
        <ul>
          <li>
            <h1> HP for { this.state.name }: { this.state.hp } </h1>
          </li>
          <li>
            <Button
              variant="fab"
              color = "primary"
              aria-label="Add"
              className={ this.props.button }
              onClick={ this.handleClick }
              >
              <AddIcon/>
            </Button>
          </li>
        </ul>
      </div>
    )
  }

  //I guess I have to look up what a click event does.
  handleClick(event) {
    this.setState( { hp: this.state.hp + 1 } )
  }
}



export default withStyles(styles)(HitPointTrackerButton);
export { HitPointTrackerButtonClass } ;
