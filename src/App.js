import React, { Component } from 'react';
import logo from './logo.svg';
import TabletopToolsSidebar from './Sidebar';
import MonsterHitPointTrackerManager from './hitPointTracker/MonsterHitPointTrackerManager'
import './less/App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <TabletopToolsSidebar/>
        <br/>
        <MonsterHitPointTrackerManager/>
      </div>
    );
  }
}

export default App;
