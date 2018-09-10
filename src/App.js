import React, { Component } from 'react';
import logo from './logo.svg';
import TabletopToolsSidebar from './Sidebar';
import { HitPointTrackerButtonClass } from './HitPointTracker';
import MonsterSelector from './MonsterSelector'
import './less/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabletopToolsSidebar/>
        <br/>
        <MonsterSelector/>
        <br/>
        <MonsterSelector/>
        <br/>
        <MonsterSelector/>
        <br/>
        <MonsterSelector/>
      </div>
    );
  }
}

export default App;
