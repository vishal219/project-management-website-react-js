import React from 'react'
import {makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
const styles=makeStyles((theme)=>({
        container:{
        display:'flex',
        alignItems:'center'
        },
        orange: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
        },
        link:{
            color:'white',
            textDecoration:'none',
            padding:'0px 20px 0px 20px'
            },
}))
export default function Signedinlinks() {
    const classes=styles()
    return (
        <div className={classes.container}>
            <Link className={classes.link}   to="/createproject">New Project</Link>
            <Link className={classes.link} to="/">Log out</Link>
           <Link to="/"> <Avatar className={classes.orange}>VT</Avatar></Link>
        </div>
    )
}
