import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt, FaBookOpen } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { SiTestcafe } from "react-icons/si";
import { AuthContext } from "../Pages/AuthContext";

function AddResource() {
  const { logout } = useContext(AuthContext);
  return (
    <div
      className="text-center text-5xl text-bold max-h-screen max-sm"
      style={{
        marginTop: "100px",
        backgroundImage: "https://bit.ly/3GP68X0",
      }}
    >
      <div style={{ paddingTop: "100px", marginLeft:"300px", marginRight:"300px", paddingLeft:"200px"}}>
        <form>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Repeat password
            </label>
            <input
              type="password"
              id="repeat-password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="terms"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="/"
                class="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new account
          </button>
        </form>
      </div>
      {/* FORM  */}

      <div
        className="bg-orange-500 absolute top-0  h-20"
        style={{ left: 200, paddingRight: "550px" }}
      >
        {/* <div className="container mx-auto flex items-center justify-between px-4 py-3"> */}
        <div
          className=" text-4xl xl:font-bold font-weight: 600 pt-5 pb-3 text-center pl-20"
          style={{ paddingLeft: "373px", fontSize: "70px" }}
        >
          Educator
        </div>
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
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
            <NavLink to="/educator">
              <h1
                className="text-5xl text-white font-bold pb-5 pl-0"
                style={{ paddingLeft: "0px" }}
              >
                V<span className="text-5xl text-orange-500 ">S </span>
              </h1>
            </NavLink>
            <ul className="space-y-2 font-medium">
              <li>
                <NavLink
                  to="/educator/add-resources"
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                >
                  <div className="text-xl">
                    <FaBookOpen />
                  </div>
                  <span className="ml-3 text-2xl text-start">Resources</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/educator/schedule-exam"
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                >
                  <div className="text-xl">
                    <SiTestcafe />
                  </div>
                  <span className="flex-1 ml-3 text-2xl text-start">
                    Exams
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                  to="/educator/attendance"
                >
                  <div className="text-xl">
                    <BsGraphUp />
                  </div>
                  <span className="flex-1 ml-3 text-2xl text-start">
                    Attendance
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                  style={{ marginTop: "250px" }}
                  to="/login"
                >
                  <div className="text-xl">
                    <FaSignOutAlt />
                  </div>
                  <span className="flex-1 ml-3 text-2xl text-start">
                    <button
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </button>
                  </span>
                </NavLink>
              </li>
              <div style={{ paddingTop: "20px" }}>
                <hr className="border-4"></hr>
              </div>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default AddResource;
