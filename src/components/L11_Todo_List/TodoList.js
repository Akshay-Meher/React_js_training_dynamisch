import React, { useState } from 'react'
import InCompleteTasks from './InCompleteTasks'
import CompleteTasks from './CompleteTasks';


const initailTasks = [
    // { "id": "task1", "taskName": "Complete homework", "IsCompleted": true },
    // { "id": "task2", "taskName": "Do laundry", "IsCompleted": false },
    // { "id": "task3", "taskName": "Buy groceries", "IsCompleted": true },
    // { "id": "task4", "taskName": "Call mom", "IsCompleted": false },
    // { "id": "task5", "taskName": "Go for a run", "IsCompleted": true },
    { "id": "task6", "taskName": "Read a book", "IsCompleted": false },
    { "id": "task7", "taskName": "Cook dinner", "IsCompleted": true },
    { "id": "task8", "taskName": "Write report", "IsCompleted": false },
    { "id": "task9", "taskName": "Attend meeting", "IsCompleted": true },
    { "id": "task10", "taskName": "Pay bills", "IsCompleted": false }
]


function TodoList() {

    const [pendingTasks, setPendingTasks] = useState(initailTasks)
    const [input, setInput] = useState('');

    function handleInput(e) {
        let val = e.target.value
        // console.log(val);
        setInput(val);
    }

    // console.log(input);
    function AddTask() {
        if (input.trim()) {
            setPendingTasks(prev => ([
                ...prev,
                {
                    id: new Date().getTime(),
                    taskName: input,
                    IsCompleted: false
                }
            ]));
        }
        setInput('');
    }


    function handleComplete(tId) {
        // console.log("tId", tId);
        let [selected, ...rest] = pendingTasks.filter((task) => task.id === tId);
        // console.log('res', selected);

        let index = pendingTasks.indexOf(selected);
        // console.log("indexOf", index);

        setPendingTasks(prev => {
            let arr = [
                ...prev.slice(0, index),
                ...prev.slice(index + 1),
                { ...selected, IsCompleted: true },
            ];
            // console.log(arr);
            return arr;
        })

    }


    function handleRevert(tId) {
        // console.log("tId", tId);
        let [selected, ...rest] = pendingTasks.filter((task) => task.id === tId);
        // console.log('res', selected);

        let index = pendingTasks.indexOf(selected);
        // console.log("indexOf", index);

        setPendingTasks(prev => {
            let arr = [
                ...prev.slice(0, index),
                ...prev.slice(index + 1),
                { ...selected, IsCompleted: false },
            ];
            // console.log(arr);
            return arr;
        })

    }


    function handleUp(tId) {
        console.log("tId", tId);
        let [selected, ...rest] = pendingTasks.filter((task) => task.id === tId);
        console.log('res', selected);

        let index = pendingTasks.indexOf(selected);
        console.log("indexOf", index);

    }

    // console.log(pendingTasks);
    return (
        <div className=' bg-emerald-300  border-black rounded-md m-4 p-20'>
            <div className=' w-100 bg-orange-400  pl-20 rounded-lg m-4 p-4'>
                <div className=' ml-100'>
                    <input
                        value={input}
                        onChange={handleInput}
                        type="text"
                        placeholder='Add task...'
                        className=' w-100 border-black rounded-lg h-10 p-2 text-black'
                    />
                    <button
                        onClick={AddTask}
                        className=' border-2 border-black m-4 p-1   bg-red-500 rounded-md'
                    >
                        Add Task
                    </button>
                </div>
            </div>

            <div className=' w-100 bg-orange-400 m-4 p-4 rounded-lg flex'>
                <div>
                    <InCompleteTasks
                        pendingTasks={pendingTasks}
                        handleComplete={handleComplete}
                        handleUp={handleUp}
                    />
                </div>
                <div>
                    <CompleteTasks
                        pendingTasks={pendingTasks}
                        handleRevert={handleRevert}
                    />
                </div>
            </div>

        </div>
    )
}

export default TodoList