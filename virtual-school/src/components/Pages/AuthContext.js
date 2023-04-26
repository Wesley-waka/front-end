import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [change, setOnChange] = useState(false);

  let storedUser = localStorage.getItem("user");

  let parsedUser = null;
  try {
    parsedUser = JSON.parse(storedUser);
  } catch (e) {
    console.log("Error parsing user from localStorage:", e);
  }
  const [user, setUser] = useState(parsedUser || null);

  // responsible for the log in
  const login = (email, password) => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        // const { user, jwt } = response;
        // setOnChange(!change);
        // setUser(response.user);
        // console.log(user)
        // localStorage.setItem("user", JSON.stringify(user));
        // localStorage.setItem("jwt", response.jwt);
        // localStorage.setItem("email", response.user.email);
        if (response.student) {
          setOnChange(!change);
          setUser(response.student);
          console.log(user)
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("jwt", response.jwt);
          localStorage.setItem("email", user.email);
          // localStorage.setItem("school_name", school.school_name);
          sessionStorage.setItem("jwtToken", response.jwt);
          navigate("/student")
          // console.log(response)

        } else if (response.admin) {
          setOnChange(!change);
          setUser(response.admin);
          console.log(user)
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("jwt", response.jwt);
          localStorage.setItem("email", user.email);
          navigate("/admin")

        } else if(response.educator) {
          setOnChange(!change);
          setUser(response.educator);
          console.log(user)
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("jwt", response.jwt);
          localStorage.setItem("email", user.email);
          navigate("/educator")

        } else if (response.error) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
          });
        }
        //  else {
        //   setUser(user);
        //   sessionStorage.setItem("jwtToken", jwt);
        //   // localStorage.setItem("jwt", response.jwt);
        //   if (response.user.level === "admin") {
        //     const Toast = Swal.mixin({
        //       toast: true,
        //       position: "center",
        //       showConfirmButton: false,
        //       timer: 1000,
        //       timerProgressBar: true,
        //       didOpen: (toast) => {
        //         toast.addEventListener("mouseenter", Swal.stopTimer);
        //         toast.addEventListener("mouseleave", Swal.resumeTimer);
        //       },
        //     });
        //     Toast.fire({
        //       icon: "success",
        //       title: "Signed in successfully",
        //     });
        //     navigate("/admin");
        //   } else if (response.user.level === "student") {
        //     const Toast = Swal.mixin({
        //       toast: true,
        //       position: "center",
        //       showConfirmButton: false,
        //       timer: 1000,
        //       timerProgressBar: true,
        //       didOpen: (toast) => {
        //         toast.addEventListener("mouseenter", Swal.stopTimer);
        //         toast.addEventListener("mouseleave", Swal.resumeTimer);
        //       },
        //     });
        //     Toast.fire({
        //       icon: "success",
        //       title: "Signed in successfully",
        //     });

        //     navigate("/student");
        //   } else {
        //     const Toast = Swal.mixin({
        //       toast: true,
        //       position: "center",
        //       showConfirmButton: false,
        //       timer: 1000,
        //       timerProgressBar: true,
        //       didOpen: (toast) => {
        //         toast.addEventListener("mouseenter", Swal.stopTimer);
        //         toast.addEventListener("mouseleave", Swal.resumeTimer);
        //       },
        //     });
        //     Toast.fire({
        //       icon: "success",
        //       title: "Signed in successfully",
        //     });

        //     navigate("/educator");
        //   }
        // }
      });
  };
  // Register
  const register = (name, email, password) => {
    fetch("http://127.0.0.1:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setOnChange(!change);
        if (response.error) {
          // console.log(response.error)
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
          });
        } else {
          // setUser(response)
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Registered successfully!",
          });
          navigate("/login");
        }
      });
  };
  // logout

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
    navigate("/login");
  };
  // check if user is logged in
  useEffect(() => {
    fetch("http://127.0.0.1:3000/loggedin ", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setUser(response);
      });
  }, [change]);
  const contextData = {
    user: user,
    setUser: setUser,
    login: login,
    logout: logout,
    register: register,
  };

  return (
    <>
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
