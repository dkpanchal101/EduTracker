import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Logout from "./pages/auth/Logout";
import Dashboard from "./pages/Dashboard";
import CoursesPage from "./pages/Courses";
import AddCourse from "./pages/AddCourse";
import Navbar from "./components/Navbar";
import PrivateRoute from "./pages/utils/PrivateRoute"; // For profile-protected pages
import Profile from "./pages/Profile"; // (optional: if you add a profile page)

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Router>
      <Navbar /> {/* Always show Navbar */}

      <Routes>
        {/* Publicly accessible routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
