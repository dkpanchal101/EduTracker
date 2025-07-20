import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  BookOpenCheck,
  PlusCircle,
  LayoutDashboard,
  UserCircle2,
  ChevronDown,
  LogIn,
  LogOut,
  UserPlus,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setProfileOpen(false);
    navigate("/login");
  };

  const navItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
    { name: "Courses", path: "/courses", icon: <BookOpenCheck size={18} /> },
    { name: "Add Course", path: "/addcourse", icon: <PlusCircle size={18} /> },
  ];

  return (
    <nav className="bg-white text-gray-800 shadow-md p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-blue-600">
          EduTrackr
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-100 ${
                  isActive ? "bg-gray-200 text-blue-600" : "text-gray-700"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              <UserCircle2 className="text-blue-600" size={20} />
              Profile
              <ChevronDown className="w-4 h-4" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                {!isAuthenticated ? (
                  <>
                    <NavLink
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <LogIn size={16} /> Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <UserPlus size={16} /> Sign Up
                    </NavLink>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 md:hidden space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-gray-200 text-blue-600" : "text-gray-700"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
          <hr />
          {!isAuthenticated ? (
            <>
              <NavLink
                to="/login"
                className="block px-4 py-2 text-sm text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="block px-4 py-2 text-sm text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-red-600"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
