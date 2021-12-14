import React from 'react';
import '../css/Stylecreatenote.css';
import { useState } from 'react';
import Tooltip from "@material-ui/core/Tooltip";
import { FormatColorFillSharp } from '@material-ui/icons';

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

    const changeColor=()=>{
        return(
            {
                  
            }
        )
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
            {expand?
            <div className='icons'>
            <div>
            <Tooltip title="remind me" className="tooltip"><i className='fa fa-bell'/></Tooltip>
            <Tooltip title="collaborator" className="tooltip"><i className="fa fa-user-plus"/></Tooltip>
            <Tooltip title="change colour" className="tooltip "  ><input type="color" id="colorfiller" onClick={changeColor}></input></Tooltip>
            {/* <Tooltip title="change colour" className="tooltip colorfiller"  ><FormatColorFillSharp /></Tooltip> */}

            <Tooltip title="Add image" className="tooltip" ><i className="fa fa-image"/></Tooltip>
               </div>
                <div onClick={addEvent}>close</div>



            </div>:null}
            </div>
            </form>
        </div>
    )
}
