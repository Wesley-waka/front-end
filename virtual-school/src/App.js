// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./components/Pages/Chat";
import Exam from "./components/Pages/Exam";
import Landing from "./components/Pages/Landing";
import Resource from "./components/Pages/Resource";
import Result from "./components/Pages/Result";
import Admin from "./components/Pages/Admin";
import StudentDashboard from "./components/Pages/StudentDashboard";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
import AuthProvider from "./components/Pages/AuthContext";
import SchoolEntry from "./components/Pages/SchoolEntry";
import CourseEntry from "./components/Pages/CourseEntry";
import EducatorEntry from "./components/Pages/EducatorEntry";
import StudentEntry from "./components/Pages/StudentEntry";



function App() {
  return (
    <div className="bg-from-red-500">
      <h1 className="text-5xl font-bold bg-gradient-to-b from-red-700 to-blue-900 text-white h-screen  w-full items-center pt-20 text-center ">
        Tailwind Configuration
      </h1>
    </div>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
        <Route path="/admin/student" element={<StudentEntry />} />
        <Route path="/admin/course" element={<CourseEntry />} />
        <Route path="/admin/educator" element={<EducatorEntry />} />

          <Route path="/student" element={<StudentDashboard />} />
        <Route path="/admin/school" element={<SchoolEntry />} />
          <Route path="/student/resources" element={<Resource />} />
          <Route path="student/exams" element={<Exam />} />
          <Route path="student/results" element={<Result />} />
          <Route path="student/chat" element={<Chat />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
