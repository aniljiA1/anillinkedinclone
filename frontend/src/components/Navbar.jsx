// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-bold text-blue-600">LinkedIn Clone</h1>
        <Link to="/home" className="hover:text-blue-600">Home</Link>
        <Link to="/jobs" className="hover:text-blue-600">Jobs</Link>
        <Link to="/notifications" className="hover:text-blue-600">Notifications</Link>
      </div>
      
      <div className="flex items-center space-x-4">
        {user && (
          <>
            <img
              src={user.avatar || "/default-avatar.png"}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            <span>{user.name}</span>
          </>
        )}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
