import React, { Component } from 'react';
import logo from './logo.svg';
import TabletopToolsSidebar from './Sidebar';
import { HitPointTrackerButtonClass } from './HitPointTracker';
import MonsterSelector from './MonsterSelector'
import './less/App.css';

class App extends Component {

  constructor() {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <TabletopToolsSidebar/>
        <br/>
        <MonsterSelector
          onModifyHp = { this.props.onModifyHp }
        />
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
