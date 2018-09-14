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
    for(var monsterTrackerId in this.props.monsterList) {
      renderList.push(<MonsterHitPointTracker trackerId={monsterTrackerId}/>)
    }
    return renderList;
  }
}

export default connect (
  mapStateToProps,
  null
)(MonsterHitPointTrackerManager)
