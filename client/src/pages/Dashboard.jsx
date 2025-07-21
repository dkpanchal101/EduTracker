import React from "react";
import StatCard from "../components/common/StatCard";
import {
  BookOpenCheck,
  CheckCircle,
  Clock,
  Loader,
  CalendarDays,
  Brain,
  StickyNote,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Total Courses", value: 12, icon: BookOpenCheck },
    { title: "Completed", value: 7, icon: CheckCircle },
    { title: "In Progress", value: 3, icon: Loader },
    { title: "Pending", value: 2, icon: Clock },
  ];

  const goals = [
    { icon: "✅", task: "Complete React lecture 5" },
    { icon: "📘", task: "Revise DSA LinkedList topic" },
    { icon: "🧠", task: "30 mins Aptitude practice" },
    { icon: "📄", task: "Take DBMS Quiz" },
  ];

  const recentCourses = [
    { name: "React Fundamentals", progress: "80%" },
    { name: "Data Structures", progress: "45%" },
    { name: "DBMS", progress: "65%" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Welcome Back, Student!</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <StatCard key={idx} title={stat.title} value={stat.value} icon={stat.icon} />
        ))}
      </div>

      {/* Three Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Daily Goals */}
        <div className="bg-[#1b1c2e] rounded-2xl p-6 shadow-md border border-[#2a2b40]">
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays className="text-indigo-400" />
            <h2 className="text-lg font-semibold">Daily Goals</h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            {goals.map((goal, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span>{goal.icon}</span>
                <span>{goal.task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Courses */}
        <div className="bg-[#1b1c2e] rounded-2xl p-6 shadow-md border border-[#2a2b40]">
          <div className="flex items-center gap-2 mb-4">
            <BookOpenCheck className="text-green-400" />
            <h2 className="text-lg font-semibold">Recent Courses</h2>
          </div>
          <ul className="space-y-4 text-sm">
            {recentCourses.map((course, idx) => (
              <li key={idx} className="flex justify-between text-gray-300">
                <span>{course.name}</span>
                <span className="text-blue-400 font-semibold">{course.progress}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chart / Analytics Placeholder */}
        <div className="bg-[#1b1c2e] rounded-2xl p-6 shadow-md border border-[#2a2b40]">
          <div className="flex items-center gap-2 mb-4">
            <Loader className="text-purple-400 animate-spin" />
            <h2 className="text-lg font-semibold">Weekly Progress</h2>
          </div>
          <div className="text-center text-gray-500 py-12 border border-dashed border-gray-700 rounded-xl">
            📊 [ Progress Chart Coming Soon ]
          </div>
        </div>
      </div>

      {/* Smart Tip */}
      <div className="mt-8 bg-gradient-to-r from-[#1f1f2e] to-[#161628] rounded-2xl p-6 border border-[#2a2b40] shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="text-yellow-300" />
          <h2 className="text-lg font-semibold text-yellow-300">Smart Tip of the Day</h2>
        </div>
        <p className="text-sm text-gray-300">
          Try the <strong>Pomodoro technique</strong>: study for 25 mins, then break for 5. After 4 sessions, take a 15-minute break. Stay consistent, not perfect!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
