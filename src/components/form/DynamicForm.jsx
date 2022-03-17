import React, { useState } from 'react'

const DynamicForm = () => {
    const usertemplete = { name: "" }
    const [users, setUsers] = useState([usertemplete])
    const addUsers=()=>{
        setUsers([...users])    
        console.log(setUsers,"sdesfe");    
    }
    return (
        <div>
            <h2>User DynamicForm</h2>
            {
                users.map((user,index)=>(
                    <input type="text" name="name" placeholder='enter your name' ></input>
                ))
            }
            <button onClick={addUsers}>submit</button>
        </div>
    )
}

export default DynamicForm