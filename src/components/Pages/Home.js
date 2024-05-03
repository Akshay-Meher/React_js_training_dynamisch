import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>go to <Link to='/products'>list of Products</Link></p>
        </div>
    )
}

export default Home;