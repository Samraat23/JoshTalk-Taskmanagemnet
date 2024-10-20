'use client'

import { createContext, useState, useEffect  } from "react"


export const  tododata = createContext()


function todoprovider({children}){

  const getTodos = () => {
    try {
      const todos = JSON.parse(localStorage.getItem('todos'));
      return todos ? todos : [];
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      return [];
    }
  };

  const [todos , setTodos] = useState(getTodos);
  const[modal , setModal] = useState(false)
   

  function toggle (e){
    e.preventDefault()
    setModal(!modal)
}
    return (
        <tododata.Provider value={[todos , setTodos , modal , setModal , toggle]}>
          {children}
        </tododata.Provider>
    )
}

export default todoprovider ;
