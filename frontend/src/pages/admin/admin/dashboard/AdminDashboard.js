import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import RecentAccessed from '../recent/RecentAccessed'
import { UilUserCircle, UilUserCheck, UilBook } from '@iconscout/react-unicons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
export default function Dashboard() {

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
      <div className='mt-10 h-screen overflow-auto scrollbar-hide'>
        {/* <Navbar/> */}
        <div className='transition ease-in-out duration-700'>
              
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  p-5 gap-10 px-10'>
            {count_data.map((c) => (<>
            <div key={c._id} className=' text-white bg-blue-900 rounded-xl  p-2 h-28 flex justify-between'>
              <div><UilUserCircle size='80'/></div>
              <div>
                <h1 className='text-2xl font-medium'>{c.user}</h1>
                <h1 className='text-2xl'>Users</h1>
              </div>
            </div>
            <div className=' text-white bg-orange-600 rounded-xl p-2 h-28 flex justify-between'>
              <div><UilUserCheck size='80' /></div>
              <div>
                <h1 className='text-2xl font-medium'>{c.courseEnrolldata}</h1>
                <h1 className='text-2xl '>Enroll student</h1>
              </div>
            </div>
            <div className=' text-white bg-blue-900 dark:bg-gray rounded-xl  p-2 h-28 flex justify-between'>
              <div><UilBook size='80' /></div>
              <div>
                <h1 className='text-2xl font-medium'>{c.category}</h1>
                <h1 className='text-2xl '>Total Category</h1>
              </div>
            </div>
            <div className=' text-white bg-blue-900 dark:bg-gray rounded-xl  p-2 h-28 flex justify-between'>
              <div><UilBook size='80' /></div>
              <div>
                <h1 className='text-2xl font-medium'>{c.course}</h1>
                <h1 className='text-2xl '>Total Courses</h1>
              </div>
            </div>
            </>
            ))}
            
          </div>
          <hr className='w-[95%] mx-auto' />
          <Outlet />
        </div>

      </div>
    </>
  )
}
