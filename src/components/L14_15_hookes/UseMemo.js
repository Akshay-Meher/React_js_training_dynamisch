// Filename - UseMemo.js

import React, { useState, useMemo } from "react";

function UseMemo() {
    const [number, setNumber] = useState(0);
    // Using useMemo
    const squaredNum = useMemo(() => {
        return squareNum(number);
    }, [number]);
    const [counter, setCounter] = useState(0);

    // Change the state to the input
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    };

    // Increases the counter by 1
    const counterHander = () => {
        setCounter(counter + 1);
    };
    return (
        <div className=" m-4 p-4 bg-green-400 rounded-lg text-black">
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}>
            </input>

            <div>OUTPUT: {squaredNum}</div>
            <button
                className=" border-2 bg-red-400 p-1 m-2 rounded-md"
                onClick={counterHander}>
                Counter ++
            </button>
            <div>Counter : {counter}</div>
        </div>
    );
}

// Function to square the value
function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
}

export default UseMemo;
