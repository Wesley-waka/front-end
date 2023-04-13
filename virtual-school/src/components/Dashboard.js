import React, { useState } from "react";

import "../components/Dashboard.css";
// import "../components/Dashboard.css"

import { FaTh, FaBars, FaBook } from "react-icons/fa";
import { TbWritingSign } from "react-icons/tb";
import { SiTestcafe } from "react-icons/si";
import { MdAssessment } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";


import { NavLink } from "react-router-dom";

function Dashboard({ children }) {

    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const dashboardItems = [
    {
      path: "/",
      name: "Landing",
      icon: <FaTh />,
    },
    {
      path: "resources",
      name: "Resource",
      icon: <FaBook />,
    },
    {
      path: "exams",
      name: "Exam",
      icon: <TbWritingSign />,
    },
    {
      path: "test",
      name: "Test",
      icon: <SiTestcafe />,
    },
    {
      path: "assessment",
      name: "Assessment",
      icon: <MdAssessment />,
    },
    {
      path: "results",
      name: "Result",
      icon: <FaTh />,
    },
    {
      path: "chat",
      name: "Chat",
      icon: <BsFillChatLeftTextFill />,
    },
  ];

  return (
    <div className="container">
      {/* SIDEBAR/ NAVBAR  */}

      {/* logo upper side  */}
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="logo"
          >
            R
          </h1>

          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {/* details side  */}

        {dashboardItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
          
        ))}
      </div>
      <br />

      {/* CONTENT SIDE  */}

      <div >
        <main>{children}</main>
      </div>
     
    </div>
  );
}

export default Dashboard;
