import React from "react";

import "../Pages/Dashboard.css";
// import "../components/Dashboard.css"

import { FaBook, FaTable, FaChalkboardTeacher } from "react-icons/fa";
import { TbBuildingBank } from "react-icons/tb";
// import { SiTestcafe } from "react-icons/si";
import { MdSchool } from "react-icons/md";
// import { BsFillChatLeftTextFill } from "react-icons/bs";

import Dashboard from "./Dashboard";

function Admin({ children }) {

  
  const dashboardItems = [
    {
      path: "exams",
      name: "Add School",
      icon: <TbBuildingBank />,
    },
    {
      path: "/",
      name: "Add Educator",
      icon: <FaChalkboardTeacher />,
    },
    {
      path: "resources",
      name: "Add Student",
      icon: <MdSchool />,
    },
    {
      path: "resources",
      name: "Add Course",
      icon: <FaBook />,
    },
    {
      path: "resources",
      name: "View Classes",
      icon: <FaTable />,
    },
  ];

  return (
    <>
      <Dashboard dashboardItems={dashboardItems} />
    </>
  );
}

export default Admin;
