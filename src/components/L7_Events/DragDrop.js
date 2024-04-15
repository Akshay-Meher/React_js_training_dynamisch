import React from 'react'

function DragDrop() {
    return (
        <div className=" m-9 p-10 bg-lime-400 text-center text-black rounded-lg flex">
            <div className=' bg-red-300 w-1/3 h-100 mr-9'>
                <div className=' border-2' draggable>1</div>
                <div className=' border-2' draggable>2</div>
                <div className=' border-2' draggable>3</div>
                <div className=' border-2' draggable>4</div>
            </div>
            <div className=' border-2 h-100 bg-orange-500 w-1/3'>

            </div>
        </div>
    )
}

export default DragDrop