import React from "react";
import { motion } from "framer-motion";
import { BarChart4 } from "lucide-react";

const StatCard = ({ title, value, icon: Icon = BarChart4 }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white text-gray-800 rounded-2xl shadow-md hover:shadow-lg p-4 flex flex-col justify-between transition-all"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
        <Icon className="h-5 w-5 text-indigo-500" />
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </motion.div>
  );
};

export default StatCard;
