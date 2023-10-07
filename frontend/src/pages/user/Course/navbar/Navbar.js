import React, { useState } from 'react'
import { UilSearch,UilUserCircle,UilListUl ,UilListUiAlt,UilChart,UilCreateDashboard,UilBook,UilBookOpen,UilPresentationCheck,UilUsersAlt,UilSignOutAlt,UilTimesCircle} from '@iconscout/react-unicons'

import { NavLink } from 'react-router-dom';
export default function Navbar() {
  var mobileNav=document.getElementById('mobileNav')
  const [search,setSearch]=useState('')
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function openSideNav(){
    if(mobileNav.style.left==='-100%'){
      console.log("eklfnqe")
      mobileNav.style.left='0'
    }
    else{
      mobileNav.style.left='-100%'
      
    }
  }
  return (
    <>
    <div id='mobileNav' className='sm:hidden ease-linear bg-[#0f0333]/90 duration-100  absolute h-screen w-full mt-12 ' style={{
      'left':'-100%'
    }}>
   
      <ul className='mt-20 leading-[50px] text-heading grid place-content-center  ' >
        <li>
          <img src='https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png' className='w-30 h-14'/>
        </li>
            <li className=' text-center text-gray-400 hover:text-white hover:font-bold border-b-2'>
              {/* <li><UilChart/></li> */}
             <NavLink to='/' className='-mt-2  '>Dashboard</NavLink>
            </li>
            <li className='text-center  text-gray-400 hover:text-white hover:font-bold border-b-2'>
              {/* <li><UilCreateDashboard/></li> */}
             <NavLink to='Category' className='-mt-2'>Category</NavLink>
            </li>
            <li className='text-center  text-gray-400 hover:text-white hover:font-bold border-b-2'>
              {/* <li><UilBook/></li> */}
             <NavLink to='course' className='-mt-2'>Course</NavLink>
            </li>
            <li className='text-center  text-gray-400 hover:text-white hover:font-bold border-b-2'>
              {/* <li><UilBookOpen/></li> */}
             <NavLink to='lesson' className='-mt-2'>Lesson</NavLink>
            </li>
            <li className='text-center  text-gray-400 hover:text-white hover:font-bold border-b-2'>
              {/* <li><UilPresentationCheck/></li> */}
             <NavLink to='lecture' className='-mt-2'>Lecture</NavLink>
            </li>
            <li className='text-center  text-gray-400 hover:text-white hover:font-bold border-b-2'>
              {/* <li><UilUsersAlt/></li> */}
             <NavLink to='student' className='-mt-2'>Student</NavLink>
            </li>
            <li className='text-center  text-gray-400 hover:text-white hover:font-bold border-b-2'>
              {/* <li><UilSignOutAlt/></li> */}
             <NavLink to='logout' className='-mt-2'>Logout</NavLink>
            </li>
        </ul>
    </div>
     
    <div className='z-20 bg-[#0f0333]  h-12 grid grid-cols-1 sm:grid-cols-3'>
      <div className='p-2 hidden sm:flex'>
        <img src={'https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png'} className='w-36'></img>
      </div>
      <div className=' col-span-2 p-3'>
        <ul className='text-heading flex justify-between  md:px-10'>
          <li onClick={openSideNav}><UilListUl className='block sm:hidden text-white'/></li>
          <li className='hidden sm:block'>Home</li>
          <li className='hidden sm:block'>About</li>
          <li className='hidden sm:block '>Pricing</li>
          <li className='ml-42 sm:ml-0'>
            <div className='flex rounded-xl w-28 bg-white border-none '>
              <input type='text'
              placeholder='search'
              className='w-20 rounded-xl border-none text-blue-900  pl-2' 
              value={search}
              onChange={e=>setSearch(e.target.value)}
              />
            <UilSearch className='text-black rounded-md'
            onClick={()=>{console.log(search)}}
            />
            </div>
            </li>
          <li>
            <UilUserCircle  onClick={toggleMenu} className='cursor-pointer text-white' />
            <div className='relative  ' 
            id='userPopup'
            >
              {isOpen && (
                  <div className="absolute bg-white p-2 w-24 text-[#0f0333]  top-full -left-20 py-6  rounded-md shadow-xl">
                    <a
                      href="Profile"
                      className="block py-1 border-b border-black"
                    >
                      Profile
                    </a>
                    <a
                      href="Setting"
                      className="block py-1 border-b border-black "
                    >
                      Setting
                    </a>
                    <a
                      href="/signout"
                      className="block py-1 border-b border-black"
                    >
                      Sign Out
                    </a>
                  </div>
                )}
            </div>
          </li>
        </ul>
        
      </div>

    </div>
      
    </>
  )
}
