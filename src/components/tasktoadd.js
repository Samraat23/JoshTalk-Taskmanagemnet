'use client'

import { tododata } from "@/context/store"
import { useContext, useEffect, useState } from "react"
import { v4 as uuidV4 } from "uuid"
import Tasklist from "./tasklist"
import dynamic from "next/dynamic"

 function tasktoadd(){
    const[todos , setTodos ] = useContext(tododata)
    const[modal , setModal] = useState(false)
    const[title , setTitle] = useState('')
    const [disc , setDisc] = useState('')
    const [option , setOption] = useState('')


    function toggle (e){
         e.preventDefault()
         setModal(!modal)
    }


//  form submit button 
    function handleSubmit (e){
        e.preventDefault() 
        setModal(!modal)
        if(title == ''|| disc == ""|| option == ''){
            alert("please fill all detail")
            setModal(modal)
        } else{
            setTodos([...todos , {id :uuidV4(), title: title , disc: disc , Task:'Pending', option: option }])
        }
        setDisc('')
        setTitle('')
    }

    // drowpdown value 
    const Priority = [
        {
            id: 1,
            task: 'High'
        },
        {
            id: 2,
            task: 'Medium'
        },
        {
            id: 3,
            task: 'Low'
        },
    ]

    // Localstorage data save
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

      
    return (
        <div>
            <div className="btn_flex">
           <button className="btn" onClick={(e) => toggle(e)}>Add To Task</button>
           </div>
           { modal ?  <div className="taskdetail">
            <form action="" className="detail" onSubmit={handleSubmit}>
                <input id="inputt"
                type="text"
                placeholder="Title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                /><br /><br />
                <textarea 
                placeholder="Description"
                value={disc}
                onChange={(e) => setDisc(e.target.value)}
                ></textarea><br /><br />
                <select
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                >
                   {Priority.map((value) =>{
                    return (
                        <option 
                        key={value.id}
                        >{value.task}</option>
                    )
                   })}
                </select><br /><br />
                <div className="divbtb">
                <button id="submit">Submit</button>
                </div>
            </form>
           </div> : "" }
               <Tasklist />
        </div>
    )
}

export default dynamic(() => Promise.resolve(tasktoadd),{ssr : false})

