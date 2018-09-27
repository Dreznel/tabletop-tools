import React, { Component } from 'react'

import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'

class MonsterList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <TableBody>
        {this.props.monsters.map(monster => {
            return(
              <TableRow key={monster.name}>
                <TableCell>{monster.name}</TableCell>
                <TableCell>{monster.url.slice("http://www.dnd5eapi.co/api/monsters/".length)}</TableCell>
                <TableCell onClick={this.props.handleMonsterSelect}>[Import Button]</TableCell>
              </TableRow>
            )}
          )
        }
      </TableBody>
    )
  }
}

export default MonsterList;
