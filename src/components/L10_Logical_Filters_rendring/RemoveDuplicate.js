import React, { useState } from 'react'
let Arr = [1, 2, 4, 1, 5, 7, 2, 4, 1, 7];
function RemoveDuplicate() {

    const [arr, setArr] = useState(Arr);
    const [duplicateValues, setDuplicateValues] = useState([]);

    function removeDuplicate() {
        let uniqueArr = arr.filter((item, index) => arr.indexOf(item) == index);
        let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

        setArr(uniqueArr);
        setDuplicateValues(duplicates);
    }

    return (
        <div className=' border-4 border-black rounded-md bg-red-200 m-4 p-4 flex flex-col justify-center text-center'>
            <h1 className='  bg-sky-800 text-center m-2'>Original Array</h1>
            <h1>
                {Arr.map((num, index) => (
                    <>
                        <span className=' bg-rose-600 m-1 p-1 w-20 inline-block' key={index}>{num}</span>
                    </>
                ))}
            </h1>

            <h1 className='  bg-sky-800 text-center m-2'>Uniqe Array</h1>

            <h1>
                {arr.map((num, index) => (
                    <>
                        <span className=' bg-rose-600 m-1 p-1 w-20 inline-block' key={index}>{num}</span>
                    </>
                ))}
            </h1>

            <h1 className='  bg-sky-800 text-center m-2'>Duplicate Items</h1>
            <h1>
                {duplicateValues.map((num, index) => (
                    <>
                        <span className=' bg-rose-600 m-1 p-1 w-20 inline-block' key={index}>{num}</span>
                    </>
                ))}
            </h1>
            <div>
                <button
                    className=' border-2 border-black m-4 p-1 w-1/4 bg-red-500 rounded-md'
                    onClick={removeDuplicate}>
                    Remove Duplicate
                </button>
            </div>
        </div>
    )
}

export default RemoveDuplicate