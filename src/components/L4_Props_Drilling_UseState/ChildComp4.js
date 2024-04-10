import React, { useState } from 'react'


function ChildComp4({ changeMsg, setMsgChild1, setMsgChild2, setMsgChild3 }) {
    const [newMsg, setNewMsg] = useState('');
    const [selectComp, setSelectComp] = useState('ParentComp');
    const [msgChild4, setMsgChild4] = useState('');

    function handleClick() {

        switch (selectComp) {
            case 'ParentComp':
                changeMsg(newMsg);
                break;
            case 'ChildComp1':
                setMsgChild1(newMsg);
                break;
            case 'ChildComp2':
                setMsgChild2(newMsg);
                break;
            case 'ChildComp3':
                setMsgChild3(newMsg);
                break;
            case 'ChildComp4':
                setMsgChild4(newMsg);
                break;
            default:
                return;
        }
        setNewMsg('');
    }
    return (
        <div style={style.childCard}>
            <h5>ChildComp4</h5>
            <span>msg:{msgChild4}</span>
            <div style={style.innerDiv}>

                {/* <label for="comp">Choose a Componant:</label> */}
                <select
                    name="comp"
                    id="comp"
                    value={selectComp}
                    onChange={(e) => setSelectComp(e.target.value)}
                >
                    <option value="ParentComp">ParentComp</option>
                    <option value='ChildComp1'>ChildComp1</option>
                    <option value='ChildComp2'>ChildComp2</option>
                    <option value='ChildComp3'>ChildComp3</option>
                    <option value="ChildComp4">ChildComp4</option>
                </select>

                <input type="text"
                    style={style.input}
                    placeholder='Type Something...'
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                />
                <button
                    style={style.btn}
                    onClick={handleClick}>
                    Send to Parent
                </button>
            </div>

        </div>
    )
}

export default ChildComp4;



const style = {
    childCard: {
        backgroundColor: "#D862BC",
        padding: "10px  30px 0px 30px",
        margin: "auto",
        borderRadius: "20px",
        border: "2px solid black",
        width: "10vw"
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