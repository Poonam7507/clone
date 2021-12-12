import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Createnote from './components/Createnote';
import Notes from './components/Notes';

const App=()=>{
  const[addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
    //  alert("clicked");
   setAddItem((prevData) => {
     return[...prevData,note];
   });
  };
  const onDelete=(id) =>{
    setAddItem((olddata)=>
      olddata.filter((currdata,indx)=>{
            return indx!=id;
      })
    );
  };
  return (
    <>
    <Navbar/>
    <Createnote passNote={addNote}/>
    
 { addItem.map((val,index)=>{
    return <Notes
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    deleteItem={onDelete}
    />
  })}
         </>
  );
}

export default App;
