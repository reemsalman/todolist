import './App.css'
import { useState } from 'react'
import Mod from './mod'
function Bod(){
  const[errorMessage,seterrorMessage]=useState (null)
  const [showmodal,setshowmodal]=useState(false)
  const [Loaninp,setLoaninp]=useState({
    personname:'',
    phonenumber:'',
    age:'',
    isemployy:false,
    salry:''
  })
  
  function handlesub(event){
    const {age}=Loaninp
    event.preventDefault();
    if(age<0 || age>100){
      seterrorMessage("the age not allowed")
      
    }
    setshowmodal(true)
    
  
  
  }
 
  
 
    const btndisablee = Loaninp.personname ==''||
    Loaninp.phonenumber ==''||
    Loaninp.age=='';
    let btnclass='';
   
function hands(){
 if(showmodal)
 {
  setshowmodal(false)
 }

}
 
    return(
    <div onClick={hands} className='di' style={{display:"flex",flexDirection:'column',justifyContent:'center',textAlign:"center",alignItems:'center'}}>
    <form style={{display:'flex',flexDirection:'column',width:'50%',justifyContent:'center',color:'white',backgroundColor:'rgb(27, 22, 100)',alignItems:'center',borderRadius:'7px'}}> 
       <h1>requesting aloan</h1>
       <hr></hr>
       
        <label>name</label>
        <input value={Loaninp.personname}
        onChange={(event)=>{setLoaninp({...Loaninp, personname:event.target.value})} } />
        <label>phone number</label>
        <input  value={Loaninp.phonenumber}
         onChange={(event)=>{setLoaninp({...Loaninp, phonenumber:event.target.value})} } />
        <label>age</label>
        <input value={Loaninp.age}  onChange={(event)=>{setLoaninp({...Loaninp, age:event.target.value})} }/>
        <label>are you an employee</label>
        <input checked={Loaninp.isemployy} type='checkbox'onChange={(event)=>{setLoaninp({...Loaninp, isemployy:event.target.checked})} }/>
        <label>salary</label>
        <select value={Loaninp.salry}  onChange={(event)=>{setLoaninp({...Loaninp, salry:event.target.value})} }>
          <option>less than 500$</option>
          <option>between 500$-600$</option>
          <option>more than 600$</option>
        </select>
        
        
        <button disabled={btndisablee ? "disabled" : ""} className={btnclass} type="submit" onClick={handlesub}> log </button>


    </form>
   <Mod isVisible={showmodal} errorMessage={errorMessage} />
    
  </div>
    )
}
export default Bod