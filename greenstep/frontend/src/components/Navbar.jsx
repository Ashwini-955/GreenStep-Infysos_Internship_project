import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-5 sm:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* App Name */}
        <h1 className="text-2xl font-bold text-green-700">
          GreenStep
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
          <Link to="/dashboard" className="hover:text-green-600">Home</Link>
          <Link to="/calculate" className="hover:text-green-600">Calculate</Link>
          <Link to="/history" className="hover:text-green-600">History</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>

          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Logout
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-green-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
          <Link onClick={() => setOpen(false)} to="/dashboard">Home</Link>
          <Link onClick={() => setOpen(false)} to="/calculate">Calculate</Link>
          <Link onClick={() => setOpen(false)} to="/history">History</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>

          <button
            onClick={handleLogout}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-fit"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
