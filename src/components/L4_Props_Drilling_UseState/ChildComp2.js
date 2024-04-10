import React, { useState } from 'react'
import ChildComp3 from './ChildComp3'

function ChildComp2({ changeMsg, setMsgChild1 }) {
    const [msgChild2, setMsgChild2] = useState('');
    return (
        <div style={{
            padding: "10px 10px",
            margin: "auto",
            borderRadius: "20px",
            border: "2px solid black",
            backgroundColor: "#AD88C6",
            width: "30vw"
        }}>
            <h2>ChildComp2</h2>
            <h4>Msg: {msgChild2}</h4>
            <ChildComp3
                changeMsg={changeMsg}
                setMsgChild1={setMsgChild1}
                setMsgChild2={setMsgChild2}
            />
        </div>
    )
}

export default ChildComp2