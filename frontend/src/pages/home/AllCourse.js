import React, { useEffect, useState } from "react";
// import Login from "./Login";
import { Link, NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import {
    UilUserCircle,
    UilPlayCircle 
  } from "@iconscout/react-unicons";




export default function AllCourse() {
  const param = useParams();
  console.log(param)
  const [courses, setCourse] = useState([]);

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

  const countLesson = async () => {
    try {
      // setLoading(true);
      const { data } = await axios.get(`http://localhost:8000/api/v1/lesson/count/${param.id}`);
      // setLoading(false);
      setCourse(data.courses);
      console.log(data)
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };
  

  useEffect(() => {
    getAllCourse();
  }, []);

  return (
      <div className="bg-white justify-center items-center py-2">
        <div className="w-full h-10 bg-gray-200">
          <h1 className="text-2xl text-center font-bold">All Course</h1>
        </div>
        <div className="md:px-10 md:grid md:grid-cols-2 lg:grid-cols-3 space-y-4 md:space-y-0 py-8 md:gap-4">
          {courses?.map((p) => (
            <div key={p._id}>
            <div className=" w-72 h-96 mb-5 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <div className="relative">
                <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80" alt="Colors" />
                <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
              </div>

              <h1 className="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">{p.title}</h1>
              <div className="my-1">
                <div className="flex space-x-2 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <p>Cybrom</p>
                </div>
                <div className="flex space-x-1 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  <p>{p.category}</p>
                </div>
                <div className="flex item-center mt-2">
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <Link to={`${p._id}`}>
                  <button className=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg"><Link to="/login">View Lession</Link></button></Link>
              </div>
            </div>

          </div>))}
        </div>
      </div>
  )
}
