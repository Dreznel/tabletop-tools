import React, { Component } from 'react';
import logo from './logo.svg';
import TabletopToolsSidebar from './Sidebar';
import HitPointTrackerPage from './hitPointTracker/HitPointTrackerPage';
import MappingTool from './mappingTool/MappingTool';
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <TabletopToolsSidebar/>
        <br/>

        <HitPointTrackerPage/>
      </div>
    );
  }
}

export default App;
