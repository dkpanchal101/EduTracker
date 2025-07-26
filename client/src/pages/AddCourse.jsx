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
    console.log(courseData); // send to backend
    setCourseData({
      name: "",
      instructor: "",
      platform: "",
      startDate: "",
      status: "in-progress",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white-100 text-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900">Add New Course</h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Course Name</label>
            <input
              type="text"
              name="name"
              value={courseData.name}
              onChange={handleChange}
              required
              placeholder="e.g. React for Beginners"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              placeholder="e.g. Coursera, Udemy"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Status</label>
            <select
              name="status"
              value={courseData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="planned">Planned</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-2 rounded-md font-semibold"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
