import React, { useState } from 'react'
import { UilSearch,UilUserCircle,UilListUl ,UilListUiAlt,UilChart,UilCreateDashboard,UilBook,UilBookOpen,UilPresentationCheck,UilUsersAlt,UilSignOutAlt,UilTimesCircle} from '@iconscout/react-unicons'
import Sidebar from '../sidebar/Sidebar';
import { NavLink } from 'react-router-dom';
// import Switcher from '../../../darkmode/Switcher';
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
    <div id='mobileNav' className='sm:hidden transition delay-75 duration-300 ease-in-out bg-darkblue/80 absolute h-screen w-full mt-12 ' style={{
      'left':'-100%'
    }}>
   
      <ul className='mt-20 leading-[50px] text-heading grid place-content-center  ' >
            <li className='  flex  gap-2'>
              {/* <li><UilChart/></li> */}
             <NavLink to='/' className='-mt-2'>Dashboard</NavLink>
            </li>
            <li className='  flex  gap-2'>
              {/* <li><UilCreateDashboard/></li> */}
             <NavLink to='Category' className='-mt-2'>Category</NavLink>
            </li>
            <li className='  flex  gap-2'>
              {/* <li><UilBook/></li> */}
             <NavLink to='course' className='-mt-2'>Course</NavLink>
            </li>
            <li className='  flex  gap-2'>
              {/* <li><UilBookOpen/></li> */}
             <NavLink to='lesson' className='-mt-2'>Lesson</NavLink>
            </li>
            <li className='  flex  gap-2'>
              {/* <li><UilPresentationCheck/></li> */}
             <NavLink to='lecture' className='-mt-2'>Lecture</NavLink>
            </li>
            <li className='  flex  gap-2'>
              {/* <li><UilUsersAlt/></li> */}
             <NavLink to='student' className='-mt-2'>Student</NavLink>
            </li>
            <li className='  flex  gap-2'>
              {/* <li><UilSignOutAlt/></li> */}
             <NavLink to='logout' className='-mt-2'>Logout</NavLink>
            </li>
        </ul>
    </div>
     
    <div className='z-20 bg-darkblue     h-12 grid grid-cols-1 sm:grid-cols-3' style={{}}>
      <div className=' hidden sm:flex  px-2'>
        <img src={'https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png'} className='w-36'></img>
      </div>
      <div className=' col-span-2 py-3 border border-white overflow-hidden'>
        <ul className='text-heading flex justify-between  md:px-10'>
          <li onClick={openSideNav}><UilListUl className='block sm:hidden'/></li>
          <li className='hidden sm:block'>Home</li>
          <li className='hidden sm:block'>About</li>
          <li className='hidden sm:block '>Pricing</li>
          <li className='ml-44 sm:ml-0'>
            <div className='flex  rounded-xl w-28 bg-white '>
              <input type='text'
              placeholder='search'
              className='w-20 rounded-xl text-darkblue  pl-2' 
              value={search}
              onChange={e=>setSearch(e.target.value)}
              />
            <UilSearch className='text-darkblue rounded-md'
            onClick={()=>{console.log(search)}}
            />
            </div>
            </li>
          
           
          <li>
            <UilUserCircle  onClick={toggleMenu} className='cursor-pointer' />
            <div className='relative  ' 
            id='userPopup'
            >
              {isOpen && (
                  <div className="absolute bg-white p-2 w-28 text-darkblue top-full -left-10   rounded-md shadow-xl">
                    <a
                      href="Profile"
                      className="block py-1 "
                    >
                      Profile
                    </a>
                    <a
                      href="Setting"
                      className="block py-1 "
                    >
                      Setting
                    </a>
                    <a
                      href="/signout"
                      className="block py-1 "
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
