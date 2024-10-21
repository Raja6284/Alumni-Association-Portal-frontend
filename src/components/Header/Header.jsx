import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  
  // Utility function to check if user is logged in
  const isLoggedIn = () => {
    return !!localStorage.getItem('token'); // Change 'authToken' to the name of your token
  };

  const handleHomeClick = () => {
    navigate("/"); // Navigate to home
    window.location.reload(); // Refresh the page
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token on logout
    navigate("/signin"); // Redirect to sign in page
  };

  return (
    <header className="fixed top-0 w-full bg-orange-700 z-10">
      {/* Top Section: Sign In and Sign Up (for public users) or Logout (for logged-in users) */}
      <div className="flex justify-end items-center h-8 px-4">
        {isLoggedIn() ? (
          <>
            <span className="text-white text-sm mr-4">Welcome, User</span>
            <button onClick={handleLogout} className="text-white text-sm hover:underline">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" className="text-white text-sm hover:underline mr-4">
              Sign In
            </Link>
            <Link to="/signup" className="text-white text-sm hover:underline">
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Bottom Section: Navigation and Logo */}
      <div className="bg-orange-600 h-12">
        <div className="flex justify-between items-center h-full px-4">
          <div className="flex items-center space-x-4">
            <img src="/makaut_logo.png" alt="MAKAUT Logo" className="h-8" />
            {/* Make the college name clickable */}
            <span
              onClick={handleHomeClick}
              className="cursor-pointer text-white text-sm font-bold"
            >
              MAKAUT Alumni Association Platform
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6 text-white text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            {isLoggedIn() ? (
              <>
                <Link to="/createstory" className="hover:underline">
                  Create Story
                </Link>
                <Link to="/createevent" className="hover:underline">
                  Create Event
                </Link>
                <Link to="/community" className="hover:underline">
                  Community
                </Link>
                <Link to="/jobportal" className="hover:underline">
                  Job Portal
                </Link>
              </>
            ) : (
              <>
                <Link to="/events" className="hover:underline">
                  Events
                </Link>
                <Link to="/stories" className="hover:underline">
                  Stories
                </Link>
              </>
            )}
            <a href="#" className="hover:underline">
              <i className="fas fa-search"></i>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
