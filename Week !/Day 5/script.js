function toggleMenu(){
  let menu=document.getElementById("navlinks");
  if(menu.style.display==="none" || menu.style.display===""){
    menu.style.display="flex";
  }
  else{
    menu.style.display="none" ;
  }
}
function send(){
    let name=document.getElementById("name").value;
    let mail=document.getElementById("mail").value;
    // let message=document.getElementById("message");
    let phone=document.getElementById("phone").value;
    const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(name===""){
        alert("Enter Name");
        return;
    }
    if(!isNaN(name)){
        alert("Enter Correct Name");
        return;
    }
    if(name.length<3){
        alert("Name Length should greater than eqaul to 3 characters");
        return;
    }
    if(!emailPattern.test(mail)){
        alert("Enter correct email");
        return;
    }
    if(phone.length<11){
        alert("Enter valid phone number");
        return;
    }
    alert("Message Sended");
}