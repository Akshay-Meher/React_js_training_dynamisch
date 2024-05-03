import React, { useState } from 'react'
import ChildCard from './ChildCard'

const style = {
    parentCard: {
        backgroundColor: "#282c34",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        width: "50%",
        minHeight: "30%",
        marginTop: "10vh",
        padding: "10px 10px",
        margin: "auto",
        borderRadius: "20px"
    }
}

function ParentCard() {
    const [msg, setMsg] = useState("Change Me...");

    function changeMsg(newMsg) {
        setMsg(newMsg);
    }


    return (
        <div style={style.parentCard}>
            <h1>ParentCard</h1>
            <h3 style={{ backgroundColor: "#FDA403", padding: "10px", borderRadius: '5px', margin: "5px" }}>{msg}</h3>
            <div>
                <ChildCard changeMsg={changeMsg} />
            </div>
        </div>
    )
}

export default ParentCard