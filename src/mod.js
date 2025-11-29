
import './App.css'
function Mod({isVisible,errorMessage=null}){
    if(isVisible){
    return(<div id="modal"><div id="modalco"><h1 style={{color: errorMessage ? "red":"green"}} >
        {errorMessage != null ? errorMessage  : "the form has submitted"}</h1>
        
        </div></div>);
        }
}



export default Mod