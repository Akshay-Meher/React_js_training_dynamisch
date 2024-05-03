import React from 'react'
import Counter from './Ass1/Counter'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3';
import { useNavigate } from 'react-router-dom';



function Session1() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/about");
    }
    return (
        <div>
            <Counter />
            <Task1 />
            <Task2 />
            <Task3 />
            <div>
                <button onClick={handleClick}>Go to About</button>
            </div>
        </div>
    )
}

export default Session1