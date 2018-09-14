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
import AddHpButton from '../buttons/AddHpButton'
import SubtractHpButton from '../buttons/SubtractHpButton'

//redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    monsterList : state.monsters
  };
}

class MonsterHitPointTracker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "hp-tracker">
        <p> HP for <b>{ this.props.monsterList[this.props.monsterIndex].name }</b>:
          {  this.props.monsterList[this.props.monsterIndex].currentHp }
          /
          {  this.props.monsterList[this.props.monsterIndex].maxHp }
        </p>
        <SubtractHpButton monsterIndex={this.props.monsterIndex}/>
        <AddHpButton monsterIndex={this.props.monsterIndex}/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  null
)(MonsterHitPointTracker)
