import {  useEffect,useState } from "react"

export const Edituserform=(props)=>{
    const[user,setUser]=useState(props.currentuser)
   useEffect(()=>{
    setUser(props.currentuser)
  },[props]) 
   const handleInputChange=(event)=>{
        const {name,value}=event.target

        setUser({...user,[name]:value})

    }
    return(
        <form onSubmit={
            event=>{
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.updateuser(user.id,user);
            }
        }>
         <label>Name</label>
         <input type="text" onChange={handleInputChange} name="name" value={user.name} />
         <label>UserName</label>
         <input type="text" onChange={handleInputChange} name="username" value={user.username}/>
         <button>Update user</button>
         <button className="button muted-button" onClick={()=>{
            props.setEditing(false)
         }}>Cancel</button>
        </form>
    )
}