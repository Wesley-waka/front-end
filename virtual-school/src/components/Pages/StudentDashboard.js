import React from "react";
import { NavLink } from "react-router-dom";

// import Dashboard from "./Dashboard";

function StudentDashboard() {
  return (
    <>
      {/* <Dashboard dashboardItems={dashboardItems} /> */}

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
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3 text-2xl text-start">Resource</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/student/exams"
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-white  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 text-2xl text-start">Exam</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                  to="/student/results"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
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
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 text-2xl text-start">Chat</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default StudentDashboard;
