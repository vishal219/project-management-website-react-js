import React from 'react'
import {makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'


const styles=makeStyles({
    container:{
    display:'flex',
    alignItems:'center'
    },
    link:{
    color:'white',
    textDecoration:'none',
    padding:'0px 20px 0px 20px'
    },
})
export default function Signedinlinks() {
    const classes=styles()
    return (
        <div className={classes.container}>
            <Link to="/signin" className={classes.link}>Login</Link>
            <Link to="/signup" className={classes.link}>Sign up</Link>
           
        </div>
    )
}
