import { Link, Outlet, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { UilNotebooks, UilShare, UilUserCircle, UilUserCheck, UilBook } from '@iconscout/react-unicons'
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { useAuth } from "../../../../context/auth";



const Dashboard = () => {
  const [courses, setCourse] = useState([]);
  const [auth, setAuth] = useAuth();

  const getAllCourse = async () => {
    try {
      // setLoading(true);
      const { data } = await axios.get("http://localhost:8000/api/v1/courses");
      // setLoading(false);
      setCourse(data.courses);
      console.log(data.courses)
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };
  console.log(auth.user.role)

  return (
      <>
    {/* <div className=" w-full  h-full flex justify-center   "> */}
        <div className="md:ml-[12.5rem] ml-3 mt-12 lg:mt-16 scrollbar-hide bg-slate-100  ">
          <div className="bg-gray-200 py-4 w-full">
            <h1 className="text-2xl text-gray-800">User Dashboard</h1>
          </div>
          <main className="container  px-5 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 p-4">
              {/* <!-- Course Listings --> */}
              <div className="bg-sky-200 h-36  rounded shadow">
                <NavLink to="Profile"><div className=" flex py-4 text-sm">
                  <div className="">
                    <i className="">  <UilUserCircle className="h-16 w-14  p-1 mt-7 text-sky-700" /></i>
                  </div>
                  <div className=" block my-8 lg:text-lg md:text-sm sm:text-[15px] text-sky-600 ">
                    <p>Student</p>
                    <h2 className="text-lg font-bold mb-4">Profile</h2>
                  </div>
                  {/* <div className="mt-9  ml-2 text-center text-3xl font-bold"><h1></h1></div> */}
                </div></NavLink>
              </div>
              {/* 
        <!-- Progress Tracker --> */}
              <div className="bg-red-100 h-36 rounded shadow">
                <Link to="Mycourse"><div className="flex">
                  <div>
                    <i className=" text-red-800">  <UilNotebooks className="h-14 w-14  p-1 mt-7" /></i>
                  </div>
                  <div className="py-8 ml-2 text-red-800">
                    <p>Course</p>
                    <h2 className="text-lg font-bold mb-4">My Coures</h2>
                  </div>
                    {/* <div className="mt-9  ml-2 text-center text-3xl font-bold"><h1>+235</h1></div> */}

                </div></Link>

              </div>

              {/* <!-- User Information --> */}
              <div className="bg-blue-200 h-36 rounded shadow" onClick={getAllCourse}>
                <Link to="Purchase"><div className="flex mt-4">
                  <div>
                    <i className=" text-blue-800">  <UilShare className="h-14 w-14  p-1 mt-7" /></i>
                  </div>
                  <div className="py-8 ml-2 text-blue-800">
                    <p>Course</p>
                    <h2 className="text-lg font-bold mb-4">Purchase Course</h2>
                  </div>
                  {/* <div className="mt-9  ml-2 text-center text-3xl font-bold"><h1>+25</h1></div> */}

                </div></Link>
              </div>
            </div>
          </main>
          <Outlet />
          <section className=" bg-slate-100 body-font border-t-2 ">
            <div className="container px-5 py-8 ">
              <div className="">
                <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  ">
                  <div className="border-r-4 md:hide border-r-red-800 px-6 w-50">
                    <h5 className="text-[17px] font-bold">Reacently Course</h5>
                    <h1 className="text-[35px] font-bold">Accessed </h1>
                  </div>
                  <div className=" mx-auto ">
                    <p className=" mx-6 float-left first: text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mt-3 -m-4 ">
                <div className="p-4 w-96 ">
                  <div className="h-[20rem] border-2 border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-36 md:h-36 w-full object-cover object-center" src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/html.jpg" alt="blog" />
                    <div className="p-1">
                      <h1 className=" text-[25px] font-bold text-orange-600">HTML</h1>
                      <p className="leading-relaxed mb-3">The HTML Online  course free provide in this online  plateform</p>
                      <div className="flex items-center flex-wrap ">
                        <a href="#" className="text-indigo-500 bg-blue-800 text-white  w-full h-8 inline-flex items-center md:mb-2 lg:mb-0">
                          <h1 className=" mx-auto">
                            Learn more..
                          </h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* </div> */}
      </>
  )

}
export default Dashboard;

