import { createContext } from "react";
 import Form from "./components/Form";
 import Header from "./components/Header";
import ReactProps from "./components/ReactProps";
 import ReactState from "./components/ReactState";
export const SiteContext=createContext();
function App()
{










//let title ="React Course";
  //let bgClass="bg-danger";
//   let size=24;
// let isHeading =true;

  return(
    <>
  {/* <ReactProps/> */}
  {/* <ReactState/> */}






  <SiteContext.Provider value="Hello World">
  {/* <Form/> */}
  {/* <ReactState/> */}
  <ReactProps/>
  </SiteContext.Provider>
   </>
  )
}
export default App;

