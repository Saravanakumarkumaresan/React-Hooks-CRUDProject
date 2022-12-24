import { useState } from "react";

export const Adduserform=(props)=>{
    const initialform={id:null,name:"",username:""};

    const [user,setUser]=useState(initialform);

    const handleInputChange=(event)=>{
        const {name,value}=event.target

        setUser({...user,[name]:value})

    }
   
    return(
        <form onSubmit={
            event=>{
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.addusers(user);
                setUser(initialform);
            }
        }>
         <label>Name</label>
         <input type="text" onChange={handleInputChange} name="name" value={user.name} />
         <label>UserName</label>
         <input type="text" onChange={handleInputChange} name="username" value={user.username} />
         <button>Add New Users</button>
        </form>
    )
}