import React, { useState } from 'react';

const FilterAndMap = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [filteredNumbers, setFilteredNumbers] = useState([]);
    const [multiplier, setMultiplier] = useState(1);

    const filterEven = () => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        setFilteredNumbers(evenNumbers);
    };

    const multiplyNumbers = () => {
        const multipliedNumbers = filteredNumbers.map((num) => num * multiplier);
        setFilteredNumbers(multipliedNumbers);
    };

    return (
        <div className=' border-4 border-black bg-lime-600 rounded-md m-4 p-4'>
            <h2>Array Filter and Mapping</h2>
            <button
                className=' border-2 border-black m-1 p-1 bg-red-500 rounded-md'
                onClick={filterEven}>
                Filter Even Numbers
            </button>
            <label>
                Multiplier:
                <input
                    type="number"
                    value={multiplier}
                    className=' text-black'
                    onChange={(e) => setMultiplier(parseInt(e.target.value))}
                />
            </label>
            <button
                className=' border-2 border-black m-1 p-1 bg-red-500 rounded-md'
                onClick={multiplyNumbers}
            >
                Multiply Numbers
            </button>
            <h1>
                {filteredNumbers.map((num, index) => (
                    <>
                        <span className=' bg-rose-600 m-1 p-1 w-20 inline-block' key={index}>{num}</span>
                    </>
                ))}
            </h1>
        </div>
    );
};

export default FilterAndMap;