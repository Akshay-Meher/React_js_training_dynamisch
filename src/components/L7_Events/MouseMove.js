//App.js 

import React, { useState } from 'react';
function MouseMove() {
    const [position, setPosition] = useState({ 'event-clientX': 0, 'event-clientY': 0 })

    function handleMouseMove(event) {
        console.log('Mouse position:', event.clientX, event.clientY);
        setPosition({ 'event-clientX': event.clientX, 'event-clientY': event.clientY })
    };


    return (
        <div onMouseMove={handleMouseMove} className=" m-9 p-10 bg-lime-400 text-center text-black rounded-lg">
            <h1 className=' font-bold'>MouseMove Event</h1>
            <h1>'event-clientX' ={position['event-clientX']}</h1>
            <h1>'event-clientY' ={position['event-clientY']}</h1>
            <p>Move your mouse and click over this area.</p>
        </div>
    );

}

export default MouseMove;

