import React from 'react'
import UseMemo from './UseMemo'
import UseRefCamera from './UseRefCamera'
import UseContext from './UseContext'
import UseCallBack from './UseCallBack'
// import Callback from './Test'

function Hookes() {
    return (
        <div>
            <UseContext />
            <UseMemo />
            <UseCallBack />
            <UseRefCamera />
        </div>
    )
}

export default Hookes