import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Picture } from './Picture';

export const Book = ({book}) => {
    // const [selectedFile, setSelectedFile] = useState(null);
  
    const { deleteBook } = useContext(GlobalContext);


    return (
    <div className="liBtn">
        <li>
            {book.title} <span>{book.author}<button className='delete-btn' onClick={() => deleteBook(book.id)}>X</button></span>
    </li>
    
      </div>
    )
}
