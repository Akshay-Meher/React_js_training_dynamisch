import React, { useState } from 'react';

function MessageDisplay() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setMessage(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className=" m-9 p-10 bg-lime-400 text-center text-black rounded-lg">
            <h1>Type a message and press Enter</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a message and press Enter"
                className='w-1/2'
            />
            <div>
                {message && <p>Message: {message}</p>}
            </div>
        </div>
    );
}

export default MessageDisplay;
