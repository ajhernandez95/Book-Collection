import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, text, styleObj }) => {
  return (
    <Fragment>
      <Link to={to} className={styleObj}>
        {text}
      </Link>
    </Fragment>
  );
};

export default NavLink;
