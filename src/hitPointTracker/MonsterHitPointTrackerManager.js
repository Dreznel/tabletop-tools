import React, { Component } from 'react'
import MonsterHitPointTracker from './MonsterHitPointTracker'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    monsterList: state.monsters
  }
}

class MonsterHitPointTrackerManager extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderList = [];
    for(var i=0; i<this.props.monsterList.length; i++) {
      renderList.push(<MonsterHitPointTracker monsterIndex={i}/>)
    }
    return renderList;
  }
}

export default connect (
  mapStateToProps,
  null
)(MonsterHitPointTrackerManager)
