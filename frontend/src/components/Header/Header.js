import React, { useState, useEffect } from "react";
import Search from "../../pages/home/Search";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  UilUserCircle,
  UilListUl,
  UilCreateDashboard,
  UilUsersAlt,
  UilSignOutAlt,
  UilSetting,
  UilFolderQuestion,
} from "@iconscout/react-unicons";
import { useAuth } from "../../context/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UilDashboard } from "@iconscout/react-unicons";
import { AiOutlineRead } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { UilUser } from "@iconscout/react-unicons";
import Purchase from "../../pages/user/Course/Purchase/Purchase";

// import Category from "../Curriculum/Category";
import axios from "axios";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [close, Setopen] = useState(false);
  const [category, setCategory] = useState([]);
  const [user, setUser] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openmobile = () => {
    let icon = document.getElementById("mobile_menu");
    if (icon.style.left == "-100%") {
      icon.style.left = "0";
    } else {
      icon.style.left = "-100%";
    }
  };
  const showAvailableCourse = () => {
    let available_course = document.getElementById("available_course");
    if (available_course.style.height == "0px") {
      available_course.style.height = "100%";
    } else {
      available_course.style.height = "0px";
    }
  };

  const history = useNavigate();

  const [toggle, setToggle] = useState(true);
  const [auth, setAuth] = useAuth();

  const handleLogout = async (e) => {
    // console.log("hjggjgjgj")
    e.preventDefault();
    try {
      await axios.get("http://localhost:8000/api/v1/logout");

      // if (res && res.data.success) {
      //   toast.success(res.data && res.data.message);
      setAuth({
        ...auth,
        user: null,
        token: null,
      });
      localStorage.clear("token");

      navigate(location.state || "/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const toggleClose = () => {
    setToggle(false);
  };

  return (
    <>
      <nav className="fixed z-20 w-full ">

        <div className="fixed z-20 w-full bg-[#040239] flex sm:px-6 md:py-2 lg:px-8 ">
          <div className="relative w-full flex h-12 items-center justify-between ">
            <div className="absolute w-full inset-y-0 left-0 flex justify-between  md:hidden ">
              <div className="mt-5">
                <button onClick={openmobile}>
                  <UilListUl className="block md:hidden text-white" />
                </button>
              </div>
            </div>
            <div className="flex flex-1 items-center  sm:items-stretch justify-start">
              <div className="hidden md:block lg:mt-1 md:mt-1  w-full">
                {!auth?.user ? (
                  <div className="flex justify-between w-full">
                    <div>
                      <ul className="flex space-x-4">
                        <li className="flex">
                          <Link to="/">
                            <img
                              className="w-32"
                              src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                              alt="Cybrom"
                            />
                          </Link>
                        </li>
                        <li
                          id="home1"
                          className="text-gray-300 hover:text-white px-3 py-2 font-base "
                        >
                          <Link onClick={toggleMenu} to="/">
                            Home
                          </Link>
                        </li>
                        <li
                          id="home2"
                          className="text-gray-300 px-3 py-2 font-base hover:text-white"
                        >
                          <Link onClick={toggleMenu} to="/all_course">
                            Courses
                          </Link>

                        </li>
                        <li
                          id="home2"
                          className="text-gray-300 px-3 py-2 font-base hover:text-white"
                        >
                          <Link onClick={toggleMenu} to="/contact_us">
                            Contact Us
                          </Link>
                        </li>
                        <li
                          id="home2"
                          className="text-gray-300 px-3 py-2 font-base hover:text-white"
                        >
                          <Link onClick={toggleMenu} to="/AboutUs">
                          About Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <button className="bg-blue-500 px-8 tracking-widest py-1 md:py-2 text-lg hover:border-b-2 border-white font-medium rounded-md text-white">
                        <Link to="/Login">Login</Link>
                      </button>
                    </div>

                  </div>
                ) : (

                  <ul className="flex space-x-4 ">
                    {auth.user.role === "admin" && (
                      <>
                        <li className="flex ">
                          <Link to="/">
                            <img
                              className="h-12"
                              src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                              alt="Cybrom"
                            />
                          </Link>
                        </li>
                        <li className="text-white   rounded-md px-3 py-2 text-lg hover:border-b-2 border-white  font-medium">
                          <NavLink
                            onClick={toggleClose}
                            to="/dashboard"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        {/* <li className="text-white hover:bg-[#0f0c5c] hover:text-white rounded-md px-3 py-2 text-lg hover:border-b-2 border-white  font-medium">
                          <NavLink
                            onClick={toggleClose}
                            to="/admin/course-info"
                          >
                            Course-Info
                          </NavLink>
                        </li>
                        <li className="text-white hover:bg-[#0f0c5c] hover:text-white rounded-md px-3 py-2 text-lg hover:border-b-2 border-white  font-medium">
                          <NavLink
                            onClick={toggleClose}
                            to="/admin/student-info"
                          >
                            Student-Info
                          </NavLink>
                        </li>
                        <li className="text-white hover:bg-[#0f0c5c] hover:text-white rounded-md px-3 py-2 text-lg hover:border-b-2 border-white  font-medium">
                          <NavLink
                            onClick={toggleClose}
                            to="/admin/teacher-info"
                          >
                            Teacher-Info
                          </NavLink>
                        </li> */}

                      </>
                    )}
                    {auth.user.role === "user" && (
                      <>
                        <div className="flex justify-between w-full ">
                          <div className="">
                            <ul className="flex gap-10">
                              <li className="" >
                                <Link to="/">
                                  <img
                                    className=" h-10 w-64    "
                                    src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                                    alt="Cybrom"
                                  />
                                </Link>
                              </li>
                              <li className="text-base text-white mt-2"><Link to="/dashboard">Dashboard</Link>
                              </li>
                              <li className="text-base text-white mt-2"><Link to="/dashboard/Purchase">Courses</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="w-full   flex justify-end">
                            <ul className="text-heading    flex gap-4  ">
                              <li className="  ">
                                <div class="max-w-md  ">
                                  <div class="relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                                    <div class="grid place-items-center h-full w-12 text-gray-300">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                      </svg>
                                    </div>
                                    <input
                                      class="peer h-full w-full outline-none text-sm text-gray-700 pr-32"
                                      type="text"
                                      id="search"
                                      placeholder="Search something.."
                                    />
                                  </div>
                                </div>
                              </li>

                              <li className=" block z-120">
                                <UilUserCircle
                                  onClick={toggleMenu}
                                  className="cursor-pointer text-white w-10 h-10"
                                />
                                <div className="relative" id="userPopup">
                                  {isOpen && (
                                    <div className="absolute bg-gradient-to-tr from-blue-100 to-blue-900 p-2 w-64 text-[#0f0333]  top-full -left-52 py-6  mt-4 rounded-md shadow-xl">
                                      <div class="max-w-xs">
                                        <div class=" bg-transparent shadow-xl rounded-lg py-3">
                                          <div class="photo-wrapper p-2">
                                            <img
                                              class="w-32 h-32 rounded-full mx-auto"
                                              src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                                              alt={auth.user.name}
                                            />
                                          </div>
                                          <div class="p-2">
                                            <h2 class="text-center text-sm text-white font-medium leading-8">
                                              {auth.user.name}
                                            </h2>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mt-2 border-b border-black">
                                        <Link to="dashboard/Profile" className=" gap-2 py-1 flex  hover:bg-gray-200">
                                          <UilUserCircle /> Profile
                                        </Link>
                                        <Link
                                          to="/dashboard"
                                          className="gap-2 py-1 flex  hover:bg-gray-200 "
                                        >
                                          <UilCreateDashboard />
                                          Go To Dashboard
                                        </Link>
                                        <Link to="/Login" className="gap-2 py-1 flex hover:bg-gray-200" onClick={handleLogout
                                        }>
                                          <UilSignOutAlt /> Sign Out
                                        </Link>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}

        <div
          className="z-10  absolute w-screen h-screen duration-500 ease-in-out  md:hidden bg-[#040239]/80   text-center"
          id="mobile_menu"
          style={{ left: "-100%" }}
        >
          {!auth?.user ? (
            <ul className="leading-[50px] text-heading grid gap-y-8 mt-20 place-content-center text-center">
              <>
                <li>
                  <img
                    src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                    className="w-30 h-14"
                  />
                </li>
                <li className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-lg hover:border-b-2 border-white  font-medium">
                  <Link onClick={openmobile} to="/">
                    Home
                  </Link>
                </li>
                <li className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-lg hover:border-b-2 border-white  font-medium">
                  <Link onClick={openmobile} to="/all_course">
                    Courses
                  </Link>
                </li>
                <li className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-lg hover:border-b-2 border-white  font-medium">
                  <Link onClick={openmobile} to="/contact_us">
                    Contact Us
                  </Link>
                </li>
                <li className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-lg hover:border-b-2 border-white  font-medium">
                  <Link onClick={openmobile} to="/AboutUs">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Login" >
                <button className="bg-blue-500 px-8 tracking-widest py-1 md:py-2 text-lg hover:border-b-2 border-white font-medium rounded-md text-white">
                        Login
                      </button>
                      </Link>
                      </li>
              </>
            </ul>
          ) : (
            <ul className="block space-y-4 ">
              {auth.user.role === "admin" && (
                <>
                  <li className="mt-12 flex justify-center">
                    <img
                      src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                      className="w-24 h-14"
                    />
                  </li>
                  <li className="text-white   rounded-md px-3 py-2 text-lg   font-medium">
                    <NavLink onClick={openmobile} to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="text-white   rounded-md px-3 py-2 text-lg   font-medium">
                    <Link onClick={openmobile} to="dashboard/Category">
                      Category
                    </Link>
                  </li>
                  <li className="text-white  rounded-md px-3 py-2 text-lg   font-medium">
                    <NavLink onClick={openmobile} to="dashboard/course">
                      Course
                    </NavLink>
                  </li>
                  <li className="text-white  
                   rounded-md px-3 py-2 text-lg  font-medium">
                    <NavLink onClick={openmobile} to="dashboard/lesson">
                      Lesson
                    </NavLink>
                  </li>
                  <li className="text-white  
                   rounded-md px-3 py-2 text-lg  font-medium">
                    <NavLink onClick={openmobile} to="dashboard/user">
                      User
                    </NavLink>
                  </li>
                  <li className="">
                    <button
                      className="bg-blue-500 px-8 tracking-widest py-1 md:py-2 text-lg  font-medium rounded-md text-white"
                      onClick={openmobile}
                    >
                      <Link to="/Login">Logout</Link>
                    </button>
                  </li>
                </>
              )}
              {auth.user.role === "user" && (
                <>
                  <li>
                    <li className="text-heading   px-8 flex gap-4   ">
                      <li className="  ">
                        <div class="max-w-md mx-auto ">
                          <div class="relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                            <div class="grid place-items-center h-full w-12 text-gray-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                              </svg>
                            </div>
                            <input
                              class="peer h-full w-full outline-none text-sm text-gray-700 pr-32"
                              type="text"
                              id="search"
                              placeholder="Search something.."
                            />
                          </div>
                        </div>
                      </li>
                    </li>
                  </li>
                  <ul className="  leading-[50px] text-heading grid gap-y-8  place-content-center text-center ">
                    {/* ________________ */}

                    {/* _________________________ */}
                    <li>
                      <img
                        src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                        className="w-30 h-14"
                      />
                    </li>

                    <li className="flex gap-x-2 text-white">
                      <i
                        className={`cursor-pointer  duration-500 ${open && ""}`}
                      >
                        <UilDashboard className=" " />
                      </i>
                      <Link to="/dashboard" onClick={openmobile}>
                        <h1
                          className={`text-white origin-left font-medium text-lg duration-200 ${!open && "scale-0"
                            }`}
                        >
                          DashBoar
                        </h1>
                      </Link>
                    </li>
                    {/* <!-------HTML------> */}
                    <li className="flex gap-x-2 text-white">
                      <li>
                        <AiOutlineRead className="  w-8" size={25} />
                      </li>
                      <span
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                        <Link
                          to="/dashbord/"
                          onClick={openmobile}
                          className=" items-center p-2  rounded-lg dark:text-white"
                        >
                          <span
                            className="flex -mt-8 text-left text-lg "
                            onClick={showAvailableCourse}
                          >
                            Category
                            <AiFillCaretUp
                              className={` cursor-pointer ml-4 mt-2 w-7 text-white  ${!close && "rotate-180"
                                }`}
                              onClick={() => Setopen(!close)}
                            />
                          </span>
                        </Link>
                        <ul
                          id="available_course"
                          className=" text-lg overflow-hidden duration-500 -mt-8"
                        >
                          {category?.map((c) => (
                            <div key={c._id}>
                              <Link
                                onClick={openmobile}
                                to={`category/${c._id}`}
                              >
                                <li>{c.catName}</li>
                              </Link>
                            </div>
                          ))}
                        </ul>
                      </span>
                    </li>
                    <li className="flex gap-x-2 text-white ">
                      <i
                        className={`cursor-pointer  duration-500 ${open && ""}`}
                      >
                        <UilFolderQuestion className="" />
                      </i>
                      <Link to="CourseCategory" onClick={openmobile}>
                        <h1
                          className={`text-white origin-left font-medium text-lg duration-200 ${!open && "scale-0"
                            }`}
                        >
                          All Course
                        </h1>
                      </Link>
                    </li>
                    {/* <!------------ end setting---------> */}
                    <li className="flex gap-x-2 text-white">
                      <i
                        className={`cursor-pointer duration-500 ${open && ""}`}
                      >
                        <UilSignOutAlt className="" />
                      </i>
                      <Link onClick={openmobile} to="/login">
                        <h1
                          className={`text-white origin-left font-medium text-lg duration-200 ${!open && "scale-0"
                            }`}
                        >
                          Sign Out
                        </h1>
                      </Link>
                    </li>
                    <li className="flex gap-x-2 text-white">
                      <i
                        className={`cursor-pointer  duration-500 ${open && ""}`}
                      >
                        <UilUser className="" />
                      </i>
                      <Link to="/Profile" onClick={openmobile}>
                        <h1
                          className={`text-white origin-left font-medium text-lg duration-200 ${!open && "scale-0"
                            }`}
                        >
                          Profile
                        </h1>
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </ul>
          )}
        </div>

        {/* _____________________________________________________________ */}
      </nav>
    </>
  )
}
export default Header;