import React, { useState } from 'react';
import Child from './Child';
import { Link, Outlet, useLo } from 'react-router-dom';
import { Button } from '@mui/material';


const Parent = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>

            <button>
                <Link to='/day2/d2'>
                    Go to Taks2
                </Link>
            </button>
            <Child
                count={count}
                increment={increment}
                decrement={decrement}
            />
            {/* <Outlet /> */}
        </div>
    )
}



export default Parent