import React from "react";

const Header = ({ title, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-3 md:mb-0">{title}</h2>

      {setSearchTerm && (
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      )}
    </div>
  );
};

export default Header;
