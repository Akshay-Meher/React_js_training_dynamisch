import React, { useState } from 'react'
import ChildComp2 from './ChildComp2'

function ChildComp1({ changeMsg }) {
    const [msgChild1, setMsgChild1] = useState('');
    return (
        <div style={{
            padding: "10px 10px",
            margin: "auto",
            borderRadius: "20px",
            border: "2px solid black",
            backgroundColor: "#FCDC2A",
            width: "40vw"
        }}>
            <h2>ChildComp1</h2>
            <h3>Msg:{msgChild1}</h3>
            <ChildComp2 changeMsg={changeMsg} setMsgChild1={setMsgChild1} />
        </div>
    )
}

export default ChildComp1