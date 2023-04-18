import React from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../Pages/Dashboard.css";
import { FaSignOutAlt, FaRocketchat, FaBookOpen } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { SiTestcafe } from "react-icons/si";

// import Dashboard from "./Dashboard";

function StudentDashboard() {
  return (
    <>
      <div className="">
        <h1
          className=" text-5xl pb-20 pt-20 font-extrabold"
          style={{ marginLeft: "600px" }}
        >
          {" "}
          Hello and welcome to
        </h1>
        <div
          className=" text-yellow-500 font-black text-5xl text-center"
          style={{ marginLeft: "300px" }}
        >
          <Typewriter
            className="text-yellow-400"
            options={{
              strings: [
                "Your dream school where you can",
                "your dream to learn.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div
        className="text-center text-5xl text-bold max-h-screen"
        style={{
          marginTop: "100px",
          backgroundImage: "https://bit.ly/3GP68X0",
        }}
      >
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div
            className="h-full px-3 py-2 overflow-y-auto sidebar"
            style={{
              // backgroundColor: "blue",
              paddingTop: "30px",
              paddingLeft: "10px",
              paddingRight: "-40px",
            }}
          >
            <NavLink to="/student">
              <h1
                className="text-5xl text-white font-bold pb-5 pl-0"
                style={{ paddingLeft: "0px" }}
              >
                V<span className="text-5xl text-yellow-400 ">S </span>
              </h1>
            </NavLink>
            <ul className="space-y-2 font-medium">
              <li>
                <NavLink
                  to="/student/resources"
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                >
                 <div className="text-xl">
                    <FaBookOpen />
                  </div>
                  <span className="ml-3 text-2xl text-start">Resource</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/student/exams"
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                >
                  <div className="text-xl">
                    <SiTestcafe />
                  </div>
                  <span className="flex-1 ml-3 text-2xl text-start">Exam</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                  to="/student/results"
                >
                  <div className="text-xl">
                    <BsGraphUp />
                  </div>
                  <span className="flex-1 ml-3 text-2xl text-start">
                    Result
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                  to="/student/chat"
                >
                 <div className="text-xl">
                    <FaRocketchat />
                  </div>
                  <span className="flex-1 ml-3 text-2xl text-start">Chat</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                  to="/"
                >
                <div className="text-xl">
                    <FaSignOutAlt />
                  </div>
                  <span className="flex-1 ml-3 text-2xl text-start">Logout</span>
                </NavLink>
              </li>
              <div style={{paddingTop: "200px" }}>
              <hr className="border-4"></hr>
            </div>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default StudentDashboard;
