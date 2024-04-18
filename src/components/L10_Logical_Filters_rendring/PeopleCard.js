import React from 'react'

function PeopleCard({ people, maxSalery }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 border-black w-1/4 ">
            {
                people.salary === maxSalery && <h1 className=' bg-red-500 text-center'> Heighest Salary</h1>
            }


            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-800 text-center">
                    {people.name?.toUpperCase()}
                </div>
                <div className="grid grid-cols-2 gap-x-4 text-gray-700 ">
                    <div className="flex items-center">

                        <span>Age: {people.age}</span>
                    </div>
                    <div className="flex items-center">

                        <span>Gender: {people.gender}</span>
                    </div>
                    <div className="flex items-center">

                        <span>Education: {people.education}</span>
                    </div>
                    <div className="flex items-center">

                        <span>Salary:{people.salary}</span>
                    </div>
                    <div className="flex items-center">

                        <span>City: {people.city}</span>
                    </div>
                    <div className="flex items-center">

                        <span>Weight:{people.weight}</span>
                    </div>
                </div>
                {
                    people.age < 30
                        ? <h1 className=' bg-green-600'>Applicable For job</h1>
                        : <h1 className=' bg-red-600'> Not Applicable For job</h1>

                }
            </div>
        </div>
    )
}

export default PeopleCard
