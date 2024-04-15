import React, { useState } from 'react';

const Input = () => {
    const [inputType, setInputType] = useState('text');
    const inputTypes = [
        'text', 'password', 'email', 'number', 'date',
        'time', 'url', 'color', 'checkbox', 'radio',
        'file', 'range', 'hidden'
    ];

    const handleTypeChange = (e) => {
        console.log("L1");
        console.log(e);
        setInputType(e.target.value);
    };

    const renderInput = () => {
        switch (inputType) {
            case 'text':
            case 'password':
            case 'email':
            case 'number':
            case 'url':
            case 'color':
            case 'date':
            case 'time':
            case 'range':
            case 'checkbox':
            case 'file':
            case 'hidden':
                return <input type={inputType} />;
            case 'radio':
                return (
                    <div>
                        <input type="radio" name="radioGroup" value="option1" /> Option 1
                        <input type="radio" name="radioGroup" value="option2" /> Option 2
                    </div>
                );

            default:
                return <input type={inputType} />;
        }
    };

    return (
        <div className=" m-9 p-10 bg-lime-400 text-center text-black rounded-lg">
            <div>
                <select value={inputType} onChange={handleTypeChange}>
                    {inputTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
                {renderInput()}
            </div>
        </div>
    );
};

export default Input;
