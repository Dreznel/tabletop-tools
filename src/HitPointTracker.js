import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import classNames from 'classnames' //I have no idea what this does.

//Remember that you can name this whatever as long as you import from the right
//place. That's because the place you're importing from uses "export default," I think.
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

//Bad Design
import AddHpButton from './AddHpButton'
import SubtractHpButton from './SubtractHpButton'

//redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    monster: state.monsters["0"]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modifyHp: () =>
      dispatch({
        type: "MODIFY_HP",
        trackerId: "0",
        hpChange: 1
      })
  }
}

class HitPointTrackerClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "hp-tracker">
        <p> HP for <b> { this.props.monster.name } </b>: {  this.props.monster.currentHp }/{  this.props.monster.maxHp } </p>


        <SubtractHpButton/>
        <AddHpButton/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HitPointTrackerClass)
