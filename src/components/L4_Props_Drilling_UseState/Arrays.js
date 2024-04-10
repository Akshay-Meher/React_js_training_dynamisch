import React, { useState } from 'react'


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
function Arrays() {
    const [arr1, setArr1] = useState(array1);
    const [arr2, setArr2] = useState(array2);
    const [arrRes, setArrRes] = useState([...array1, ...array2]);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    function addArr1() {
        setArr1((prev) => [input1, ...prev])
        setInput1("");
    }

    function addArr2() {
        setArr2((prev) => [input2, ...prev])
        setInput2("");
    }
    function addResult() {
        setArrRes([...arr1, ...arr2]);
    }

    return (
        <div>
            <div>
                <h3>Arr1:{JSON.stringify(arr1)}</h3>
                <input
                    type="number"
                    placeholder='Arr1:Enter value'
                    value={input1}
                    onChange={(e) => setInput1(Number(e.target.value))}
                />
                <button
                    onClick={addArr1}
                >
                    Add to Arr1
                </button>
            </div>
            <div>
                <h3>Arr2:{JSON.stringify(arr2)}</h3>
                <input
                    type="number"
                    placeholder='Arr2:Enter value'
                    value={input2}
                    onChange={(e) => setInput2(Number(e.target.value))}
                />
                <button onClick={addArr2}>
                    Add to Arr2
                </button>
            </div>
            <div>
                <h3>Result: {JSON.stringify(arrRes)}</h3>
                <button onClick={addResult}>Concate Two Arrays</button>
            </div>
        </div>
    )
}

export default Arrays