import React, { useState } from 'react';

const FibonacciSequence = () => {
    const [length, setLength] = useState(10);
    const [sequence, setSequence] = useState([]);

    const generateSequence = () => {
        const fibSequence = [0, 1];

        let currentValue = 1;
        let previousValue = 0;

        while (fibSequence.length < length) {
            [previousValue, currentValue] = [currentValue, previousValue + currentValue];
            fibSequence.push(currentValue);
        }

        setSequence(fibSequence);
    };

    return (
        <div className=' border-4 border-black bg-lime-600 rounded-md m-4 p-4'>
            <h2>Fibonacci Sequence Generator</h2>
            <label>
                Length:
                <input
                    className=' text-black'
                    type="number"
                    value={length}
                    placeholder='Enter number'
                    onChange={(e) => setLength(parseInt(e.target.value))}
                />
            </label>
            <button
                className=' border-2 border-black m-1 p-1 bg-red-500 rounded-md'
                onClick={generateSequence}>
                Generate
            </button>
            <h1>
                {sequence.map((num, index) => (
                    <>
                        <span className=' bg-rose-600 m-1 p-1 w-20 inline-block' key={index}>{num}</span>
                    </>
                ))}
            </h1>
        </div>
    );
};

export default FibonacciSequence;