import Header from "./components/Header";
import ReactState from "./components/ReactState";
<<<<<<< HEAD
import ReactProps from "./components/ReactProps";
import Card from "./components/Card";
import Form from "./components/Form";
function App(){
  //let title = "React Course";
  //let bgClass = "bg-danger";
  // let isHeading = true;
  // let size = 24;
  return(
    <>
    {/* /* <div className={isHeading ? "bg-danger":""}>
      Hello React World
      <p style={{color:"yellow", fontSize:size+""}}>{1+1}</p>
       */ }
     
      {/* <ReactState /> */}
      
     <Form/>
      
    
=======

// import { func1 } from './components/abc';

function App(){
  let title = "React Course";
  let bgClass = "bg-danger";

  let isHeading = true;
  let size = 24;
  return(
    <>
    <div className={isHeading ? "bg-danger":""}>
   <ReactState />
    </div>
>>>>>>> cf2abeb473fef2b3e836d60ffa4b966ab812f91c
    </>
  )
}
export default App;