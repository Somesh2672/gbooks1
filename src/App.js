// import React from "react";
// import './style.css';
// import Navbar from "./Components/Navbar";
// import Bookstore from "./Components/Bookstore";


// const App = () =>{
//     return (
//         <div className="app">
//             <Navbar/>
//             <Bookstore/>
//             {/* <Bookinfo/> */}

//         </div>
//     )
// }

// export default App;



import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import BookList from './Components/Bookstore';
import BookDetail from './Components/Bookinfo';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // Fetch initial book data (Harry Potter and Sherlock Holmes)
    fetchBooks('Harry Potter');
    fetchBooks('Sherlock Holmes');
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = await response.json();
      setBooks((prevBooks) => [...prevBooks, ...data.items]);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = (query) => {
    setBooks([]); // Clear previous search results
    fetchBooks(query);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <BookList books={books} onBookClick={handleBookClick} />
      {selectedBook && <BookDetail book={selectedBook} />}
        
    </div>
  );
}

export default App;
