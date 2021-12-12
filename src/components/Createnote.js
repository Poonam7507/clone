import React from 'react';
import '../css/Stylecreatenote.css';
import { useState } from 'react';

export default function Createnote(props) {
    
const [expand,setExpand]=useState(false);
    const [note,setnote]=useState({
        title:'',
         content:'',
    });

    const InputEvent=(event)=>{
         const {name,value}=event.target;
        setnote((prevdata)=>{
           return{
               
               ...prevdata,
               [name]:value,
           };
        });
        console.log(note);
    };
    const addEvent=()=>{
        props.passNote(note);
        setnote({
            title:'',
         content:'',
        });
    }
    const expandIt=()=>{
        setExpand(true);
    }
    const shrinkIt=()=>{
        setExpand(false);
    }
    return (
        <div className="maincontent" >
            <form>
            <div className='formdata' onDoubleClick={shrinkIt}>
            <div>
          {  expand?
                <input 
                type="text" 
                value={note.title} 
                name="title"
                onChange={InputEvent} 
                placeholder="Title" 
                autoComplete='off' 
                onDoubleClick={shrinkIt}

                /> :null}
            </div>
            <div>

                <textarea rows="" column="" 
                value={note.content}
                name="content"
                onChange={InputEvent}
                placeholder="Take a note..." 

                onClick={expandIt} 
                />
            </div>
            <div>
               {expand? <div onClick={addEvent}>close</div>:null}

            </div>
            </div>
            </form>
        </div>
    )
}
