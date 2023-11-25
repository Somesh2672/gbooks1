// import React from "react";





// import {FaStudiovinari} from "react-icons/fa6";
// import { BsSearch } from "react-icons/bs";
// import { BiSolidBookReader } from "react-icons/bi";
// import {FaRegBell} from "react-icons/fa6";
// import { SlDiamond } from "react-icons/sl";
// import {FaRegCircleUser} from "react-icons/fa6";

// const Navbar =()=>{





//     return(
//         <div className="navbar">
//             <div className="logo-name">
//             <FaStudiovinari/>
//             <h1>FlyingSpirit</h1>
//             <p>Books</p>
//             </div>

//             <div className="search-section">
//                 <BsSearch/>
//                 <input type="text"  placeholder="Search for the book you want reed it now..."></input>
//                 <button type="search">Search</button>
//             </div>

//             <div className="user-info">
//             <ul id='nav'>
//                     <li> <BiSolidBookReader/> </li>
//                     <li> <FaRegBell/> </li>
//                     <li> <SlDiamond/> </li>
//                     <li> <FaRegCircleUser/> </li> 
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar;




// import React, { useState } from 'react';

// function Navbar({ onSearch }) {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSearchClick = () => {
//     onSearch(query);
//   };

//   return (
//     <div className="navbar">
//       <input
//         type="text"
//         placeholder="Search for books..."
//         value={query}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleSearchClick}>Search</button>
//     </div>
//   );
// }

// export default Navbar;



import React, { useState } from 'react';
import { FaStudiovinari } from 'react-icons/fa6';
import { BsSearch } from 'react-icons/bs';
import { BiSolidBookReader } from 'react-icons/bi';
import { FaRegBell } from 'react-icons/fa6';
import { SlDiamond } from 'react-icons/sl';
import { FaRegCircleUser } from 'react-icons/fa6';

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="navbar">
      <div className="logo-name">
        <FaStudiovinari />
        <h1>FlyingSpirit</h1>
        <p>Books</p>
      </div>

      <div className="search-section">
        <BsSearch />
        <input
          type="text"
          placeholder="Search for the book you want to read now..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="search" onClick={handleSearchClick}>
          Search
        </button>
      </div>

      <div className="user-info">
        <ul id="nav">
          <li> <BiSolidBookReader /> </li>
          <li> <FaRegBell /> </li>
          <li> <SlDiamond /> </li>
          <li> <FaRegCircleUser /> </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
