// import React,{useState,useEffect} from "react";

import React from 'react';

function Bookinfo({ book }) {
  return (
    <div className="book-detail">
      {/* <img
        src={book.volumeInfo.imageLinks?.thumbnail || 'no-image.jpg'}
        alt={book.volumeInfo.title}
      /> */}
      <h2>{book.volumeInfo.title}</h2>
      <p>Author(s): {book.volumeInfo.authors?.join(', ')}</p>
      <p>Publisher: {book.volumeInfo.publisher}</p>
      <p>Publish Date: {book.volumeInfo.publishedDate}</p>
      <div className="buttons">
        <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
          Read Now
        </a>
        <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
          More Info
        </a>
      </div>
    </div>
  );
}

export default Bookinfo;

