import React, { useState } from "react";

import "../Pages/Dashboard.css";

import { FaBook, FaTable, FaChalkboardTeacher } from "react-icons/fa";
import { TbBuildingBank } from "react-icons/tb";

import { MdSchool } from "react-icons/md";

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
            <div >
                <main>{children}</main>
            </div>
        </>
    );
}

export default Admin;
