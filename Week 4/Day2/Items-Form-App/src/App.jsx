import { useState } from "react";

const App=()=>{
  const [item, setitem] = useState("");
  const handleChange=(e)=>{
    setitem(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`${item} is Added`);
    setitem("");
  }
  return (
    <div className="card">
      <h2>Add Item</h2>
      <form  className="content" onSubmit={handleSubmit}>
      <input type="text" value={item} onChange={handleChange} placeholder="e.g Buy Groceries" required/>
      <button className="btn"type="submit" >+Add</button>
      </form>
    </div>
  );
}
export default App;