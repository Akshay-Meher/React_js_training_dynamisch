import React, { useState } from 'react'
import ChildComp4 from './ChildComp4'

function ChildComp3({ changeMsg, setMsgChild1, setMsgChild2 }) {

    const [msgChild3, setMsgChild3] = useState('');

    return (
        <div style={{
            padding: "10px 10px",
            margin: "auto",
            borderRadius: "20px",
            border: "2px solid black",
            backgroundColor: "#A34343",
            width: "20vw"

        }}>
            <h4>ChildComp3</h4>
            <h4>msg: {msgChild3}</h4>
            <ChildComp4 changeMsg={changeMsg}
                setMsgChild1={setMsgChild1}
                setMsgChild2={setMsgChild2}
                setMsgChild3={setMsgChild3}
            />
        </div>

    )
}

export default ChildComp3