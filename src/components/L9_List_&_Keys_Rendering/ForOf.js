import React from 'react'

const fruits = ['apple', 'banana', 'orange'];
function ForOf() {

    const listItems = [];

    for (const fruit of fruits) {
        listItems.push(<li key={fruit}>{fruit}</li>);
    }
    return (
        <>

            <div className=' bg-lime-600 border-4 rounded-md m-4 p-4 flex' >
                {/* <h1 className=' bg-fuchsia-500 border-2'>For Of loop</h1> */}
                <div className='gap-2  border-2 w-1/2'>
                    <button className=" border-2 border-black m-1 p-1 bg-red-700 w-1/6">For</button>
                    <button className=" border-2 border-black m-1 p-1 bg-red-700 w-1/6">For Of Loop</button>
                    <button className=" border-2 border-black m-1 p-1 bg-red-700 w-1/6">For In Loop</button>
                </div>
                <ul className=' w-1/2'>
                    {listItems}
                </ul>

                <div>
                    <select className=' text-black'>
                        <option value="forEach">ForEach</option>
                        <option value="forOf">ForOf</option>
                        <option value="forIn">forIn</option>
                        <option value="map">map</option>
                    </select>
                </div>
            </div>



        </>
    )
}

export default ForOf