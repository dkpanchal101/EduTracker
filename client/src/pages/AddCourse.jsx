import React, { useState } from "react";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    name: "",
    instructor: "",
    platform: "",
    startDate: "",
    status: "in-progress",
  });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(courseData); // send this to backend
    // reset form
    setCourseData({
      name: "",
      instructor: "",
      platform: "",
      startDate: "",
      status: "in-progress",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-950 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1e293b] p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6 border border-[#334155]"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Add New Course</h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Course Name</label>
            <input
              type="text"
              name="name"
              value={courseData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#0f172a] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g. React for Beginners"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Instructor Name</label>
            <input
              type="text"
              name="instructor"
              value={courseData.instructor}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#0f172a] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g. John Doe"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Platform</label>
            <input
              type="text"
              name="platform"
              value={courseData.platform}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#0f172a] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g. Coursera, Udemy"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={courseData.startDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#0f172a] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Status</label>
            <select
              name="status"
              value={courseData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-[#0f172a] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="planned">Planned</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 transition duration-200 text-white py-2 rounded-md font-semibold"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
