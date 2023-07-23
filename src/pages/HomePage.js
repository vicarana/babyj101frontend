import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Baby Inventory Management</h1>
      <nav>
        <ul>
          <li>
            <Link to="/baby-form">Baby Form</Link>
          </li>
          <li>
            <Link to="/baby-inventory">Baby Inventory App</Link>
          </li>
          <li>
            <Link to="/baby-inventory-form">Baby Inventory Form</Link>
          </li>
          <li>
            <Link to="/inventory-report">Inventory Report</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
