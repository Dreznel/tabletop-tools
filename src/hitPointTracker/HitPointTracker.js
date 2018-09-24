import React, { Component } from 'react'
import MonsterHitPointTrackerManager from './MonsterHitPointTrackerManager'

class HitPointTracker extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className='hp-tracker'>
        <MonsterHitPointTrackerManager/>
      </div>
    )
  }
}

export default HitPointTracker;
