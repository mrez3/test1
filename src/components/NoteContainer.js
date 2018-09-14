import React from 'react';


const NoteItem = (props) => {
    return(
        <div className="note-item">
                <h3>{props.title}</h3>
                <p>{props.children}</p>
        </div>
    );
}

const NoteContainer = (props) =>
{
    return(
        <div className="note-container">
            <NoteItem title="Note 1">
                notes can hold info
            </NoteItem>
            <NoteItem title="Note 2">
                notes can hold info
            </NoteItem>
            <NoteItem title="Note 3">
                notes can hold info
            </NoteItem>
        </div>
    );
}

export default NoteContainer;