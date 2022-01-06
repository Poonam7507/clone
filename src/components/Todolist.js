// import React ,{useState} from 'react';


// export default function Todolist(props) {
//     // const [expand,setExpand]=useState(false);
//         const [note,setnote]=useState({
//             // title:'',
//              content:'',
//         });
//         const InputEvent=(event)=>{
//             const {name,value}=event.target;
//            setnote((prevdata)=>{
//               return{
                  
//                   ...prevdata,
//                   [name]:value,
//               };
//            });
//            console.log(note);
//        };
//        const addEvent=()=>{
//            props.passNote(note);
//            setnote({
//             //    title:'',
//             content:'',
//            });
//        }
//     return (
        
//           <>  
//           <div>
//  <div class="list">
// <input type="text" placeholder="Add your task" id="textarea"
//      value={note.content} 
//                 name="title"
//                 onChange={InputEvent} 
//                 autoComplete='off' 

// />
// <input type="text" id="savetextarea"/>
// <button class="addbtn" onclick={addEvent}><i class="fa fa-plus" ></i></button>
// {/* <button class="savebtn" onclick={addEvent} >Save</button> */}
// </div>
// {/* <ul class="listitem">

// </ul> */}


  

// {/* const inputbox=document.querySelector(".list input");
// const addbtn=document.querySelector(".list button");
// const clearbtn=document.querySelector(".clearlist button");
// const todolist=document.querySelector(".listitem");

//    showTask();
   
// addbtn.onclick=()=>{
//     let userData=inputbox.value;
//     if(userData.trim()!=0){
//     let getLocalStorage=localStorage.getItem("New Todo");
//     if(getLocalStorage==null){
//         listArr=[];

//     }
//     else{
//         listArr=JSON.parse(getLocalStorage);
//     }
//     listArr.unshift(userData);
//    localStorage.setItem("New Todo",JSON.stringify(listArr));
// }
//    showTask();

// }
   
// function showTask(){
//    let getLocalStorage=localStorage.getItem("New Todo");
//    if(getLocalStorage==null){
//        listArr=[];

//    }
//    else{
//        listArr=JSON.parse(getLocalStorage);
//    }

//    let newLiTag='';
//    listArr.forEach((element,index )=> {
//        newLiTag+=   `<li ondblclick="complete()" >${element}<span onclick="deleteTask(${index})"><i class="fa fa-trash"></i></span><button class="completebtn" onclick="deleteTask(${index})"  >Completed</button> </li>`
       
//    });
//    todolist.innerHTML=newLiTag;
//    inputbox.value="";
// }
// function deleteTask(index){
//    let getLocalStorage=localStorage.getItem("New Todo");
//    listArr=JSON.parse(getLocalStorage);
//    listArr.splice(index,1);
//    localStorage.setItem("New Todo",JSON.stringify(listArr));
//    showTask();
// }
// let textarea=document.getElementById("textarea");


// clearbtn.onclick=()=>{
//     listArr=[];
//     localStorage.setItem("New Todo",JSON.stringify(listArr));
//     showTask();
// } */}


//         </div>
//         </>
//     )
// }
