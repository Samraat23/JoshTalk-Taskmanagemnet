// pages/SearchTodo.js
'use client';
import { tododata } from '@/context/store';
import React, { useContext, useState, useEffect } from 'react';

function SearchTodo() {
    const [todos, setTodos] = useContext(tododata);
    const [search, setSearch] = useState('');
    const [originalTodos, setOriginalTodos] = useState([]);

    // Initialize originalTodos with the original list
    useEffect(() => {
        setOriginalTodos(todos);
    }, [todos]);

    // Function to handle the search submit
    function handleSubmit(e) {
        e.preventDefault();
        const searchFilter = originalTodos.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
        setTodos(searchFilter);
        setSearch(''); 
    }


    return (
        <div >
            <form onSubmit={handleSubmit} className='searchbar'>
                <input
                  className='search_box'
                    type="search"
                    placeholder="Search Task"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
               
                <button type="submit" id='btn_search'>Search</button>
             
            </form>
        </div>
    );
}

export default SearchTodo;








