// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Assessment from "./components/Assessment";
import Chat from "./components/Chat";
import Dashboard from "./components/Dashboard";
import Exam from "./components/Exam";
import Landing from "./components/Landing";
import Resource from "./components/Resource";
import Result from "./components/Result";
import Test from "./components/Test";

function App() {
  return (
    <BrowserRouter>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/exams" element={<Exam />} />
          <Route path="/test" element={<Test/>} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/results" element={<Result />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Dashboard>
    </BrowserRouter>
  );
}

export default App;
