import React, { useState } from 'react'
import ChildComp1 from './ChildComp1';

const style = {
    parentCard: {
        backgroundColor: "#87A922",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        width: "50vw",
        // height: "100vh",
        marginTop: "10vh",
        padding: "10px 10px",
        margin: "auto",
        borderRadius: "20px",
    }
}

// let count = 0;
function ParentComp() {
    const [msg, setMsg] = useState("Change Me...");

    function changeMsg(newMsg) {
        setMsg(newMsg);
    }

    return (
        <div style={style.parentCard}>
            <h1>ParentComp</h1>
            <h3 style={{ backgroundColor: "#FDA403", padding: "10px", borderRadius: '5px' }}>{msg}</h3>
            <div>
                <ChildComp1 changeMsg={changeMsg} />
            </div>
        </div>
    )
}

export default ParentComp