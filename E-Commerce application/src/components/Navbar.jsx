import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-around h-[6vh] bg-amber-500 items-center'>
        <p className='text-3xl'>iCart</p>
        <ul className='flex gap-5'>
          <li className='hover:cursor-pointer'>Home</li>
          <li className='hover:cursor-pointer'>About</li>
          <li className='hover:cursor-pointer'>Contact</li>
          <Link to="/cart">
            <li className='hover:cursor-pointer'>Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
