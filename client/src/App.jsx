import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import AddCourse from './pages/AddCourse';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/add" element={<AddCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
