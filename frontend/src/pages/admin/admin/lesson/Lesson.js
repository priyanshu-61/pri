import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import AddLessons from './AddLesson'
import Navbar from '../navbar/Navbar'
import { UilBookOpen, UilBooks } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Lesson() {


  const [count_data, setCount_data] = useState([]);

    const Count = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/v1/count/data");
            setCount_data(data.count_data)
            console.log(data.count_data)
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    };
    useEffect(() => {
        Count();
    }, []);

  return (
    <>
      <div className='mt-12 ml-5 w-full h-[100vh]  overflow-auto scrollbar-hide  '>
        {/* <Navbar/> */}
        <div className='grid md:grid-cols-3 grid-cols-1  justify-items-center gap-20 p-5'>
          <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
            <div className=' h-36 w-36 grid place-content-center text-darkblue '>
              <UilBooks size='100' />
            </div><br />
            <button className='bg-blue-900 text-white w-28 rounded-xl mb-5' >
              <NavLink to='AddLesson'>Add Lessons</NavLink>
            </button>
          </div>
          <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
            <div className=' h-36 w-36 grid place-content-center text-darkblue '>
              <UilBookOpen size='100' />
            </div><br />
            <button className='bg-blue-900 text-white  w-32 rounded-xl mb-5' >
              <NavLink to='Viewlesson'>View Lessons</NavLink>
            </button>
          </div>
          <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
            {count_data.map((c) => (
              <h1 key={c._id} className='text-darkblue font-medium'>Total Lessons : {c.lesson}</h1>
            ))}
          </div>

        </div>
        <hr className='text-heading' />
        <Outlet />
      </div>
    </>
  )
}
