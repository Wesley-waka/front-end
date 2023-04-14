import React from 'react'

import { FaTh, FaBars, FaBook } from "react-icons/fa";
import { TbWritingSign } from "react-icons/tb";
import { SiTestcafe } from "react-icons/si";
import { MdAssessment } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";


import { NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";

function StudentDashboard() { 
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

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

export default StudentDashboard