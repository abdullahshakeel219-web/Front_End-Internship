const toggleMenu=()=>{
let menu=document.getElementById("navlinks");
menu.classList.toggle("active");
};

const send=()=>{
const name=document.getElementById("name").value;
const mail=document.getElementById("mail").value;
const phone=document.getElementById("phone").value;
const emailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
};