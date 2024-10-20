'use client'
import { tododata } from '@/context/store'
import React, { useContext, useState } from 'react'
import SearchTodo from './searchtodo';

function TaskList() {
    const [todos, setTodos] = useContext(tododata);
    const [editTitle, setEditTitle] = useState('');
    const [editDisc, setEditDisc] = useState('');

    //color depend on parameter
    function getBackgroundColor(priority) {
      switch (priority) {
          case 'High':
              return 'red';
          case 'Medium':
              return 'yellow';
          case 'Low':
            return 'green';
              
          default:
              return 'white';
      }
  }


    function completedTodo(e) {
        const updatedTodos = todos.map((item) => {
            if (item.id === e.target.value) {
                item.Task = e.target.checked ? 'Completed' : 'Pending';
            }
            return item;
        });
        setTodos(updatedTodos);

    }
 
    //deleted function
    const deleteHandler = (e) => {
        e.preventDefault();
        const updatedTodos = todos.filter((item) => item.id !== e.target.id);
        setTodos(updatedTodos);
    };

    // Edit function
    const editTodo = (e) => {
        e.preventDefault();
        const todoId = e.target.id;
        const todoToEdit = todos.find((item) => item.id === todoId);
        setEditTitle(todoToEdit.title);
        setEditDisc(todoToEdit.disc);
        setTodos(
            todos.map((item) =>
                item.id === todoId ? { ...item, isEditing: !item.isEditing } : item
            )
        );
    };

    //save function
    const saveEdit = (e, id) => {
        e.preventDefault();
        setTodos(
            todos.map((item) =>
                item.id === id ? { ...item, title: editTitle, disc: editDisc, isEditing: false } : item
            )
        );
        setEditTitle('');
        setEditDisc('');
    };

    //pariority of task to bottom level hight > medium > low
    function sortTasksByPriority(tasks) {
      return tasks.slice().sort((a, b) => {
          const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
          return priorityOrder[a.option] - priorityOrder[b.option];
      });
  }
    
      const sortedTodos = sortTasksByPriority(todos);

    return (
        <div>
            <>
            <SearchTodo/>
            </>
            {sortedTodos.length > 0 ? (
                sortedTodos.map((item) => {
                  const backgroundColor = getBackgroundColor(item.option);
                    return (
                        <div key={item.id} className='tasklist_box' style={{backgroundColor}}>
                            <div className='check_box'>
                                <input
                                    type="checkbox"
                                    id={item.id}
                                    value={item.id}
                                    onChange={(e) => completedTodo(e)}
                                    checked={item.Task == 'Completed'}
                                />
                            </div>
                            <div className='title_disc'>
                                {item.isEditing ? (
                                    <div>
                                        <input
                                            className='edit_input'
                                            type="text"
                                            value={editTitle}
                                            onChange={(e) => setEditTitle(e.target.value)}
                                            placeholder="Edit Title"
                                        />
                                        <input
                                            className='edit_input'
                                            type="text"
                                            value={editDisc}
                                            onChange={(e) => setEditDisc(e.target.value)}
                                            placeholder="Edit Description"
                                        />
                                        <button className='savebtn' onClick={(e) => saveEdit(e, item.id)}>Save</button>
                                    </div>
                                ) : (
                                    <div>
                                        <h2 id='item_title'>{item.title}</h2>
                                        <h3>{item.disc}</h3>
                                    </div>
                                )}
                                <div className='task_status'>
                                    <h2>{item.Task}</h2>
                                    <h2>{item.option}</h2>
                                </div>
                                <div className='btn_box'>
                                    <button
                                        className='btn_edit'
                                        id={item.id}
                                        onClick={(e) => editTodo(e)}
                                    >
                                        {item.isEditing ? 'Cancel' : 'Edit'}
                                    </button>
                                    <button
                                        className='btn_edit'
                                        id={item.id}
                                        onClick={(e) => deleteHandler(e)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>
                    <h1 style={{textAlign:"center"}}>No tasks pending</h1>
                </div>
            )}
          
        </div>
    );
}

export default TaskList;




