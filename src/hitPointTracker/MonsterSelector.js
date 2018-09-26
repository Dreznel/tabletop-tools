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
    width: '100%',
    height: 800,
    overflowY: 'auto'
    /*
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    float: 'left'
    */
  },
  table: {
    minWidth: 300
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
    this.importMonster = this.importMonster.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
  }


  handleSelectionChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  }

  importMonster(event) {
    this.fetchMonsterStats(this.state.monsterId);
    this.props.addMonster(this.state);
  }

  fetchMonsterStats(monsterId) {
     fetch(`http://www.dnd5eapi.co/api/monsters/${monsterId}`) //Call the endpoint, get the HTTP response
     .then(response => response.json())                        //From the HTTP response, pull out the JSON
     .then(responseData => {                                   //From the JSON, pull out the stuff we need.
       this.setState(
         {
           monsterName : responseData.name,
           monsterMaxHp : responseData.hit_points,
           monsterCurrentHp : responseData.hit_points
         }
       )
     })
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

   onRowClick() {
     alert("Row clicked!");
   }

  render() {
    const { classes } = this.props;
    return (
      <div className = 'monster-selector'>
        <TextField
          label="Monster ID"
          id="simple-start-adornment"
          className={classNames(this.props.margin, this.props.textField)}
          InputProps={{
            endAdornment: <Button variant="fab"
                            color = "secondary"
                            aria-label="Import"
                            className={ this.props.button }
                            onClick={ this.importMonster }
                            mini
                          >
                            <DetailsIcon/>
                          </Button>,
          }}
          onChange = { this.handleSelectionChange('monsterId') }
        />

        <Paper className={classes.root}>
          <Table className={classes.table} >
            <TableHead>
              <TableRow>
                <TableCell>Monster Name</TableCell>
                <TableCell>Import</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.monsterNamesObject.map(monster => {
                return(
                  <TableRow key={monster.name}>
                    <TableCell>{monster.name}</TableCell>
                    <TableCell>
                      <Button
                        variant="fab"
                        color = "secondary"
                        aria-label="Import"
                        className={ this.props.button }
                        onClick={ this.importMonster }
                        mini
                      >
                        <DetailsIcon/>
                      </Button>
                    </TableCell>
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
