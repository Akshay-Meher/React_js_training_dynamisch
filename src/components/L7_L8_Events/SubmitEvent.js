// Filename - App.js 

import React, { useState } from "react";
function SubmitEvent() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        setResult(
            "Form has been submitted with with Input: " +
            value
        );
    }

    function handleChange(e) {
        setValue(e.target.value);
        setResult("");
    }
    return (
        <div
            className=" m-9 p-10 bg-lime-400 text-center text-black rounded-lg"
        >
            <h3>
                Exemple for React onSubmit Event Handler
            </h3>
            <form onSubmit={handleSubmit}>
                <label>Add input here: </label>
                <input
                    value={value}
                    onInput={handleChange}
                    required
                />
                <br />
                <br />
                <button type="submit" className=" border-2 p-2 m-2 rounded-md bg-red-600">Submit</button>
            </form>
            <br />
            <div>
                <h4>{result}</h4>
            </div>
        </div>
    );
}

export default SubmitEvent; 
