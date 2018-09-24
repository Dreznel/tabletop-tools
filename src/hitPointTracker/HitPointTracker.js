import React, { Component } from 'react'
import MonsterHitPointTrackerManager from './MonsterHitPointTrackerManager'
import MonsterSelector from './MonsterSelector'

class HitPointTracker extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className='hit-point-tracker'>
        <MonsterSelector/>
        <MonsterHitPointTrackerManager/>
      </div>
    )
  }
}

export default HitPointTracker;
