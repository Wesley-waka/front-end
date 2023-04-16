import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Login() {
  // const [login, setLogin] = useState()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userType, setUserType] = useState("student");
  const navigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
    setUserType("");

    fetch(" http://localhost:5001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        userType,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          console.log(response.message);
        } else {
          if (userType === "Admin") {
            navigate("/admin");
          } else if (userType === "Educator") {
            navigate("/educator");
          } else if (userType === "Student") {
            navigate("/student");
          } else {
            console.log("Invalid user type");
          }
        }
      });
  };

  return (
    <div>
      <div className="items-center pt-5 pl-32" style={{ paddingLeft: "500px" }}>
        <a href="/">
          <h1
            className="text-5xl text-blue-800 font-bold pb-5 pl-20"
            style={{ paddingLeft: "140px" }}
          >
            V<span className="text-5xl text-yellow-400 ">S </span>
          </h1>
        </a>

        <div className="w-full max-w-sm p-4 bg-white border border-black rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={ProceedLogin}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h5>
            <div>
              <label
                // for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
              block w-full 
              p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="virtualschool@gmail.com"
                required
              />
            </div>
            <div>
              <label
                // for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex flex-col ml-10 rounded-2xl">
                  <label className="">
                    Login as
                    <select
                      className="p-1 border"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      style={{ marginLeft: "5px" }}
                    >
                      <option value="Select">Select</option>
                      <option value="Admin">Admin</option>
                      <option value="Educator">Educator</option>
                      <option value="Student">Student</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <div></div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <NavLink
                to="/signup"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
