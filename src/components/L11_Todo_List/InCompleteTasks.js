import React from 'react'

function InCompleteTasks({ pendingTasks, handleComplete, handleUp }) {

    const tasksPending = pendingTasks.filter(task => !task.IsCompleted);

    return (
        <div className=' w-100 m-4 p-4 rounded-lg bg-red-500'>
            <h1>Incomplete Taks</h1>
            <ul>
                {
                    tasksPending.length ?
                        tasksPending.map((tasks, index) => (

                            <div
                                className=' bg-yellow-200 m-2  p-2 border-2 rounded-lg flex justify-evenly text-center align-middle w-100 text-black text-center'
                                key={tasks.id}
                            >
                                <span
                                    className=' bg-fuchsia-600 p-2 h-10 rounded-full'
                                >
                                    {index + 1}
                                </span>
                                <div className=' text-center align-middle w-1/2 p-2 m-2'>
                                    <li>{tasks.taskName}</li>
                                </div>
                                <div className=' flex text-center'>

                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                            className="w-6 h-6 m-2 bg-fuchsia-600 rounded-md"
                                            onClick={() => handleUp(tasks.id, 'up')}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                                        </svg>

                                        <svg
                                            onClick={() => handleUp(tasks.id, 'down')}
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                            className="w-6 h-6 m-2 bg-fuchsia-600 rounded-md"

                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                                        </svg>

                                    </div>

                                    <div>
                                        <button
                                            onClick={() => handleComplete(tasks.id)}
                                            className='bg-red-500  m-1  p-1 border-2 rounded-md'
                                        >
                                            Complete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))

                        :
                        <div className=' text-center p-4'>
                            <h1 className=' bg-fuchsia-600 m-1 p2 rounded-lg'>No Task Found</h1>
                            <img src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NDA0fGVufDB8fDB8fHww" className=' w-1/2 rounded-2xl' alt="" />
                        </div>

                }
            </ul>
        </div>
    )
}

export default InCompleteTasks