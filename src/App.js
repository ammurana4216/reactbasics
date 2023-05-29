import Header from "./components/Header";
function App()
{
  //let title ="React Course";
  //let bgClass = "bg-danger";
  let size= 24 ;
    let isHeading = false;

 return(
  <>
  <div className={ isHeading ? "bg-danger":"" } >Hello World

  <p style={{color:"yellow",fontSize:size}}>{8+1}</p><Header/>
  
    </div></>
 )
}

export default App;
