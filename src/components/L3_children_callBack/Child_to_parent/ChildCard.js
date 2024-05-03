import React, { useState } from 'react'


function ChildCard({ changeMsg }) {
    const [newMsg, setNewMsg] = useState('');

    function handleClick() {
        changeMsg(newMsg);
        setNewMsg('');
    }
    return (
        <div style={style.childCard}>
            <h2>ChildCard</h2>
            <div style={style.innerDiv}>
                <input type="text"
                    style={style.input}
                    placeholder='Type Something...'
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                />
                <button
                    style={style.btn}
                    onClick={handleClick}>
                    Send to ParentCard
                </button>
            </div>

        </div>
    )
}

export default ChildCard



const style = {
    childCard: {
        backgroundColor: 'cornflowerblue',
        padding: "10px  30px 0px 30px",
        margin: "auto",
        borderRadius: "20px"
    },
    innerDiv: {
        padding: "10px 10px",
        margin: "auto",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        width: "auto",
        margin: "10px",
        padding: "5px",
        height: "40px",
        backgroundColor: "#FDA403",
        borderRadius: '10px',
        color: "white",
        border: 'solid black'
    },
    input: {
        with: "200px",
        height: "20px"
    }
}