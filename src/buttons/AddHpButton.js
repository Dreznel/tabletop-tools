import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

//redux
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
  return {
    modifyHp: () =>
      dispatch({
        type: "MODIFY_HP",
        trackerId: "0",
        hpChange: 1
      })
  }
}

function AddHpButton({monster, modifyHp}) {
  return (
    <Button
      variant="fab"
      color = "primary"
      aria-label="Remove"
      onClick={ modifyHp }
      >
      <AddIcon/>
    </Button>
  )
}

export default connect(null, mapDispatchToProps)(AddHpButton)
