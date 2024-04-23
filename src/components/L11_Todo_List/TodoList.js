import React, { useState } from 'react'
import InCompleteTasks from './InCompleteTasks'
import CompleteTasks from './CompleteTasks';


const initailTasks = [
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
            setPendingTasks(prev => {
                let copyPrev = [
                    ...prev,
                    {
                        id: new Date().getTime(),
                        taskName: input,
                        IsCompleted: false
                    }
                ]

                copyPrev.sort((a, b) => {
                    if (a.IsCompleted === b.IsCompleted) {
                        return 0;
                    } else if (a.IsCompleted) {
                        return 1; // 'true' comes after 'false'
                    } else {
                        return -1; // 'false' comes before 'true'
                    }
                });

                return copyPrev;
            });
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
                { ...selected, IsCompleted: true },
                ...prev.slice(index + 1),
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
                { ...selected, IsCompleted: false },
                ...prev.slice(index + 1),
            ];
            // console.log(arr);
            return arr;
        })

    }


    function handleUp(tId, move) {
        // console.log("tId", tId);
        let [selected, ...rest] = pendingTasks.filter((task) => task.id === tId);
        // console.log('res', selected);

        let index = pendingTasks.indexOf(selected);
        // console.log("indexOf", index);

        if (move === 'up') {
            setPendingTasks((prev) => {
                let copyPrev = [...prev];
                if (index) {
                    const temp = copyPrev[index - 1];
                    copyPrev[index - 1] = copyPrev[index];
                    copyPrev[index] = temp;
                }
                return copyPrev;
            })
        }
        else if (move === 'down') {
            setPendingTasks((prev) => {
                let copyPrev = [...prev];
                if (index + 1 < copyPrev.length) {
                    const temp = copyPrev[index + 1];
                    copyPrev[index + 1] = copyPrev[index];
                    copyPrev[index] = temp;
                }
                return copyPrev;
            })
        }


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