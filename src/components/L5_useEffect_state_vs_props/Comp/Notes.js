import React from 'react'
import Note from './Note'

function Notes({ notes = [], setNotes = () => { } }) {
    return (
        <div
            style={{
                position: "absolute",
                left: '0',
                top: '0',
                border: '1px solid black',
                userSelect: 'none',
                padding: '10px',
                width: '200px',
                cursor: "move",
                backgroundColor: "#FFAF45",


            }}
        >
            {
                notes.map((note) => {
                    return <Note key={note.id} content={note.text} />
                })
            }
        </div>
    )
}

export default Notes