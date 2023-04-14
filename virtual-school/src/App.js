// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Assessment from "./components/Pages/Assessment";
import Chat from "./components/Pages/Chat";
import Dashboard from "./components/Pages/Dashboard";
import Exam from "./components/Pages/Exam";
import Landing from "./components/Pages/Landing";
import Resource from "./components/Pages/Resource";
import Result from "./components/Pages/Result";
import Test from "./components/Pages/Test";
import Admin from "./components/Pages/Admin";

console.log(Dashboard);

function App() {
  return (
    <BrowserRouter>
      {/* <Dashboard> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resources" element={<Resource />} />
        <Route path="/exams" element={<Exam />} />
        <Route path="/test" element={<Test />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/results" element={<Result />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* </Dashboard> */}
    </BrowserRouter>
  );
}

export default App;
