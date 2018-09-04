import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import classNames from 'classnames' //I have no idea what this does.

//Remember that you can name this whatever as long as you import from the right
//place. That's because the place you're importing from uses "export default," I think.
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

function HitPointTrackerFunction(props) {
  return (
    <div className = "hp-tracker">
      <p> HP for <b> { props.name } </b>: { props.currentHp }/{ props.maxHp } </p>

      <Button
        variant="fab"
        color = "primary"
        aria-label="Remove"
        className={ props.button }
        onClick={ props.onClickSubtract }
        >
        <RemoveIcon/>
      </Button>

      <Button
        variant="fab"
        color = "primary"
        aria-label="Add"
        className={ props.button }
        onClick={ props.onClickAdd }
        >
        <AddIcon/>
      </Button>
    </div>
  )
}

class HitPointTrackerButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHp: parseInt(this.props.maxHp)
    }
    this.addHp = this.addHp.bind(this);
    this.subtractHp = this.subtractHp.bind(this);
  }

  addHp(event) {
    this.props.handleModifyHp(+1);
  }

  subtractHp(event) {
    this.props.handleModifyHp(-1);
  }

  render() {
    return (
      <div className = "hp-tracker">
        <p> HP for <b> { this.props.name } </b>: { this.props.currentHp }/{ this.props.maxHp } </p>

        <Button
          variant="fab"
          color = "primary"
          aria-label="Remove"
          className={ this.props.button }
          onClick={ this.subtractHp }
          >
          <RemoveIcon/>
        </Button>

        <Button
          variant="fab"
          color = "primary"
          aria-label="Add"
          className={ this.props.button }
          onClick={ this.addHp }
          >
          <AddIcon/>
        </Button>
      </div>
    )
  }

}

export default HitPointTrackerButtonClass;
export { HitPointTrackerFunction } ;
