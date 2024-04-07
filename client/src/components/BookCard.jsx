import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({Menu, role}) => {
    const {name, about, imageUrl} = Menu;
  return (
    <div className='book-card'>
        <img src={imageUrl} alt={name} className='book-image'/>
        <div className="book-details">
            <h3>{name}</h3>
            <p>{about}</p>
        </div>
        {role === "admin" &&
        <div className="book-actions">
            <button><Link to={`/Menu/${Menu._id}`} className='btn-link'>edit</Link></button>
            <button><Link to={`/delete/${Menu._id}`} className='btn-link'>delete</Link></button>

        
    </div>}
        
    </div>
  )
}

export default BookCard