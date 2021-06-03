import React, { useContext } from 'react';
import { Book } from './Book';
import { GlobalContext } from '../context/GlobalState'

export const BookList = () => {
    const { books } = useContext(GlobalContext);

    return (
        <div>
            <h4></h4>
        <ul className="list">
           { books.map(book => <Book key={book.id} book={book}/>)}
        </ul>
        </div>
    )
}
