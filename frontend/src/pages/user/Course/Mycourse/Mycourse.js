import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { UilNotebooks, UilTable, UilClock, UilPlay, UilUserCircle } from '@iconscout/react-unicons';
import Empty from './empty.png'

export default function Mycourse() {

  const [your_Orders, setCourse] = useState();
  const param = useParams();
  const [auth, setAuth] = useAuth();

  const courseData1 = async () => {
    // console.log(auth.token)
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/courseEnroll/me", {
        headers: {
          authorization: auth?.token
        }
      });
      console.log(data.your_Orders);
      setCourse(data.your_Orders);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    courseData1();
  }, [])
  const arr = [your_Orders]
  var order = 0;
  if (your_Orders && your_Orders.length === 0) {
    order = 0;
  }
  else {
    order = 1;
  };
  console.log(order)

  return (
    <div className='md:ml-[12.5rem] ml-0 mt-16 md:w-[66.2rem] w-full'>
      <div class="bg-red-100 py-5 md:px-96 md:w-full w-96">
        <div className='flex'>
          <UilNotebooks className='h-14 w-10 ml-12' />
          <h1 class="text-2xl text-gray-800 p-2 ml-1">My Course</h1>
        </div>
      </div>
      <div class="flex md:mx-10 ml-2 py-10 md:ml-16 rounded-lg">
        <div class="">
          <div class="block md:w-full py-2 sm:px-6 lg:px-8 items-center">
            {order === 1 && (
              <>
                {your_Orders && your_Orders.map((c, i) => (
                  <div key={c._id} class="rounded-xl border-2 p-5 border-red-500 mb-5">
                    <div class=" text-left text-sm font-light  ">
                      <div className='grid lg:grid-cols-2 grid-cols-1 justify-between items-center  '>
                        <div className='lg:flex block  items-center'>
                          <div class='bg-gray-600'>
                            <img src="https://wallpapercave.com/wp/wp7420966.jpg" alt="" className=' object-cover w-80' /> 
                            </div>
                          <div className=' w-full px-10 space-y-2'>

                            {c?.courseData?.map((p, i) => (
                              <>
                                <h1 className='text-lg font-semibold p-1'>{p?.courseId}</h1>
                                <h1 className="text-gray-800 cursor-pointer flex"><span><UilUserCircle /></span>Cybrom</h1>
                                <hr />
                                <div key={p._id} className='flex gap-1'><UilTable className='w-4 h-4 mt-1' /> <h1 className='text-sm font-semibold '>Title : {p.courseName}</h1></div>

                              </>))}
                            <div className='flex gap-1'><UilPlay className='w-4 h-4 mt-1' />  <h1 className='text-sm font-semibold '>Buy on : {c?.createdAt.substring(0, 10)}</h1></div>
                          </div>
                        </div>
                        <div className='text-center lg:text-right mt-10 w-full'>
                          {c?.courseData?.map((p) => (
                            <button key={p._id} className='w-full lg:w-28 rounded-lg mr-5 hover:bg-slate-400 text-sm font-semibold hover:text-white duration-150 transition-shadow    border-2 border-red-500 h-8'><Link to={"/dashboard/Mycourse/" + (p?.courseID)}>View now</Link></button>))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}</>
            )}
            {order === 0 && (<>
              <div className='flex justify-center md:ml-80 ml-20'>
                <div className='block'>
                  <div className='w-60 h-60'>
                    <img src={Empty} alt="safasd" />
                  </div>
                  <div className='' >
                    <h1 className='text-center text-slate-500 text-xl font-semibold mt-5'>You Don't have Course</h1>
                    <div className='w-full flex justify-center mt-5'>
                      <button className=' border-2  text-white  p-4 rounded-sm font-semibold bg-gray-900' ><Link to="/dashboard/Purchase">Browse Course</Link></button>
                    </div>
                  </div>
                </div>
              </div>
            </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}