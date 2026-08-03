import './App.css';

function App(){
  const myName="Muhammad Abdullah Shakeel";
  const myCity="Rawalpindi";
  const learningDays=5;
  //const pic = "/blue.jpg";
  return(
    <>
   
    <h1 className='head'>Hi,my name is {myName}</h1>
    <h1 className='head'>I live in {myCity}</h1>
    <p className='about'>I started learning from {learningDays} Days</p>
    <p className='about'>{learningDays>10?"Good Consistency":"You Just Started"}</p>
    {/* <img src={pic} alt="" width="30%" height="30%" /> */}
    
    </>
  );
}
export default App;