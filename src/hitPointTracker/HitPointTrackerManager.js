import React, { Component } from 'react'
import HitPointTracker from './HitPointTracker'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    monsterList: state.monsters
  }
}

class HitPointTrackerManager extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderList = [];
    for(var monsterTrackerId in this.props.monsterList) {
      renderList.push(<HitPointTracker trackerId={monsterTrackerId}/>)
    }
    return renderList;
  }
}

export default connect (
  mapStateToProps,
  null
)(HitPointTrackerManager)
