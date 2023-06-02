function StudentRow(props){
    const {item} = props ; 
    return(
        <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.fees}</td>
        <td>{item.course}</td>
       {/*<td><button onClick={(deleteStudent)}></button></td>*/}
    </tr>
    )
}
export default StudentRow;