import React from 'react';
import '../css/StyleNotes.css';

export default function Notes(props) {
  const deleteNote=()=>{
     props.deleteItem(props.id);
  };

    return (
        <div className='notebook'>
           <h1>{props.title}</h1>
           <p>{props.content}</p>
            <div>
           <button onClick={deleteNote}> <i className='fa fa-trash'/></button>
            </div>
        </div>
    )
}
