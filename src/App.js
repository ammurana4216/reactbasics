import Header from "./components/Header";
import ReactState from "./components/ReactState";
function App(){
  //let title = "React Course";
  //let bgClass = "bg-danger";
  let isHeading = true;
  let size = 24;
  return(
    <>
    <div className={isHeading ? "bg-danger":""}>
      Hello React World
      <p style={{color:"yellow", fontSize:size+""}}>{1+1}</p>
      <Header />
      <ReactState/>
      helo
    </div>
    </>
  )
}
export default App;