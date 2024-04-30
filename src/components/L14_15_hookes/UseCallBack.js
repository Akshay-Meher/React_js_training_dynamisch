import React, { useEffect, useState } from 'react'

function UseCallBack() {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(23);
    useEffect(() => {
        console.log('hii');
    })
    return (
        <div className=' bg-green-300 m-4 p-4 rounded-lg text-black'>
            <div>
                <h1>Count: {count}</h1>
                <h1>Age: {age}</h1>
            </div>
            <Child1 setCount={setCount} />
            <Child2 setAge={setAge} />
        </div>
    )
}

export default UseCallBack;


function Child1({ setCount }) {
    return (
        <div>
            <button
                onClick={() => setCount(prev => prev + 1)}
                className=' bg-red-400 m-1 p-1 rounded-md hover:bg-red-700'
            >
                Count++
            </button>
        </div>
    )
}

function Child2({ setAge }) {
    return (
        <div>
            <button
                onClick={() => setAge(prev => prev + 1)}
                className=' bg-red-400 m-1 p-1 rounded-md hover:bg-red-700'
            >
                Age++
            </button>
        </div>
    )
}