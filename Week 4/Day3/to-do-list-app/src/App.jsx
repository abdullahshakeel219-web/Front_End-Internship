import { useState } from "react";

const App=()=>{
  const [tasks, settasks] = useState([]);
  const[newTask,setNewTask]=useState("");
   const handleTask=()=>{
    if(newTask.trim()===""){
      return;
    }
    const newTasksObj={
      ID:Date.now(),
      Text:newTask.trim()
    };
    settasks([...tasks,newTasksObj]);
    setNewTask("");
  }
  const handleDelete=(id)=>{
    settasks(tasks.filter((task)=>task.ID!==id));
  }
 return (
  <div className="card">
    <h2>TO-DO List APP</h2>
    <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder="Add New Task"/>
    <button className="btnAdd"onClick={handleTask}>Add</button>
    <h3>List Of Tasks</h3>
    <div className="taskList">
      
      <ul>
       
          {tasks.map((task)=>(
             <li key={task.ID}>
           {task.Text}
          
          <button className="btnDel" onClick={()=>handleDelete(task.ID)}>&times;</button>
        </li>
        ))}
      </ul>
    </div>
  </div>
 );
}
export default App;