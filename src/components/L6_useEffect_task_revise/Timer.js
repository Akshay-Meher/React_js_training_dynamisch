import React, { useState, useEffect, useRef } from 'react'

function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        handleTime();
        return () => {
            clearInterval(id.current);
        }
    }, [])

    let id = useRef();

    function handleTime() {
        id.current = setInterval(() => {
            setTime(prev => prev + 1);
            console.log(time);
        }, 1000)
    }

    return (
        <div style={{ textAlign: 'center', backgroundColor: "#B80000", width: "20vw", borderRadius: "30px" }}>
            <h1>{time}</h1>
            <button onClick={() => handleTime()}>start</button>
            <button onClick={() => clearInterval(id.current)}>pause</button>
            <button
                onClick={() => {
                    clearInterval(id.current);
                    setTime(0);
                }}
            >reset</button>
        </div>
    )
}

export default Timer