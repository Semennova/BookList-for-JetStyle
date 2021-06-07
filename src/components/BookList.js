import React, { useContext, useEffect, useState } from 'react';
import { Book } from './Book';
import { GlobalContext } from '../context/GlobalState';




export const BookList = () => {
    const { books } = useContext(GlobalContext);

    useEffect(()=> {
        const data = localStorage.getItem('books');
        return data ? JSON.parse(data) : '[]'
      });

      useEffect(()=> {
        localStorage.setItem('books', JSON.stringify(books));
      }, [books]);

    return (
        <div>
            <h4></h4>
        <ul className="list">
           { books.map(book => <Book key={book.id} book={book}/>)}
        </ul>
        </div>
    )
}
