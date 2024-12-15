import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Brand Section */}
        <div className="text-2xl font-semibold">
          <Link to="/" className="hover:text-gray-300">
            My App
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/PureFunction" className="hover:text-gray-300">
            Pure Function
          </Link>
          <Link to="/ClassCompo" className="hover:text-gray-300">
            Class Component
          </Link>
          <Link to="/todo" className="hover:text-gray-300">
            Todo App
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
