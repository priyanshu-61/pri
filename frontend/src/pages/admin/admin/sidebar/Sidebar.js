import React from 'react'
import { UilListUiAlt,UilChart,UilCreateDashboard,UilBook,UilBookOpen,UilPresentationCheck,UilUsersAlt,UilSignOutAlt } from '@iconscout/react-unicons'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../../../../context/auth";


export default function Sidebar() {
  const sideNav=document.getElementById('sideNav')
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();



  const openSideMenu=()=>{
    if(sideNav.style.width==='25px'){
  
      sideNav.style.width='150px'
    }else{
      sideNav.style.width='25px'
    }
  }


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

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
    <div  className='hidden md:block h-screen shadow-md overflow-hidden text-white bg-[#040239] transition delay-100 duartion-500 ease-in-out ' id='sideNav'
    style={{
      'width':'25',
      
    }}
    >
      <UilListUiAlt className='text-white cursor-pointer float-right ' onClick={openSideMenu} id='sideMenuIcon'/>
        <ul className='mt-20 px-20 mr-10 pt-10 leading-[70px]'>
            <li className='  flex  gap-2'>
              <li><UilChart/></li>
             <NavLink to='/dashboard' className='-mt-5 text-white'>Dashboard</NavLink>
            </li>
            <li className='  flex  gap-2'>
              <li><UilCreateDashboard/></li>
             <NavLink to='Category' className='-mt-5'>Category</NavLink>
            </li>
            <li className='  flex  gap-2'>
              <li><UilBook/></li>
             <NavLink to='course' className='-mt-5'>Course</NavLink>
            </li>
            <li className='  flex  gap-2'>
              <li><UilBookOpen/></li>
             <NavLink to='lesson' className='-mt-5'>Lesson</NavLink>
            </li>
            <li className='  flex  gap-2'>
              <li><UilUsersAlt/></li>
             <NavLink to='user' className='-mt-5'>Users</NavLink>
            </li>
            <li className='  flex  gap-2'>
              <li><UilSignOutAlt/></li>
             <NavLink onClick={handleLogout} className='-mt-5'>Logout</NavLink>
            </li>
        </ul>

    </div>

    
      
    </>
  )
}
