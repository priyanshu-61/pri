import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineRead } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { UilUser } from '@iconscout/react-unicons'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { UilEnvelopeExclamation, UilFolderQuestion } from '@iconscout/react-unicons'
import { UilDashboard } from '@iconscout/react-unicons'
import Dashboard from "../Dashboard/Dashboard";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import Profile from "../Profile/Profile";
import { useAuth } from "../../../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import 'flowbite';


const Sdbar = () => {
  useEffect(() => {
    getAllCategory();
  }, [])

  const [category, setCategory] = useState([]);
  const [close, setClose] = useState(false)
  const [opens, Setclose] = useState(false)
  const [Opens, Sclose] = useState(false)
  const [open, setOpen] = useState(true);
  const [auth, setAuth] = useAuth();
  const [open1, setOpen1] = useState(false);


  const navigate = useNavigate();
  const location = useLocation();


  const showAvailableCourse = () => {
    let available_course1 = document.getElementById("available_course");
    console.log(available_course1.style.height)
    // available_course.style.display="none"
    if (available_course1.style.height == "0px") {
      available_course1.style.height = "10rem";
    } else {
      available_course1.style.height = "0px";
    }
  };


  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.get("http://localhost:8000/api/v1/logout");
      setAuth({
        ...auth,
        user: null,
        token: null,
      });
      localStorage.clear("token");
      navigate(location.state || "/");
    }

    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/show_category");
      setCategory(data.category);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    setOpen1(!open1);
  };



  return (
    <>
      <section className=" hidden md:block fixed  h-screen">
        <div
          className={`bg-[#0f0333] min-h-screen ${open ? "w-52" : "w-16"
            } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div>
            <ul className="mt-20">
              <li className="flex gap-2">
                <i className={`cursor-pointer h-10 duration-500 ${open && ""
                  }`}><UilDashboard className="h-6 w-6 mx-2" /></i>
                <Link to='/dashboard'>
                  <h1 className={`text-white origin-left font-medium text-base duration-200 ${!open && "scale-0"
                    }`}>DashBoard</h1>
                </Link>
              </li>
              <li className="flex gap-2 ">
                <i className={`cursor-pointer h-10 duration-500 ${open && ""
                  }`}><UilUser className="h-6 w-6 mx-2" /></i>
                <Link to='/dashboard/Profile'>
                  <h1 className={`text-white origin-left font-medium text-base duration-200 ${!open && "scale-0"
                    }`}>Profile</h1>
                </Link>
              </li>
              <li className="flex">
                {/* <li><AiOutlineRead className=" h-4 w-8" /> </li>
                <span className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                  }`}>
                  <a
                    href="#"
                    className=" items-center p-2 rounded-lg dark:text-white"
                  >
                    <span
                      className="flex -mt-8 text-left text-[12px]"
                      onClick={showAvailableCourse}
                    >
                      Category<AiFillCaretUp className={` cursor-pointer ml-4 mt-2 w-7 text-white  ${!close && "rotate-180"}`}
                        onClick={() => setClose(!close)} />
                    </span>
                  </a>
                  <ul
                    id="available_course"
                    className="text-[12px] overflow-hidden duration-500 -mt-8">
                    {category?.map((c) => (
                      <div key={c._id}>
                        <Link to={`category/${c._id}`}>
                          <li>{c.catName}</li></Link>
                      </div>
                    ))}
                  </ul>
                    </span> */}
                <AiOutlineRead className="h-6 w-6 mx-2" />
                <div>
                  <button onClick={handleOpen} className="flex">Category<AiFillCaretUp className={` cursor-pointer ml-4 mt-2 w-7 text-white  ${!close && "rotate-180"}`}
                        onClick={() => setClose(!close)} /></button>
                  {open1 ? <div className="duration-500">
                    <ul
                    id="available_course"
                    className="text-base font-medium  mt-2">
                    {category?.map((c) => (
                      <div key={c._id}>
                        <Link to={`category/${c._id}`}>
                          <li className="mt-1">{c.catName}</li></Link>
                      </div>
                    ))}
                  </ul>
                  </div> : <div></div>}
                </div>

              </li>
              <li className="flex gap-2 mt-4">
                <i className={`cursor-pointer h-10 duration-500 ${open && ""
                  }`}><UilFolderQuestion className="h-6 w-6  mx-2" /></i>
                <Link to="/dashboard/Purchase">
                  <h1 className={`text-white origin-left font-medium text-[13px] duration-200 ${!open && "scale-0"
                    }`}>All Course</h1>
                </Link>
              </li>
              <li className="flex gap-2 ">
                <i className={`cursor-pointer h-10 duration-500 ${open && ""
                  }`}><UilSignOutAlt className="h-6 w-6 px-1" /></i>
                <Link onClick={handleLogout}>
                  <h1 className={`text-white origin-left font-base duration-200 ${!open && "scale-0"
                    }`}>Sign Out</h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section >
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
    </>
  );
};

export default Sdbar;