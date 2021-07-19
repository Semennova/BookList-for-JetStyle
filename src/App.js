import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
const [books, setBooks] = useState([]);
const [book, setBook] = useState({
  id: '',
  title: '',
  author: ''
});

const [alertMessage, setAlertMessage] = useState(false);
const [successMessage, setSuccessMessage] = useState(false);
const [editMode, setEditMode] = useState(null);
const [titleValue, setTitleValue] = useState('');
const [authorValue, setAuthorValue] = useState('');

useEffect(()=> {
const data = localStorage.getItem('books');
  if(data) {
    setBooks(JSON.parse(data))
  }
}, [])


useEffect(()=> {
  localStorage.setItem('books', JSON.stringify(books))
},)


function addBook (e) {
  e.preventDefault();
  if(!book.title && !book.author){
    setAlertMessage(true)
    setTimeout(()=>setAlertMessage(false), 3000)
  } else {
    let newBook = {
      ...book,
      id: Math.floor(Math.random() * 100000000),
    };
    setBooks([newBook, ...books]);
    setBook({
      title: '',
      author: ''
    });
    setSuccessMessage(true)
    setTimeout(()=>setSuccessMessage(false), 1000);
  }

}

function deleteBook(id){
  setBooks(books.filter(book => book.id !== id))
}

function editBook(book) {
  setEditMode(book.id);
  setTitleValue(book.title);
  setAuthorValue(book.author);
}

function onChange(e) {
  setBook({
    ...book,
    [e.target.name]: e.target.value
  })

}

function saveChanges(id) {
  let newBook = [...books].map(book => {
    if(book.id == id) {
      book.title = titleValue;
      book.author = authorValue;
}
    return book;
  });
  setBooks(newBook);
  setEditMode(null);
}

  return (
 <div className='container'>
   
   {alertMessage && <div className='alertMeaage'>Please, enter book author or its title</div>}
   {successMessage && <div className='successMessage'>Book is successfully added!</div>}

   <div className='BookForm'>
     <h3>Add book</h3>
      <input name='title' type='text' placeholder='Enter book title' value={book.title}  onChange={onChange}/>
      <input name='author' type='text' placeholder='Enter book author' value={book.author} onChange={onChange}/>
      <button className='submitBtn' onClick={addBook}>Send</button>
   </div>

   <div>
     <h4>Recently added books:</h4>
    <div key={book.id}>{books.map(book => (
      <div className='bookItem'>
        {editMode !== book.id ? <><span className='titleAuthor'>Title: </span><i>«{book.title}» </i> 
          <span className='titleAuthor'>Author: </span> <i>{book.author}</i>
          <button onClick={()=>deleteBook(book.id)} className='deleteBtn'>X</button>
          <button onClick={()=>editBook(book)} className='editBtn'>Edit</button></> 
          : 
      <form className='form'>
        <input name='title' type='text' defaultValue={book.title} onChange={(e)=> setTitleValue(e.target.value)}/>
        <input name='author' type='text' defaultValue={book.author} onChange={(e)=> setAuthorValue(e.target.value)}/>
        <button className='saveBtn' onClick={()=>saveChanges(book.id)}>Save</button>
      </form>
          }
          
      </div>
     ))}
     </div> 
   </div>
</div>
  );
   
}

export default App;
