import { useState } from "react";
import style from './style.module.css';

const Counter=()=>{
    const [count,setCount]=useState(0);
    return (
    <div className={style.card}>
        <h3>count : {count}</h3>
        <button onClick={()=>setCount(count+1)}>+1</button>
        <button onClick={()=>setCount(count-1)}>-1</button>
    </div>
    );
}
export default Counter;