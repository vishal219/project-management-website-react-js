import React from 'react'

const initState={
    projects:[
        {id:'1',title:'pubbb' ,content:'fdewv jewbdjewv vfdvevf  ewv e dew dew de de dew dw'},
        {id:'2',title:'pubbb' ,content:'fdewv jewbdjewv vfdvevf  ewv e dew dew de de dew dw'},
        {id:'3',title:'pubbb' ,content:'fdewv jewbdjewv vfdvevf  ewv e dew dew de de dew dw'}
    ]
}

export default function projectReducer(state=initState,action) {
    switch(action.type)
    {
        case 'CREATE_PROJECT': console.log('project created',action.project)
    }

    return (
        state
    )
}
