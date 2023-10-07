import React from 'react'
import Navbar from '../navbar/Navbar'
import AddLecture from './AddLecture'
import { Outlet } from 'react-router-dom'
import { UilPlusCircle,UilCreateDashboard,UilBookReader,UilNotes,UilBookMedical,UilBookOpen,UilEye, } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'
export default function Lecture() {
  return (
    <>
      <div className=' w-[100%] h-[100vh]  overflow-auto scrollbar-hide  '>
        
        <div className='grid grid-cols-4 justify-items-center gap-20 p-5'>
            <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                <div className=' h-36 w-36 grid place-content-center text-darkblue '>
                    <UilBookMedical size='100' />
                </div><br/>
                <button className='bg-darkblue text-heading  w-28 rounded-xl mb-5' >
                    <NavLink to='/Lecture/AddLecture'>Add Lectures</NavLink>
                 </button>
            </div>
            <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                <div className='h-36 w-36 grid place-content-center text-darkblue '>
                    <UilBookReader size='100' />
                </div><br/>
                <button className='bg-darkblue text-heading  w-32 rounded-xl mb-5' >
                    <NavLink to='/Lecture/ViewLecture'>View Lectures</NavLink>
                 </button>
            </div>
            <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                <h1 className='text-darkblue font-medium'>Total Lectures:</h1>
            </div>
        </div> 
        <Outlet/>
    </div>  
    </>
  )
}