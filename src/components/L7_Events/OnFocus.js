import React, { useState } from 'react';

function OnFocus() {
    const [isFocused, setIsFocused] = useState(false);
    const [isBlur, setIsBlur] = useState(false);

    const handleOnFocus = () => {
        setIsFocused(true);
        setIsBlur(false);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setIsBlur(true);
    };

    return (
        <div className=" m-9 p-10 bg-lime-400 text-center text-black rounded-lg">
            <h1>OnFocus / onBlur</h1>
            <label htmlFor="myInput">
                Enter your details:
            </label>
            <input
                type="text"
                id="myInput"
                onFocus={handleOnFocus}
                onBlur={handleBlur}
            />
            {isFocused ? (
                <div style=
                    {
                        {
                            marginTop: '7px',
                            color: 'red'
                        }
                    }>
                    onFocus Active
                </div>
            ) : ""}
            {isBlur ? (
                <div style=
                    {
                        {
                            marginTop: '7px',
                            color: 'red'
                        }
                    }>
                    onBlur Active
                </div>
            ) : ""}
        </div>
    );
}

export default OnFocus;
