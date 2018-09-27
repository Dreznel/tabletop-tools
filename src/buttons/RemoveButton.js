import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircleOutline'

//redux
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, props) => {
  return {
    removeMonster: () =>
      dispatch({
        type: "REMOVE_MONSTER",
        monsterIndex: props.monsterIndex,
      })
  }
}

function AddHpButton({monster, removeMonster}) {
  return (
    <Button
      variant="fab"
      color = "primary"
      aria-label="Remove Monster"
      onClick={ removeMonster }
      className = "remove-monster-button"
      mini
      >
      <RemoveCircleIcon/>
    </Button>
  )
}

export default connect(null, mapDispatchToProps)(AddHpButton)
