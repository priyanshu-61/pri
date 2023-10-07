import React, { useState } from "react";
// import SettingsBrightnessSharpIcon from "@mui/icons-material/SettingsBrightnessSharp";
// import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
// import Login from "./Login";
// import Signup from "../Signup";
// import Reg from "../Reg";
// import Search from "../../pages/home/Search";
// import Log from "../Log";
// import MenuSharpIcon from "@mui/icons-material/MenuSharp";
// import { IconButton } from "@material-ui/core";
// import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
// import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";


const auth = 'admin';


const Header = () => {

  const openmobile = () => {
    let icon = document.getElementById("mobile_menu");
    if (icon.style.marginTop == "-100%") {
      icon.style.marginTop = "0%";
    } else {
      icon.style.marginTop = "-100%";
    }
  };

  const history = useNavigate();
  // const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [auth, setAuth] = useAuth();
  console.log(auth)
  // const user = JSON.parse(localStorage.getItem("user"));
  const toggleClose = () => {
    setToggle(false)

  }
  return (
    <>
      <nav className="fixed z-50     w-full">
        <div className=" w-full bg-[#040239]    px-2 sm:px-6 lg:px-8  ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                id="openmenue"
                onClick={openmobile}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/* <MenuSharpIcon className="" /> */}
              </button>
            </div>
            <div className="flex flex-1 items-center  sm:items-stretch justify-start">
              <div className="flexflex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="block h-10 md:w-auto w-24  lg:hidden md:mt-6  sm:mt-4"
                    src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                    alt="Cybrom"
                  />
                  <img
                    className="hidden h-10 my-5  w-auto lg:block mt-0 lg:mt-6 "
                    src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                    alt="Cybrom"
                  />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6 sm:mt-6 lg:mt-6 md:mt-6">
                {auth && (
                  <ul className="flex space-x-4">
                    {
                      auth === "admin" && <>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/admin/teacher-info">Dashboard</NavLink>
                        </li>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/admin/course-info">Course-Info</NavLink>
                        </li>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/admin/student-info">Student-Info</NavLink>
                        </li>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/admin/teacher-info">Teacher-Info</NavLink>
                        </li>
                        {/* <Search /> */}
                      </>
                    }
                    {
                      auth.user.role === "user" && <>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/">Dashboard</NavLink>
                        </li>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/ucam">UCAM</NavLink>
                        </li >

                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/library">LIBRARY</NavLink>
                        </li>
                        <li className="ml-80">
                          {/* <Search /> */}
                        </li>

                      </>
                    }
                    {
                     auth.user.role === " " && <>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <Link onClick={toggleClose} to="/profile">All Course</Link>
                        </li>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/all-courses">About Us</NavLink>
                        </li>
                        <li className="">
                          <button
                            className="bg-blue-500 ml-[45rem] px-8 tracking-widest py-1 md:py-2 text-sm font-medium rounded-md text-white"
                          ><Link to="/Login">Login</Link></button>
                        </li>
                      </>
                    }
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className="z-10 relative  transition duration-700 ease-in-out  md:hidden bg-gray-800 border text-center"
          id="mobile_menu"
          style={{ marginTop: "-100%" }}
        >
          <a
            href="#"
            className="text-gray-300  block rounded-md px-3 py-2 text-base font-medium"
            aria="page"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            {/* <IconButton>
              <VisibilityOffIcon />
            </IconButton> */}
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Destination
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Teachers
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Beneifits
          </a>

        </div>
        {/* <Search /> */}
      </nav>
    </>
  );
}
export default Header;

