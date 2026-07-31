import { getSummary } from "./utils.js";

let dd=document.getElementById("event-select");
let btn=document.getElementById("btn");
let resultbox=document.getElementById("summary");

btn.addEventListener("click",async()=>{
    const selectedValue=dd.value;
    try {
        const dt=await getSummary(selectedValue);
        resultbox.textContent=dt;
    } catch (error) {
        resultbox.textContent='Try Again,After Some Time',error;
    }
})