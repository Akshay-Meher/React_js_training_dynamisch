import React, { useState, useEffect } from 'react';

const LocalStorageTodo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        return () => {
            localStorage.clear();
            // alert("End");
        }
    }, [todos]);

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const removeTodo = indexToRemove => {
        const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
        setTodos(updatedTodos);
    };

    return (
        <div style={{
            marginTop: '40px',
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid black",
            backgroundColor: "#F7E987",
            width: "70vw",
            borderRadius: "20px"
        }}>
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button onClick={addTodo}>Add</button>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => removeTodo(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LocalStorageTodo;
