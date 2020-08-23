import React from 'react'
import {makeStyles} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Signedinlinks from './Signedinlinks'
import Signedoutlinks from './Signedoutlinks'

const styles=makeStyles({
container:{
width:'70%',
display:'flex',
justifyContent:'space-between',
alignItems:'center',
margin:'0 auto'
},
right:{
display:'flex'
}
})
export default function Navbar() {
const classes=styles()
    return (
        <div>
            <AppBar position="static">
               <div className={classes.container}>
                    <div><h4>The X Project</h4></div>
                    <div className={classes.right}>
                        <Signedoutlinks/>
                        <Signedinlinks/>
                    </div>
               </div>
            </AppBar>
        </div>
    )
}
