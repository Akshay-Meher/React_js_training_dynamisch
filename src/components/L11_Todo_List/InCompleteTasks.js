import React from 'react'

function InCompleteTasks({ pendingTasks, handleComplete, handleUp }) {

    return (
        <div className=' w-100 m-4 p-4 rounded-lg bg-red-500'>
            <h1>Incomplete Taks</h1>
            <ul>
                {
                    pendingTasks.map((tasks) => (
                        !tasks.IsCompleted
                        &&
                        <div
                            className=' bg-yellow-200 m-2  p-2 border-2 rounded-lg flex justify-evenly text-center align-middle w-100 text-black'
                            key={tasks.id}
                        >
                            <div className=' text-center align-middle w-1/2 p-2 m-2'>
                                <li>{tasks.taskName}</li>
                            </div>
                            <div className=' flex text-center'>

                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                        className="w-6 h-6 m-2 bg-fuchsia-600 rounded-md"
                                        onClick={() => handleUp(tasks.id)}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                        className="w-6 h-6 m-2 bg-fuchsia-600 rounded-md">
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
                }
            </ul>
        </div>
    )
}

export default InCompleteTasks