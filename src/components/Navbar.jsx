import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [toggle, setToggle] = useState(false);

  function clickToggler() {
    setToggle(!toggle);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand">React Calculator</Link>
        <button onClick={clickToggler} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={(toggle) ? 'show collapse navbar-collapse' : 'collapse navbar-collapse'} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={'/general'} className="nav-link active" aria-current="page">GeneralFunc</Link>
            </li>
            <li className="nav-item">
              <Link to={'/about'} className="nav-link">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;