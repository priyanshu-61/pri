import React from 'react'
import {  UilCommentAltMessage,UilUserCheck ,UilUsersAlt ,UilUserSquare} from '@iconscout/react-unicons'
import { Routes, Route, Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const Admin_user = () => {



  return (
    <>

      <div className='grid md:grid-cols-4 grid-cols-1  justify-items-center gap-10 p-5 mt-12'>
        <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
          <div className=' h-36 w-36 grid place-content-center text-darkblue '>
            <UilUserSquare size='100' />
          </div><br />
          <button className='bg-blue-900 text-white w-28 rounded-xl mb-5' >
            <NavLink to='Adduser'>Add User</NavLink>
          </button>
        </div>
        <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
          <div className=' h-36 w-36 grid place-content-center text-darkblue '>
            <UilUsersAlt  size='100' />
          </div><br />
          <button className='bg-blue-900 text-white  w-32 rounded-xl mb-5' >
            <NavLink to='Viewuser'>View All User</NavLink>
          </button>
        </div>
        <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
          <div className=' h-36 w-36 grid place-content-center text-darkblue '>
            <UilUserCheck  size='100' />
          </div><br />
          <button className='bg-blue-900 text-white  w-32 rounded-xl mb-5' >
            <NavLink to='ViewEnrolStud'>Purchase Course Detail</NavLink>
          </button>
        </div>
        <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
          <div className=' h-36 w-36 grid place-content-center text-darkblue '>
            <UilCommentAltMessage size='100' />
          </div><br />
          <button className='bg-blue-900 text-white  w-32 rounded-xl mb-5' >
            <NavLink to='ViewMessage'>Message</NavLink>
          </button>
        </div>
        <hr className='text-heading' />




        <Outlet />
      </div>

    </>
  )
}

export default Admin_user
