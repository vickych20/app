import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';

const Nav = () => {
  return (
      <div className='nav'>
          <ul>
              <li><Link to="/">product</Link> </li>
              <li><Link to="/add">add product</Link> </li>
              <li><Link to="/update">update product</Link> </li>
              <li><Link to="/logout">logout</Link> </li>
              <li><Link to="/profile">profile</Link> </li>
         </ul>
    </div>
  )
}

export default Nav