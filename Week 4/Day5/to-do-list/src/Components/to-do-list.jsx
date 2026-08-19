
const Todolist=({tasks,onToggle,onDelete})=>{
    return (
    <ul>
        {tasks.map((task)=>(
            <li key={task.id}>
                <button
  onClick={()=>onToggle(task.id)}
  style={{
    width:"20px",
    height:"20px",
    borderRadius:"50%",
    border: task.completed ? "none" : "2px solid gray",
    backgroundColor: task.completed ? "green" : "white"
  }}
>
  {task.completed ? "✓" : ""}
</button>
                <span>{task.text}</span>
                <button onClick={()=>onDelete(task.id)} className="btnAdd">&times;</button>
            </li>
        ))}
    </ul>
    );
}
export default Todolist;