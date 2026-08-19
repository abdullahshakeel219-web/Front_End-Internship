import { useState,useEffect } from "react";
import Todolist from './Components/to-do-list.jsx';
import './index.css';

const App=()=>{
  const [tasks,setTasks]=useState(()=>{
    const saved=localStorage.getItem('tasks');
    return saved ? JSON.parse(saved):[];
  })
 useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks));
 },[tasks])
 const [newTask,setNewTask]=useState("");

 const handleTask=()=>{
  if(newTask.trim()===""){
    return ;
  }
  const objTask={
    id:Date.now(),
    text:newTask.trim(),
    completed:false
  };
  setTasks([...tasks,objTask]);
  setNewTask("");
 }
 const handleDelete=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id));
 }
 const handleToggle=(id)=>{
  setTasks(tasks.map((task)=>task.id===id?{...task,completed:!task.completed}:task));
 }
 return (
   <div className="card">
    <h2>TO-DO List APP</h2>
    <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder="Add New Task"/>
    <button className="btnAdd"onClick={handleTask}>Add</button>
    <h3>List Of Tasks</h3>
    <div className="taskList">
  <Todolist tasks={tasks} onToggle={handleToggle} onDelete={handleDelete}/>
   </div>
   </div>
 
 );
}
export default App;
