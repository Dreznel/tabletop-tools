import React, { Component } from 'react';
import DrawSpace from "map-buddy";
import Sketchpad from 'react-sketchpad';

export default class MappingTool extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DrawSpace />
      </div>
    )
  }
}
