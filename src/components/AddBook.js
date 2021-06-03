import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
// import useLocalStorage from "use-local-storage";
import useLocalStorage from '../Hooks/LocalStorage'


export const AddBook = () => {

    const { addBook } = useContext(GlobalContext);
    const { books } = useContext(GlobalContext);



    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
 

    const onSubmit = (e) => {
        e.preventDefault();
        

        const newBook = {
            id: Math.floor(Math.random() * 1000000),
            title,
            author
        };
    
       
    if(!title || !author){
        alert('Please Enter All Fields')
    } else {
    addBook(newBook);
    setTitle('');
    setAuthor('')
}



 }

    return (
        <form onSubmit={onSubmit}>
            <h4>Add Book To Your Book List</h4>
            <input className="input" type="text" placeholder="Enter Book Name" value={title} onChange={(e)=> setTitle(e.target.value)}></input>
           
            <input className="input" type="text" placeholder="Enter Author Name" value={author} onChange={(e)=> setAuthor(e.target.value)}></input>
            <button className="btn">Add Book To List</button>
        </form>
    )
}
