import React from 'react'

import { FaTh, FaBook } from "react-icons/fa";
import { TbWritingSign } from "react-icons/tb";
import { SiTestcafe } from "react-icons/si";
import { MdAssessment } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";


import Dashboard from "./Dashboard";

function StudentDashboard() { 
  

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
        <>
            <Dashboard dashboardItems={dashboardItems} />
        </>
    );
}

export default StudentDashboard