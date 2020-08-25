
import React from 'react'

export default function createProject(project) {
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        //make async call to database
        const firestore=getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'KM',
            authorLastName:'Priyanka',
            authorId:12345,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project})
        }).catch(err =>{
            dispatch({type:'CREATE_PROJECT_ERR',project})
        })
        
    }
    
}
