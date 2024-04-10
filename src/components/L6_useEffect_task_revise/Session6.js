import React from 'react'
import FechData from './FechData'
import Timer from './Timer'
import LocalStorageTodo from './LocalStorageTodo'

function Session6() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Timer />
            <LocalStorageTodo />
            <FechData />
        </div>
    )
}

export default Session6