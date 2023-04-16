// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Assessment from "./components/Pages/Assessment";
import Chat from "./components/Pages/Chat";
import Exam from "./components/Pages/Exam";
import Landing from "./components/Pages/Landing";
import Resource from "./components/Pages/Resource";
import Result from "./components/Pages/Result";
import Test from "./components/Pages/Test";
import Admin from "./components/Pages/Admin";
import StudentDashboard from "./components/Pages/StudentDashboard";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/student" element={<StudentDashboard />} />

        <Route path="/student/resources" element={<Resource />} />
        <Route path="student/exams" element={<Exam />} />
        <Route path="student/test" element={<Test />} />
        <Route path="student/assessment" element={<Assessment />} />
        <Route path="student/results" element={<Result />} />
        <Route path="student/chat" element={<Chat />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* </Dashboard> */}
    </BrowserRouter>
  );
}

export default App;
