import React from "react";
// import StudentDashboard from "./StudentDashboard"; <StudentDashboard />
import { NavLink } from "react-router-dom";
import { FaSignOutAlt, FaRocketchat, FaBookOpen } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { SiTestcafe } from "react-icons/si";

function Result() {
  return (
    <div>
      <div className="flex gap-10 pt-5 pl-20" style={{ marginLeft: "200px" }}>
        {/* CARD 1 */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Test
            </h5>
          </a>
          <p class="mb-3 font-normal text-black dark:text-gray-400">
            Here are the results for your test.
          </p>
          <a
            href="/"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View
          </a>
        </div>

        {/* CARD 2  */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-800 dark:text-white">
              Assessment
            </h5>
          </a>
          <p class="mb-3 font-normal text-black dark:text-gray-400">
            Here are the results for your assessment.
          </p>
          <a
            href="/"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View
          </a>
        </div>

        {/* CARD 3 */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-500 dark:text-white">
              Exam
            </h5>
          </a>
          <p class="mb-3 font-normal text-black dark:text-gray-400">
            Here are the results for your Exams.
          </p>
          <a
            href="/"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View
          </a>
        </div>
      </div>

      {/* // SIDE BAR  */}

      <div
        className="text-center text-5xl text-bold max-h-screen"
        style={{ marginTop: "100px" }}
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
                  to="/login"
                >

                  <div className="text-xl">
                    <FaSignOutAlt />
                  </div>
                  <span className="flex-1 ml-3 text-2xl text-start">
                    Logout
                  </span>
                </NavLink>
              </li>
              <div style={{ paddingTop: "200px" }}>
                <hr className="border-4"></hr>
              </div>

            </ul>
          </div>
          <br></br>
        </aside>
      </div>
    </div>
  );
}

export default Result;
