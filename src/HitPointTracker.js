import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import classNames from 'classnames' //I have no idea what this does.

//Remember that you can name this whatever as long as you import from the right
//place. That's because the place you're importing from uses "export default," I think.
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DetailsIcon from '@material-ui/icons/Details'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'

class HitPointTrackerButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: {
        monsterId: 1
      },
      name:'Generic Character',
      maxHp: 5,
      currentHp: 5
    }
    this.addHp = this.addHp.bind(this);
    this.subtractHp = this.subtractHp.bind(this);
    this.importMonster = this.importMonster.bind(this);
    this.fetchMonsterStats = this.fetchMonsterStats.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }

  //I have to dig in and see if I can figure out exactly what this is doing.
  /*
    Also, if the advantage of fat-arrow functions is that they inherit the "this"
    from the calling context, then why are we using them? Above, we bind this function
    to a specific -this- (the this of the class), so . . . I'm confused.

    Then again, that was my own decision (the bind thing), following the pattern
    set by the other class methods. Oi . . . I need to research.
  */
  handleSelectionChange = prop => event => {
    let updatedSelection = this.state.selection;
    updatedSelection[prop] = event.target.value;
    this.setState({ selection: updatedSelection });
  }

  addHp(event) {
    this.setState( { currentHp: this.state.currentHp + 1 } );
  }

  subtractHp(event) {
    this.setState( { currentHp: this.state.currentHp - 1 } );
  }

  importMonster(event) {
    this.fetchMonsterStats(this.state.selection.monsterId);
  }

  fetchMonsterStats(monsterId) {
    fetch(`http://www.dnd5eapi.co/api/monsters/${monsterId}`) //Call the endpoint, get the HTTP response
    .then(response => response.json())                        //From the HTTP response, pull out the JSON
    .then(responseData => {                                   //From the JSON, pull out the stuff we need.
      this.setState( { name: responseData.name, maxHp: responseData.hit_points, currentHp: responseData.hit_points } )
    })
  }

  render() {
    return (
      <div className = "hp-tracker">
        <TextField
          label="Monster ID"
          id="simple-start-adornment"
          className={classNames(this.props.margin, this.props.textField)}
          InputProps={{
            endAdornment: <Button variant="fab"
                            color = "secondary"
                            aria-label="Import"
                            className={ this.props.button }
                            onClick={ this.importMonster }
                            mini
                          >
                            <DetailsIcon/>
                          </Button>,
          }}
          onChange = { this.handleSelectionChange('monsterId') }
        />

        <p> HP for <b> { this.state.name } </b>: { this.state.currentHp }/{ this.state.maxHp } </p>

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

export { HitPointTrackerButtonClass } ;
