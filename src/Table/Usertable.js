export const Usertable=(props)=>{
    return(
        <table>
            <thead>
             <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Actions</th>
             </tr>
            </thead>
            <tbody>
                
                {props.users.length>0?(
                    props.users.map((user)=>(
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button onClick={()=>props.editrow(user)}className="button muted-buton">Edit</button>
                        <button onClick={()=>props.deleteuser(user.id)} className="button muted-buton">Delete</button>
                    </td>
                </tr>
                     
                    ))
                  
                ):(
                    <tr>
                        <td colSpan={3}>
                            No users!
                        </td>
                    </tr>
                    
                )}
                
            </tbody>

        </table>
    )
}