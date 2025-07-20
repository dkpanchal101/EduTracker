import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import { BookOpen } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    instructor: 'Angela Yu',
    progress: 80,
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms',
    instructor: 'Abdul Bari',
    progress: 100,
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Machine Learning A-Z',
    instructor: 'Kirill Eremenko',
    progress: 50,
    status: 'In Progress',
  },
  {
    id: 4,
    title: 'React.js Complete Guide',
    instructor: 'Maximilian Schwarzmüller',
    progress: 40,
    status: 'In Progress',
  },
  {
    id: 5,
    title: 'System Design Primer',
    instructor: 'Tech Dummies',
    progress: 75,
    status: 'In Progress',
  },
  {
    id: 6,
    title: 'Python for Everybody',
    instructor: 'Dr. Chuck',
    progress: 100,
    status: 'Completed',
  },
  {
    id: 7,
    title: 'Node.js & Express Crash Course',
    instructor: 'Brad Traversy',
    progress: 60,
    status: 'In Progress',
  },
  {
    id: 8,
    title: 'DevOps with Docker & Kubernetes',
    instructor: 'Kelsey Hightower',
    progress: 20,
    status: 'In Progress',
  },
  {
    id: 9,
    title: 'Advanced CSS and Sass',
    instructor: 'Jonas Schmedtmann',
    progress: 90,
    status: 'Completed',
  },
  {
    id: 10,
    title: 'Clean Code & Architecture',
    instructor: 'Robert C. Martin',
    progress: 55,
    status: 'In Progress',
  },
  {
    id: 11,
    title: 'Android Development with Kotlin',
    instructor: 'Philipp Lackner',
    progress: 30,
    status: 'In Progress',
  },
  {
    id: 12,
    title: 'Database Design & SQL',
    instructor: 'Jose Portilla',
    progress: 85,
    status: 'Completed',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'text-green-600';
    case 'In Progress':
      return 'text-yellow-500';
    default:
      return 'text-gray-500';
  }
};

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      className="pr-20 pl-20 pt-10 md:p-10 min-h-screen bg-gray-50 text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Header title="Courses" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-800">{course.title}</h2>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                Instructor: <span className="text-gray-800 font-medium">{course.instructor}</span>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Progress: <span className="text-gray-800 font-medium">{course.progress}%</span>
              </p>
              <p className={`text-sm font-semibold ${getStatusColor(course.status)}`}>
                Status: {course.status}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No courses found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default CoursesPage;
