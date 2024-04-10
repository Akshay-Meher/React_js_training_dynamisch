import React, { useState } from 'react'
import Notes from './Comp/Notes'

function DragAndDrop() {
    const [notes, setNotes] = useState([
        {
            id: 1,
            text: "",
        },
        {
            id: 2,
            text: "Like this Video and Subscribe to Roadside Coder",
        },
    ])
    return (
        <div>
            <Notes notes={notes} setNotes={setNotes} />
        </div>
    )
}

export default DragAndDrop