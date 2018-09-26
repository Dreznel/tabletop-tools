import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import classNames from 'classnames' //I have no idea what this does.
import DetailsIcon from '@material-ui/icons/Details'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'

import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'

import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    width: '80%',
    margin: 'auto',
    height: 800,
    overflowY: 'auto'
    /*
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    float: 'left'
    */
  },
  table: {
    minWidth: 200
  }
});

const mapDispatchToProps = (dispatch, props) => {
  return(
    {
      addMonster: ( { monsterName, monsterMaxHp, monsterCurrentHp } ) =>
        dispatch({
          type: "ADD_MONSTER",
          monsterName: monsterName,
          monsterMaxHp: monsterMaxHp,
          monsterCurrentHp: monsterCurrentHp,
        })
    }
  )
}

class MonsterSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsterId : 1,
      monsterName : 'DEFAULT_NAME',
      monsterMaxHp : 100,
      monsterCurrentHp : 100,
      monsterNamesObject: []
    };

    this.fetchMonsterNames();

    //Are these lines necessary?
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleMonsterSelect = this.handleMonsterSelect.bind(this);
  }

  handleSelectionChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  }

  fetchMonsterNames() {
     fetch('http://www.dnd5eapi.co/api/monsters/')             //Call the endpoint, get the HTTP response
     .then(response => response.json())                        //From the HTTP response, pull out the JSON
     .then(responseData => {                                   //From the JSON, pull out the stuff we need.
       this.setState(
         {
           monsterNamesObject: responseData.results
         }
       )
     })
   }

   handleMonsterSelect(contents) {
     let monsterId = parseInt(contents.target.parentNode.childNodes[1].textContent); //Super hacky, but the only way I know as of now to get row data.
     //this.fetchMonsterStats(monsterId);

     fetch(`http://www.dnd5eapi.co/api/monsters/${monsterId}`) //Call the endpoint, get the HTTP response
     .then(response => response.json())                        //From the HTTP response, pull out the JSON
     .then(responseData => {                                   //From the JSON, pull out the stuff we need.
       this.props.addMonster(
         {
           monsterName : responseData.name,
           monsterMaxHp : responseData.hit_points,
           monsterCurrentHp : responseData.hit_points
         }
       )
     })
   }

  render() {
    const { classes } = this.props;
    return (
      <div className = 'monster-selector'>
        <Paper className={classes.root}>
          <Table className={classes.table} >
            <TableHead>
              <TableRow>
                <TableCell>Monster Name</TableCell>
                <TableCell>Monster ID</TableCell>
                <TableCell>Import</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.monsterNamesObject.map(monster => {
                return(
                  <TableRow key={monster.name}>
                    <TableCell>{monster.name}</TableCell>
                    <TableCell>{monster.url.slice("http://www.dnd5eapi.co/api/monsters/".length)}</TableCell>
                    <TableCell onClick={this.handleMonsterSelect}>[Import Button]</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(MonsterSelector));
