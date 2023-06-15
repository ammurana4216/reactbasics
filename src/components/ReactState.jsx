
import React, { useState } from 'react';
import StudentRow from './StudentRow';

function ReactState(props){
    const initialStudentsList = [
       {id: 1, name: "Raveena", fees: 35000, course:"Mern"},
       {id: 2, name: "Saloni", fees: 15000, course:"Python"},
       {id: 3, name: "Rahul", fees : 10000, course:"Php"},
       {id: 4, name: "Ambeshwar", fees: 35000, course:"Mern"},
       {id: 5, name: "Charran", fees: 15000, course:"Mongo"}
    ]

   const [title, setTitle] = useState("React State");
   const [studentData, setStudentData] = useState(initialStudentsList);

 //  const updateStudent=()=>{
  //     setStudentData([
    //       {id:6, name:"Ravi", fees:11000, course:"Full Stack"}
      // ])
  
  
   const updateStudent=()=>{
       setStudentData((prev)=>{
return[
   ...prev,
   {id:6,name:"Rahul", fees:34000,course:"digital marketing"}
]
       })
   }

     const deleteStudent=(id)=>{
      const filteredArray = studentData.filter((item)=>{
            return  item.id !== id
        })
      setStudentData(filteredArray);
     }
       return(
       <div>
<h1> This is title</h1>
<table>
   <thead>
       <tr>
           <td>id</td>
           <td>name</td>
           <td>fees</td>
           <td>course</td>
       </tr>
   </thead>
   <tbody>
       {
           studentData.map((item, index)=>{
               return (
                  <StudentRow key={item.id} item={item} deleteStudent={deleteStudent}/>
               )
           })
       }
      
   </tbody>
</table>
<button onClick={updateStudent}>Update</button>
       </div>
   )
}


export default ReactState;