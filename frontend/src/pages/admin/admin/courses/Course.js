import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import AddCourse from './AddCourse'
import ViewCourse from './ViewCourse'
import Navbar from '../navbar/Navbar'
import { UilPlusCircle, UilCreateDashboard, UilBookReader, UilNotes, UilBookMedical, UilBookOpen, UilEye, } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



export default function Course() {
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
            <div className='mt-10 w-[100%] h-[100vh]  overflow-auto scrollbar-hide  '>
                {/* <Navbar/> */}
                <div className='grid grid-cols-1  md:grid-cols-3 justify-items-center gap-20 p-5'>
                    <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                        <div className=' h-36 w-36 grid place-content-center text-darkblue '>
                            <UilBookMedical size='100' />
                        </div><br />
                        <button className='bg-blue-900 text-heading text-white  w-28 rounded-xl mb-5' >
                            <NavLink to='AddCourse'>Add Course</NavLink>
                        </button>
                    </div>
                    <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                        <div className=' h-36 w-36 grid place-content-center text-darkblue '>
                            <UilBookReader size='100' />
                        </div><br />
                        <button className='bg-blue-900 text-heading text-white w-32 rounded-xl mb-5' >
                            <NavLink to='ViewCourse'>View Course</NavLink>
                        </button>
                    </div>
                    <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                        {count_data.map((c) => (
                            <h1 key={c._id} className='text-darkblue font-medium'>Total Courses: {c.course}</h1>
                        ))}
                    </div>
                </div>
                <hr className='text-heading' />
                <Outlet />
            </div>
        </>
    )
}
