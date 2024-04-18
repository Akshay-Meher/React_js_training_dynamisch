import React from 'react'

function CompleteTasks({ pendingTasks, handleRevert }) {
    return (
        <div className=' w-100 m-4 p-4 rounded-lg bg-fuchsia-600'>
            <h1>Completed Taks</h1>
            <ul>
                {
                    pendingTasks.map((tasks) => (
                        tasks.IsCompleted
                        &&
                        <div
                            className=' bg-yellow-200 m-2  p-2 border-2 rounded-lg flex justify-evenly text-center align-middle w-100 text-black'
                            key={tasks.id}
                        >
                            <div className=' text-center align-middle w-1/2'>
                                <li key={tasks.id}>{tasks.taskName}</li>
                            </div>

                            <div>
                                <button
                                    onClick={() => handleRevert(tasks.id)}
                                    className=' bg-fuchsia-600 m-1  p-1 border-2 rounded-md'
                                >
                                    Revert
                                </button>
                            </div>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default CompleteTasks