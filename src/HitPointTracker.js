import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

//Remember that you can name this whatever as long as you import from the right
//place. That's because the place you're importing from uses "export default," I think.
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

class HitPointTrackerButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = { name:'Generic Character', hp: 5 }
    this.addHp = this.addHp.bind(this);
    this.subtractHp = this.subtractHp.bind(this);
  }

  render() {
    return (
      <div className = "hp-tracker">
        <p> HP for <b> { this.state.name } </b>: { this.state.hp } </p>
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

  //I guess I have to look up what a click event does.
  addHp(event) {
    this.setState( { hp: this.state.hp + 1 } );
  }

  subtractHp(event) {
    this.setState( { hp: this.state.hp - 1 } );
  }
}

export { HitPointTrackerButtonClass } ;
