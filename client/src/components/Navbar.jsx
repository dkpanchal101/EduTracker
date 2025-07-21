import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, BookOpenCheck, PlusCircle, LayoutDashboard, Moon, UserCircle2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { path: '/courses', label: 'Courses', icon: <BookOpenCheck size={18} /> },
    { path: '/add', label: 'Add Course', icon: <PlusCircle size={18} /> },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <BookOpenCheck size={26} /> EduTrackr
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-1 transition-colors duration-200 ${
                  isActive ? 'font-semibold text-blue-400' : 'hover:text-blue-300'
                }`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
        </div>

        {/* User & Theme */}
        <div className="hidden md:flex items-center gap-4">
          <button className="hover:text-blue-400">
            <Moon size={20} />
          </button>
          <UserCircle2 size={28} className="hover:text-blue-400 cursor-pointer" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 py-1 ${isActive ? 'font-semibold text-blue-400' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
