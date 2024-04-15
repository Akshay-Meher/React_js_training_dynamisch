// App.js

import React, { useState, useEffect } from "react";

function ResizeEvent() {
    const [bgColor, setBgColor] = useState("green");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setBgColor("green");
            } else {
                setBgColor("red");
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <div style={{ height: "200px", backgroundColor: bgColor }}
            className=" m-9 p-10 text-center text-black rounded-lg"
        >
            <h1 className=" text-4xl">resize Event of Window</h1>
            <h2>Dynamic Background Color</h2>
            <p>The background color changes based on window width.</p>
        </div>
    );
}

export default ResizeEvent;
