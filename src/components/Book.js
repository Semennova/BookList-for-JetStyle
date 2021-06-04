import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Book = ({book}) => {
    const { deleteBook, books } = useContext(GlobalContext);
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(book.title);



    const activateEditMode = () => {
      setEditMode(true);
    }

        
    
    function saveBook(id){
      let udatedBook = [...books].map(book => {
        if(book.id === id){
        book.title = value;
        }
        return value
      })
      setValue(udatedBook);
      setEditMode(false)
    }

    return (
    <div className="liBtn">
        {!editMode && <li onDoubleClick={activateEditMode} title="Double Click To Edit">
          <span className='right'> <strong>Book: </strong> <i>{book.title}</i></span><span><strong>Author: </strong> {book.author}</span>
           <button className='delete-btn' onClick={() => deleteBook(book.id)}>X</button>
         
    </li>}

    {editMode && <li>
            <input type={'text'} autoFocus={true} value={value} onChange={(e) => setValue(e.target.value)}/> 


            <button onClick={() => saveBook(book.id)}>Save</button>
    </li>}
    
      </div>
    )
}

