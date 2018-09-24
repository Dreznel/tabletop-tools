import React, { Component } from 'react';
import HitPointTracker from './HitPointTracker';
import MonsterSelector from './MonsterSelector';

const render = () => {
  return (
    <div>
      <MonsterSelector/>
      <HitPointTracker/>
    </div>
  )
}

export default render;
