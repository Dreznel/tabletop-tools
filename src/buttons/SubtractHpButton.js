import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

//redux
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, props) => {
  return {
    modifyHp: () =>
      dispatch({
        type: "MODIFY_HP",
        monsterIndex: props.monsterIndex,
        hpChange: -1
      })
  }
}

function SubtractHpButton({monster, modifyHp}) {
  return (
    <Button
      variant="fab"
      color = "primary"
      aria-label="Remove"
      onClick={ modifyHp }
      >
      <RemoveIcon/>
    </Button>
  )
}

export default connect(null, mapDispatchToProps)(SubtractHpButton)
