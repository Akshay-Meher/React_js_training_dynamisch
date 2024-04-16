import React, { useEffect, useState } from 'react'
let count = 0;
function TitleChange() {
    const [isTrue, setIsTrue] = useState(false);
    useEffect(() => {
        let Id = setInterval(() => {
            if (isTrue) {
                document.title = "Reasctr";
            } else {
                document.title = "Akshay";
            }
            console.log("count", ++count);
            setIsTrue(prev => !prev);
        }, 5000);

        return () => clearInterval(Id);
    }, [isTrue]);

    return (
        <h1>{JSON.stringify(isTrue)}</h1>
    )
}

export default TitleChange