import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroBcg from '../images/hero-bcg.jpg';
import heroBcg2 from '../images/hero-bcg-2.jpg';
import Services from './Services';

import "../Pages/Dashboard.css";

import { FaBook, FaTable, FaChalkboardTeacher } from "react-icons/fa";
// import { FaBook, FaTable, FaChalkboardTeacher } from "react-icons/fa";
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

  // fetch("https://crowd-app.onrender.com")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))



  return (
    <>
      <Dashboard dashboardItems={dashboardItems} />
      <div >
        <main>{children}</main>

        <div className="bg-orange-400 absolute top-0  h-20" style={{ left: 200 }}>
          {/* <div className="container mx-auto flex items-center justify-between px-4 py-3"> */}
          <div className=" text-4xl xl:font-bold font-weight: 600 px-20 py-5">
            Administrator
          </div>

          <Wrapper className='section-center px-28 w-86'>
            <article className='content'>
              <h1 className="text-4xl xl:font-bold font-weight: 600 right-1 px-20 py-5">
                Build your <br />
                school
              </h1>
              <p className="sm:font-thin">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
                sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
                aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
                alias?
              </p>
              {/* <button className="hero-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to='/products' >
                shop now
              </button> */}
            </article>
            <article className='img-container '>
              <img src={heroBcg} alt='nice table' className='main-img' />
              <img src={heroBcg2} alt='person working' className='accent-img' />
            </article>
          </Wrapper>

          {/* </div> */}
          <Services className='absolute' />
        </div>

      </div>
    </>
  );
}
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
    
  }

  p {
    line-height: 2;
    max-width: 45rem;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
    padding-right: 7rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      left:0%;
      
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;


    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      border-radius: var(--radius);
    }
  }
`
export default Admin;




