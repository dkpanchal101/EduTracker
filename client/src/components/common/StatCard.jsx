import React from "react";
import { motion } from "framer-motion";
import { BarChart4 } from "lucide-react";

const StatCard = ({ title, value, icon: Icon = BarChart4 }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-[#1e1e2f] text-white rounded-2xl shadow-md p-4 flex flex-col justify-between transition-all"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm text-gray-400">{title}</h3>
        <Icon className="h-5 w-5 text-indigo-400" />
      </div>
      <p className="text-2xl font-semibold">{value}</p>
    </motion.div>
  );
};

export default StatCard;
