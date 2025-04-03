import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider"; // Import AuthContext
import "./Header.css";

const Header = () => {
  const { currentUser } = useContext(AuthContext); // Get the currentUser from AuthContext
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            Graceland
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>

          {currentUser ? (
            <li>
              <Link to="/profile" onClick={closeMenu}>
                Profile
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" onClick={closeMenu}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
