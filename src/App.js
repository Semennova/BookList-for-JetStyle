import './App.css'
import { AddBook } from './components/AddBook'
import { BookList } from './components/BookList'
import { Header } from './components/Header'
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <Header /> 
      <div className='container'>
        <BookList />
        <AddBook />
      </div>

      </GlobalProvider>
  );
}

export default App;
