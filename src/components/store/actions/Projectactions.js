import React from 'react'

export default function createProject(project) {
    return (dispatch)=>{
        //make async call to database
        dispatch({type:'CREATE_PROJECT',project})
    }
    
}
