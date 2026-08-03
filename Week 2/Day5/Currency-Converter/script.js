import { apiFetcher } from "./api.js";
import { formatConversion } from "./utils.js";

let btn=document.getElementById("btn");
let result=document.getElementById("result");


btn.addEventListener("click",async()=>{
    let selectedValue=document.getElementById("currency").value;
    let amount=document.getElementById("amount").value;
    try {
        let getExchange=await apiFetcher();
        let rt=getExchange[selectedValue];
        let getFormatConversion=formatConversion(selectedValue,amount,rt);
        result.textContent=getFormatConversion;
    } catch (error) {
        result.textContent="There Is Some Issue,Try Again After Sometime";
    }
})