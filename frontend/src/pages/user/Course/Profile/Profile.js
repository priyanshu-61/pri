import React, { useEffect, useState } from 'react'
import { UilUser, UilEdit } from '@iconscout/react-unicons'
import { useAuth } from "../../../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation, Outlet, Link, Navigate } from "react-router-dom";
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShowform] = useState(false);
  console.log(name);
  console.log(email);
  const profileData = async () => {
    // console.log(auth.token)
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/me", {
        headers: {
          authorization: auth.token
        }
      });
      setUser(data.user);
      // console.log(data.user);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    profileData();
  }, [auth.token]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("dsa")
      // axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const { data } = await axios.put("http://localhost:8000/api/v1/me/update", {
        name,
        email
      });

      if (data?.errro) {
        console.log("kkr")
        toast.error("jhrtrwewq");
      } else {
        console.log("kkb")
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        console.log(ls)
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
        setTimeout(() => {
          navigate(location.state || "/dashboard");
        }, 2000)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200)
  });
  
  return (
    <>
      {isLoading === false && <div className='flex'>
        <div>
          <div className=" scrollbar-hide ml-0 w-full mt-16 md:ml-40 lg:w-[69rem]">
            <div className=" bg-gradient-to-tr from-red-200 to-blue-800 ">
              <div class="bg-gray-200 p-5">
                <h1 class="text-2xl text-gray-800">User Dashboard</h1>
              </div>
            </div>
            <div className='md:px-60 px-0'>
              {!show && <div className=" md:w-auto w-96">
                <div className="bg-white mt-4 shadow overflow-hidden sm:rounded-lg  border border-black md:px-10">
                  <div className="px-5 mt-12 flex justify-center rounded-lg">
                    <img className="h-32 w-32 bg-white p-2 rounded-full" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="" />
                  </div>
                  <div className="border-t border-gray-200 md:w-auto">
                    <div className=" px-0 py-5  sm:gap-4 sm:px-6 ">
                      <p className="text-xl font-medium text-gray-500 mt-5"><span className='mr-8'>Name: </span>{user.name}</p>
                    </div>
                    <div className="bg-white px-4 py-5 sm:gap-4 sm:px-6">
                      <p className="text-xl font-medium text-gray-500 mt-5">
                        <span className='mr-9'>Email: </span>{user.email}
                      </p>
                    </div>
                    <div className="mt-5 text-center mb-4 md:space-x-3 md:block ">
                      <button className="mb-2 md:mb-0 bg-blue-400 px-10 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500" onClick={() => setShowform(!show)}>Edit</button>
                    </div>
                  </div>
                </div>
              </div>
              }
              {show && <div className='w-full'>
                <div className="bg-white  w-full border border-black mt-4  shadow overflow-hidden sm:rounded-lg">
                  <div className="px-5 mt-12 md:first-letter:ml-12   ml-0 rounded-lg  md:flex block">
                    <div className='text-2xl font-semibold '>
                      <label htmlFor="">Profile Image</label>
                    </div>
                    <div className='md:ml-10 ml-0 '>
                      <input type="file" className='h-20' />
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="border-t border-gray-200">
                      <dl>
                        <div className=" px-4 py-5  sm:gap-4 sm:px-6">
                          <input
                            type="name"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Name"
                            required
                            onChange={(e) => setName(e.target.value)}
                            className="w-40 text-center text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                          />
                        </div>
                        <div className="bg-white px-4 py-5  sm:gap-4 sm:px-6">
                          <input
                            type="email"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-40 text-center text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                          />
                        </div>
                        <div className="mt-5 text-center mb-4 md:space-x-3 block">
                          <button className="mb-2 w-40 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500" onClick={() => setShowform(!show)}>Back</button>
                          <button className="mb-2 w-40 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500">Update</button>
                        </div>
                      </dl>
                    </div>
                  </form>
                </div>
              </div>}
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>}
      {isLoading === true && <div className='flex'>
        <div>
        <SkeletonTheme />
          <div className="scrollbar-hide ml-0 mt-10 md:ml-40 lg:w-[70rem]">
              <h1 className=' w-full p-6 ml-5'><Skeleton className='p-10' /></h1>
            <div className='md:px-60'>
              {!show && <div className=" md:w-auto w-96">
             
                <div className="bg-white mt-4 shadow overflow-hidden sm:rounded-lg  border border-black md:px-10">
                  <div className="px-5 mt-12 flex justify-center rounded-lg">
                    <Skeleton className="w-96 bg-white p-2 rounded-full" />
                  </div>
                  <div className="border-t border-gray-200 md:w-auto">
                    <div className=" px-0 py-5  sm:gap-4 sm:px-6 ">
                      <p className="text-xl font-medium text-gray-500 mt-5"><Skeleton/></p>
                    </div>
                    <div className="bg-white px-4 py-5 sm:gap-4 sm:px-6">
                      <p className="text-xl font-medium text-gray-500 mt-5">
                      <Skeleton/>
                      </p>
                    </div>
                    <div className="mt-5 text-center mb-4 md:space-x-3 md:block ">
                      <button className="mb-2 md:mb-0 px-10 py-2 text-sm text-white rounded-full"><Skeleton/></button>
                    </div>
                  </div>
                </div>
              </div>
              }
              {show && <div className='w-full'>
                <div className="bg-white mx-auto border border-black mt-4 shadow overflow-hidden sm:rounded-lg">
                  <div className="px-5 mt-12 ml-12 rounded-lg flex">
                    <div className='text-2xl font-semibold'>
                      <label htmlFor=""><Skeleton/></label>
                    </div>
                    <div className='ml-10'>
                      <input type="file" className='h-20' />
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="border-t border-gray-200">
                      <dl>
                        <div className=" px-4 py-5  sm:gap-4 sm:px-6">
                          <input
                            type="name"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Name"
                            required
                            onChange={(e) => setName(e.target.value)}
                            className="w-45 text-center text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                          />
                        </div>
                        <div className="bg-white px-4 py-5  sm:gap-4 sm:px-6">
                          <input
                            type="email"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-45 text-center text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                          />
                        </div>
                        <div className="mt-5 text-center mb-4 md:space-x-3 md:block flex flex-col-reverse">
                          <button className="mb-2 md:mb-0 bg-blue-400 px-1 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500" onClick={() => setShowform(!show)}>Back</button>
                          <button className="mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500"><Skeleton/></button>
                        </div>
                      </dl>
                    </div>
                  </form>
                </div>
              </div>}
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>}
    </>
  )
}
export default Profile;