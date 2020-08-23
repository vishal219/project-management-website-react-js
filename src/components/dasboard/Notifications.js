import React from 'react'
import {makeStyles} from '@material-ui/core'
const styles=makeStyles({
  heading:{
    color:"white"
  }
})
export default function Notifications() {
    const classes=styles()
    return (
        <div>
      <p className={classes.heading}><h5>Notifications</h5></p>
    </div>
    )
}
