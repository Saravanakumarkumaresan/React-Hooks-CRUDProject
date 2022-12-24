import { useState } from "react";
import { Adduserform } from "./Forms/Adduserform";
import { Usertable } from "./Table/Usertable";
import { Edituserform } from "./Forms/Edituserform";

function App() {
  const usersdata=[
    {id:1,name:"Kathir",username:"kathir55"},
    {id:2,name:"Karthi",username:"karthi12"},
    {id:3,name:"Mani",username:"Mani45"}
];

const addusers=(user)=>{
  user.id=users.length+1;
  setUsers([...users,user])
}

const deleteuser=(id)=>{
  setUsers(users.filter((user)=>user.id!==id))
  setEditing(false);
}

const[users,setUsers]=useState(usersdata);
const[editing, setEditing]=useState(false);

const initialform={id:null,name:" ",username:" "}
const[currentuser, setCurrentUser]=useState(initialform);

const editrow=(user)=>{
  setEditing(true);
  setCurrentUser({id:user.id,name:user.name,username:user.username});
}
const updateuser=(id,updateuser)=>{
  setEditing(false);
  setUsers(users.map((user)=>(user.id===id?updateuser:user)))
}

  return (
      <div className='container'>
        <h1>CRUD App With Hooks</h1>
        <div className='flex-row'>
         <div className='flex-large'>
          {editing ?(<div>
            <h2> Edit User</h2>
            <Edituserform 
               setEditing={setEditing}
               currentuser={currentuser}
               updateuser={updateuser}  />
          </div>):(
          <div><h2>Add User</h2>
          <Adduserform addusers={addusers}/>
           </div>)
          }
          
         </div>
         <div className='flex-large'>
          <h2> View Users</h2>
          <Usertable editrow={editrow} deleteuser={deleteuser} users={users} />
         </div>
        </div>
    </div>
  );
}

export default App;
