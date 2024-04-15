// App.js
import { useState } from "react";

function KeyDown() {
    const [key, setkey] = useState();
    const keyDown = (event) => {

        setkey(event.key)
    }
    return (
        <div className=" m-9 p-10 bg-lime-400 text-center text-black rounded-lg">
            <h1>KeyDown Event</h1>
            {key ? <h2>Pressed Key : {key}</h2> : null}
            <input type='text' onKeyDown={keyDown} placeholder='Press here...' />
        </div>
    );
}
export default KeyDown;
