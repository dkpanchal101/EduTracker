import React from "react";

const Header = ({ title, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#1e1e1e] p-4 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-white mb-3 md:mb-0">{title}</h2>

      {setSearchTerm && (
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-[#0f172a] text-white px-4 py-2 rounded-lg border border-green-600 outline-none focus:ring-2 focus:ring-green-500"
        />
      )}
    </div>
  );
};

export default Header;
