import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        console.log("Runs Every Render: Without Dependancy");
    })

    useEffect(() => {
        console.log("Runs Once On Initail Render: Emplty Dep Array");
    }, [])

    useEffect(() => {
        console.log("Runs when Flag Changes:  with Dependacy");
    }, [flag])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <h1>{flag}</h1>
            <button onClick={() => setFlag(!flag)}>Change Flag</button>
        </div>
    )
}

export default UseEffect