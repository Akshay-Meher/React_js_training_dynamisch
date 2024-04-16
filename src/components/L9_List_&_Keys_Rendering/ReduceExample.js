import React, { useState } from 'react';

const ReduceExample = () => {
    const [numbers, setNumbers] = useState([]);
    const [sum, setSum] = useState(0);

    const addNumber = () => {
        const newNumber = Math.floor(Math.random() * 100);
        setNumbers([...numbers, newNumber]);
    };

    const calculateSum = () => {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        setSum(sum);
    };

    return (
        <div className=' border-4 border-black bg-lime-600 rounded-md m-4 p-4'>
            <h2>Array Reduce Example</h2>
            <button
                className=' border-2 border-black m-1 p-1 bg-red-500 rounded-md'
                onClick={addNumber}>
                Add Random Number
            </button>
            <button
                className=' border-2 border-black m-1 p-1 bg-red-500 rounded-md'
                onClick={calculateSum}>
                Calculate Sum
            </button>
            <ul>
                {numbers.map((num, index) => (
                    <li className=' bg-rose-600 m-auto p-1 w-20 mt-2' key={index}>{num}</li>
                ))}
            </ul>
            <p>Sum: {sum}</p>
        </div>
    );
};

export default ReduceExample;