import React from 'react';

import logo from '../../img/book_icon.svg';
import NavLink from '../../components/tools/NavLink';

const Navbar = () => {
  return (
    <nav className="flex justify-center fixed w-screen bg-white">
      <div className="container flex items-center">
        <img src={logo} alt="company logo" className="h-16" />
        <div className="ml-auto">
          <ul className="flex items-center">
            <li>
              <NavLink to="/" text="HOME" styleObj={navLinkStyle} />
            </li>
            <li>
              <NavLink to="/about" text="ABOUT" styleObj={navLinkStyle} />
            </li>
            <li>
              <NavLink to="/login" text="LOGIN" styleObj={navBtnStyle} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const navLinkStyle =
  'mr-4 text-gray-900 hover:no-underline hover:text-gray-900';
const navBtnStyle =
  'bg-gray-900 text-gray-200 px-4 py-2 rounded hover:no-underline hover:text-gray-200';
export default Navbar;
