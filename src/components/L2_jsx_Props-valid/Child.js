import React from 'react'
import propTypes from 'prop-types';

const style = {
    outer: {
        // backgroundColor: "#282c34",
        // minHeight: "10vh",
        margin: '10px',
        padding: '10px',
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: '2px solid black',
        borderRadius: "10px"
        // color: "white"
    },
    inner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    btn: { marginRight: "15px" }
}
const Child = ({ count, decrement, increment }) => {

    return (
        <div style={style.outer}>
            <h1>{count}</h1>
            <div style={style.inner}>
                <button
                    style={style.btn}
                    onClick={decrement}
                >Decrement </button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    )
}

Child.propTypes = {
    count: propTypes.number,
    increment: propTypes.func,
    decrement: propTypes.func,
}

Child.defaultProps = {
    count: 100
}

export default Child