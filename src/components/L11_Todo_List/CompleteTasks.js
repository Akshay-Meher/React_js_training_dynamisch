import React from 'react'

function CompleteTasks({ pendingTasks, handleRevert }) {

    const completeTaks = pendingTasks.filter(task => task.IsCompleted);

    return (
        <div className=' w-100 m-4 p-4 rounded-lg bg-fuchsia-600'>
            <h1>Completed Taks</h1>
            <ul>
                {
                    completeTaks.length
                        ?
                        completeTaks.map((tasks) => (
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
                        :
                        <div className=' text-center p-4 m-auto flex flex-col'>
                            <h1 className=' inline-block bg-red-500  m-1 p2 rounded-lg'>No Task Found</h1>
                            <img src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NDA0fGVufDB8fDB8fHww" className=' w-1/2 rounded-2xl' alt="" />
                        </div>
                }
            </ul>
        </div>
    )
}

export default CompleteTasks