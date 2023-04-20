import React from "react";
import StudentSideBar from "./StudentSideBar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import LoginDashboard from "./LoginDashboard";

function Resource() {

  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;

  return (
    <>
    { isLoggedIn ? (
      <> 
      <div>
      <div
        style={{
          paddingTop: "100px",
          paddingLeft: "20px",
          marginLeft: "195px",
          marginRight: "10px",
        }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div style={{ marginTop: "10px" }}>
            <SwiperSlide>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    The Great Gatsby
                  </h5>
                </a>
                <p class="mb-3 font-normal text-black dark:text-gray-400">
                  "The Great Gatsby" is a novel by F. Scott Fitzgerald,
                  published in 1925. It tells the story of Jay Gatsby, a wealthy
                  and mysterious man who becomes obsessed with winning back his
                  former love, Daisy Buchanan. Set in the Roaring Twenties, the
                  book explores themes of love, wealth, and the corrupting
                  influence of the American Dream. Fitzgerald's writing style is
                  poetic and vivid, transporting the reader to the glamorous yet
                  troubled world of the Jazz Age.
                </p>
                <a
                  href="/"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    The Hero of This Book
                  </h5>
                </a>
                <p class="mb-3 font-normal text-black dark:text-gray-400">
                  "The Great Gatsby" is a novel by F. Scott Fitzgerald,
                  published in 1925. It tells the story of Jay Gatsby, a wealthy
                  and mysterious man who becomes obsessed with winning back his
                  former love, Daisy Buchanan. Set in the Roaring Twenties, the
                  book explores themes of love, wealth, and the corrupting
                  influence of the American Dream. Fitzgerald's writing style is
                  poetic and vivid, transporting the reader to the glamorous yet
                  troubled world of the Jazz Age.
                </p>
                <a
                  href="/admin"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    The Book of Goose
                  </h5>
                </a>
                <p class="mb-3 font-normal text-black dark:text-gray-400">
                  "The Great Gatsby" is a novel by F. Scott Fitzgerald,
                  published in 1925. It tells the story of Jay Gatsby, a wealthy
                  and mysterious man who becomes obsessed with winning back his
                  former love, Daisy Buchanan. Set in the Roaring Twenties, the
                  book explores themes of love, wealth, and the corrupting
                  influence of the American Dream. Fitzgerald's writing style is
                  poetic and vivid, transporting the reader to the glamorous yet
                  troubled world of the Jazz Age.
                </p>
                <a
                  href="/educator"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    All This Could Be Different
                  </h5>
                </a>
                <p class="mb-3 font-normal text-black dark:text-gray-400">
                  "The Great Gatsby" is a novel by F. Scott Fitzgerald,
                  published in 1925. It tells the story of Jay Gatsby, a wealthy
                  and mysterious man who becomes obsessed with winning back his
                  former love, Daisy Buchanan. Set in the Roaring Twenties, the
                  book explores themes of love, wealth, and the corrupting
                  influence of the American Dream. Fitzgerald's writing style is
                  poetic and vivid, transporting the reader to the glamorous yet
                  troubled world of the Jazz Age.
                </p>
                <a
                  href="/landing"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Vladimir
                  </h5>
                </a>
                <p class="mb-3 font-normal text-black dark:text-gray-400">
                  "The Great Gatsby" is a novel by F. Scott Fitzgerald,
                  published in 1925. It tells the story of Jay Gatsby, a wealthy
                  and mysterious man who becomes obsessed with winning back his
                  former love, Daisy Buchanan. Set in the Roaring Twenties, the
                  book explores themes of love, wealth, and the corrupting
                  influence of the American Dream. Fitzgerald's writing style is
                  poetic and vivid, transporting the reader to the glamorous yet
                  troubled world of the Jazz Age.
                </p>
                <a
                  href="student/exam"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/student/resource">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    If I Survive You
                  </h5>
                </a>
                <p class="mb-3 font-normal text-black dark:text-gray-400">
                  "The Great Gatsby" is a novel by F. Scott Fitzgerald,
                  published in 1925. It tells the story of Jay Gatsby, a wealthy
                  and mysterious man who becomes obsessed with winning back his
                  former love, Daisy Buchanan. Set in the Roaring Twenties, the
                  book explores themes of love, wealth, and the corrupting
                  influence of the American Dream. Fitzgerald's writing style is
                  poetic and vivid, transporting the reader to the glamorous yet
                  troubled world of the Jazz Age.
                </p>
                <a
                  href="/student/resource"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/student">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Young Mungo
                  </h5>
                </a>
                <p class="mb-3 font-normal text-black dark:text-gray-400">
                  "The Great Gatsby" is a novel by F. Scott Fitzgerald,
                  published in 1925. It tells the story of Jay Gatsby, a wealthy
                  and mysterious man who becomes obsessed with winning back his
                  former love, Daisy Buchanan. Set in the Roaring Twenties, the
                  book explores themes of love, wealth, and the corrupting
                  influence of the American Dream. Fitzgerald's writing style is
                  poetic and vivid, transporting the reader to the glamorous yet
                  troubled world of the Jazz Age.
                </p>
                <a
                  href="/student"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/swiper">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Signal Fires
                  </h5>
                </a>
                <p class="mb-3 font-normal text-black dark:text-gray-400">
                  "The Great Gatsby" is a novel by F. Scott Fitzgerald,
                  published in 1925. It tells the story of Jay Gatsby, a wealthy
                  and mysterious man who becomes obsessed with winning back his
                  former love, Daisy Buchanan. Set in the Roaring Twenties, the
                  book explores themes of love, wealth, and the corrupting
                  influence of the American Dream. Fitzgerald's writing style is
                  poetic and vivid, transporting the reader to the glamorous yet
                  troubled world of the Jazz Age.
                </p>
                <a
                  href="/swiper"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                </a>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div
      // className="bg-orange-500 absolute top-0  h-20"
      // style={{ left: 200, paddingRight: "200px" }}
      >
        <StudentSideBar />
      </div>
    </div>
      </>
       ) : (
       <>
       <div className="text-5xl" style={{ text:"center", paddingTop:"200px", paddingLeft:"500px"}} >
        <h1> Login to access the resources</h1>
       </div>
        <LoginDashboard />
        </>
       )
      }
    

    </>
  );
}

export default Resource;
