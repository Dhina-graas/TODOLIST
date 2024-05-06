import React,{useState} from "react";
import './TodoPage.css';



const TodoPage =()=>{

   const[task,setTasks]=useState([]);
   const[newTask,setNewTask]=useState("");

   function handleInputChange(event){
       setNewTask(event.target.value);
   }

   function addTask(){
    if(newTask.trim()!==""){
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
   }

   function deleteTask(index){
    const updatedTask=task.filter((element,i) => i !== index);
    setTasks(updatedTask);
   }
   
   function moveTaskUp(index){
    if(index>0){
      const updatedTask =[...task];
      [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]
      setTasks(updatedTask);

    }
   }

   function moveTaskDown(index){

    if(index<task.length-1){
      const updatedTask =[...task];
      [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]]
      setTasks(updatedTask);

    }

   }

  return(
      <div className="to-do-list">
        <h1>TO DO LIST</h1>

        <div>
          <input type="text" 
          placeholder="Enter a task.." 
          value={newTask}
          onChange={handleInputChange} />
          <button className="add-button"
            onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {task.map((task,index)=>
          
          <ul key ={index}>
            <span className="text">{task}</span>
           
            <button 
            className="delete-button"
            onClick={()=>deleteTask(index)}>
            Delete              
            </button>
            
            <button 
            className="move-button"
            onClick={()=>moveTaskUp(index)}>
                   ⬆️    
            </button>
            
            <button 
            className="move-button"
            onClick={()=>moveTaskDown(index)}>
            ⬇️          
            </button>
          </ul>
        )}
        </ol>
      </div>

    );
}


export default TodoPage;
