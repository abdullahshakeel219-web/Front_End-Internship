import { getCoordinates,getTemperature } from "./utils.js";
   let btn=document.getElementById("btn");
let result=document.getElementById("result");


btn.addEventListener("click",async()=>{
 
let input=document.getElementById("inputText").value;
    try {
        let obj=await getCoordinates(input);
        console.log(obj);
        let ans=await getTemperature(obj.latitude,obj.longitude);
       
        if(ans<15){
            result.textContent=ans+"°C Wear Jacket";
        }
        else if(ans>=15 && ans<28){
            result.textContent=ans+"°C Wear Normal Clothes";
        }
        else if(ans>=28){
            result.textContent=ans+"°C Wear Ligth Clothes";
        }
        
    } catch (error) {
        console.log(error);
        result.textContent="There is some issue,try after sometime";
    }
})