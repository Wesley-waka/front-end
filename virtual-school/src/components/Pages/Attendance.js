import React from "react";
import EducatorLoginSideBar from "./EducatorLoginSideBar";

import EducatorSideBar from "./EducatorSideBar";

function Attendance() {

  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;

  return (

<>
{ 
  isLoggedIn ? (
    <> 
<div
      className="text-center text-5xl text-bold max-h-screen max-sm"
      style={{
        marginTop: "1 0px",
        backgroundImage: "https://bit.ly/3GP68X0",
      }}
    >
      <div
        style={{
          paddingTop: "100px",
          marginLeft: "300px",
          marginRight: "300px",
          paddingLeft: "200px",
        }}
      >
        <form>
          <div class="mb-6">
            <label
              for="student-id"
              class="block mb-2 text-sm font-medium text-black"
            >
              Student ID
            </label>
            <input
              type="text"
              id="student-id"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="course-unit"
              class="block mb-2 text-sm font-medium text-black"
            >
              Course Unit
            </label>
            <input
              type="text"
              id="course-unit"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="attendance"
              class="block mb-2 text-sm font-medium text-black"
            >
              Attendance
            </label>
            <select
              id="attendance"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            >
              <option value="absent">Absent</option>
              <option value="present">Present</option>
            </select>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      {/* FORM  */}
      <EducatorSideBar />
    </div>
    </>
  )
  :
  (
    <>
     <div
            className="text-5xl"
            style={{
              text: "center",
              paddingTop: "200px",
              paddingLeft: "500px",
            }}
          >
            <h1> Login to mark attendance</h1>
          </div>
          <EducatorLoginSideBar />
    </>
  )
}

</>


   
  );
}

export default Attendance;
