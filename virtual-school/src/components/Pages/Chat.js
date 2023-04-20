import React from "react";
import LoginDashboard from "./LoginDashboard";
import StudentSideBar from "./StudentSideBar";
function Chat() {
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  return (
    <>
    { isLoggedIn ? (
      <div>
        <StudentSideBar />
      </div>
    )
  : (
    <>
    <div className="text-5xl" style={{ text:"center", paddingTop:"200px", paddingLeft:"500px"}} >
     <h1> Login to access the chat section</h1>
    </div>
     <LoginDashboard />
     </>
  )
  }
      
    </>
  );
}

export default Chat;
