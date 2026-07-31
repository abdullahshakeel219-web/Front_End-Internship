const getActivity=async ()=>{
     let result=document.getElementById("result");
    try{
    const response=await fetch("https://catfact.ninja/fact");
    const data=await response.json();
    result.textContent=data.fact;
    }
    catch(error){
     result.textContent="Try Again";   
    }
}
