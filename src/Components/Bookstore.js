// // Bookstore.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Bookstore = () => {
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);

//   useEffect(() => {
//     // Fetch initial book data when the component mounts
//     const fetchData = async () => {
//       try {
//         const response1 = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
//         const response2 = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes");
//         console.log(response1.data.items);
//         const booksData = [...response1.data.items, ...response2.data.items];
//         setBooks(booksData);
//       } catch (error) {
//         console.error("Error fetching book data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleBookClick = (book) => {
//     setSelectedBook(book);
//   };

//   return (
//     <div className="bookstore">
//       <h2>Bookstore</h2>
//       {/* <div className="book-list">
//         {books.map((book) => (
//           <Book key={book.id} book={book} onBookClick={handleBookClick} />
//         ))}
//       </div> */}
//       {selectedBook && (
//         <div className="book-details">
//           <h2>Book Details</h2>
//           <h3>{selectedBook.volumeInfo.title}</h3>
//           <p>Author: {selectedBook.volumeInfo.authors}</p>
//           <p>Description: {selectedBook.volumeInfo.description}</p>
//           <a href={selectedBook.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
//             More Info
//           </a>
//           <a href={selectedBook.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
//             Read Now
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bookstore;





import React, { useState } from 'react';
import BookDetail from './Bookinfo';

function Bookstore({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || 'no-image.jpg'}
            alt={book.volumeInfo.title}
          />
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors?.join(', ')}</p>
          <button onClick={() => handleBookClick(book)}>Show Details</button>
          {selectedBook && selectedBook.id === book.id && (
            <BookDetail book={selectedBook} />
          )}
        </div>
      ))}
    </div>
  );
}


export default Bookstore;
