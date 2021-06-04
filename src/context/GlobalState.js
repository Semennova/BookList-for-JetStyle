import React, { useReducer, createContext } from 'react';
import AppReducer  from '../context/AppReducer';


const initialState = {
    books: [
        {id: 1, title: "Nineteen Eighty-Four", author: 'George Orwell'},
        {id: 2, title: "Alice's Adventures in Wonderland", author: 'Lewis Carroll'},
        {id: 3, title: "The Picture of Dorian Gray", author: 'Oscar Wilde'},
        {id: 4, title: "The Wonderful Wizard of Oz", author: 'L. Frank Baum'},
        {id: 5, title: "The Great Gatsby", author: 'F. Scott Fitzgerald'}
    ]


}



export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( { children } ) => {
   const [state, dispatch] = useReducer(AppReducer, initialState );

   function deleteBook(id){
       dispatch({
           type: 'DELETE_BOOK',
           payload: id
       })
   }

   function addBook(book){
       dispatch({
           type: 'ADD_BOOK',
           payload: book
       })
   }



    return (
        <GlobalContext.Provider value={{
            books: state.books, deleteBook, addBook}}>
            { children }
        </GlobalContext.Provider>
)
    
}
