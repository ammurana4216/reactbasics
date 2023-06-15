import { useContext } from "react";
// import Card from "./Card";
import { SiteContext } from "../App";

function ReactProps(props){
//context Api
const val=useContext(SiteContext)
return(
    <div>
   <p>hello{val}</p>
        {/* <h1>Props</h1>
        <Card  title="Card 1" count={1}/>
        <Card  title="Card 2" count={2}/>
        <Card  title="Card 3" count={3}/>
   


   <Card title="Card 4" isApp={true}>
    <h1>this is heading{val}</h1>
    <p>This is paragraph</p>
   </Card>
 */}

    </div>
)


}
export default ReactProps;