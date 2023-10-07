import React, { useState } from 'react'
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import Typewriter from "typewriter-effect";
import { UilCalling } from '@iconscout/react-unicons'
import { UilCommentAltDots } from '@iconscout/react-unicons'
import axios from "axios";
import Footer from "./Footer"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useAuth } from "../../context/auth";
const Contact_us = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // form function

    const handleMessage = async (e) => {
        e.preventDefault();
        console.log("chal gaya")
        try {
            const res = await axios.post("http://localhost:8000/api/v1/contactus", {
                email,
                message
            });
            console.log(res)
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <>
        <ToastContainer />
            <div className=''>
                <div id="firstcontainer" className="  grid grid-cols-1 md:grid-cols-2 bg-slate-300 h-auto md:h-[42rem] pt-10" >
                    <div className="mt-20">

                        <div className=" md:text-start text-center lg:w-[450px] w-full mt-10 ml-0 md:ml-5 lg:ml-24 ">
                            <h1 className="md:text-[40px] text-4xl font-bold text-[#040239]">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        delay: 80,
                                        loop: true,
                                        strings: [
                                            "Get in touch",
                                        ],
                                    }}
                                />
                            </h1>
                            <br />
                            <p>
                                Want to get in touch? We'd love to hear from you. Here's how you can reach us...
                            </p>
                            <button
                                className="relative btn4 mt-12 px-10 py-5 border border-black uppercase text-blue-500 font-semibold tracking-wider leading-none overflow-hidden"
                                type="button"
                            >
                                <span className="absolute inset-x-0 h-3 bottom-0 bg-blue-500"></span>
                                For Know about it...
                                <span className="text-#de5e18">
                                    <PhoneForwardedIcon />
                                </span>
                            </button>
                            <div>

                            </div>
                        </div>

                    </div>
                    <div className="mt-10 w-full   flex justify-end md:w-[30rem] lg:w-full  lg:ml-0 md:ml-10 pb-10">
                        <img src="h2.jpg" className=" h-[35rem] mr-0 lg:mr-32 rounded-l-[50%] rounded-r-[20%]" alt="" />
                    </div>

                </div>
                <div className='w-full md:block hidden md:-mt-64' >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,32L60,69.3C120,107,240,181,360,213.3C480,245,600,235,720,202.7C840,171,960,117,1080,85.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
            </div>
            {/* ______________________________________first div end hear ________________________________________________________*/}
            <div className='w-full mt-10 '>
                <div className='grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-32 gap-8'>
                    <div className='block  bg-slate-200'>
                        <div className='flex justify-center mt-6'>
                            <UilCalling size="100" />
                        </div>
                        <div className='p-8'>
                            <h1 className='text-blue-500 text-center font-midium'>Talk to More info</h1>
                            <h1 className='text-center font-semibold text-xl py-6'>Interested in HubSpot’s software? Just pick up the phone to chat with a member of our sales team.</h1>

                        </div>
                    </div>
                    <div className=' bg-slate-200'>
                        <div className='flex justify-center mt-6'>
                            <UilCommentAltDots size="100" />

                        </div>
                        <div className='p-8'>
                            <h1 className='text-blue-500 text-center font-midium'>Talk to More info</h1>
                            <h1 className='text-center font-semibold text-xl py-6'>Interested in HubSpot’s software? Just pick up the phone to chat with a member of our sales team.</h1>

                        </div>
                    </div>

                </div>
            </div>
            <h1 className='my-10 text-4xl text-center font-semibold'>Connect with one of our global offices</h1>


            {/* __________________________________________resistraion form___________________________________ */}

            <div className=" relative w-full h-full pb-20 md:mb-0 mb-96">
                <div className="flex justify-center  ">
                    <div className="block md:flex  justify-center h-[32rem] w-[60rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] md:mt-32 mt-10 bg-white py-5">
                        <div className="mt-4">
                            <iframe loading="lazy"
                                src="https://maps.google.com/maps?q=Cybrom%20Technology%20bhopal&#038;t=m&#038;z=12&#038;output=embed&#038;iwloc=near"
                                title="Cybrom Technology bhopal"
                                aria-label="Cybrom Technology bhopal"
                                className='w-[30rem] h-[28rem]'
                            ></iframe>
                        </div>
                        <form
                            name="myfname"
                            onSubmit={handleMessage}
                            id="demo"
                            className="ml-0 md:ml-6"
                            method="post"
                        >
                            <Outlet />
                            <div className="flex justify-center  shadow w-full md:w-96 ">
                                <div className="h-[29rem] bg-white w-96 md:w-80 p-8 md:p-0  ">
                                    <div className="  space-y-0">
                                        <div className="flex-col justify-center items-center ">
                                            <h2
                                                class="text-center text-2xl text-indigo-900 font-display font-semibold  xl:text-2xl xl:text-bold"
                                            >
                                                Contact Us
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center  mt-0 space-y-6 ">
                                        <div class="text-sm text-left font-bold text-gray-700 tracking-wide pt-5">
                                            Email
                                        </div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            id="exampleInputEmail1"
                                            placeholder="Enter Your Email "
                                            required
                                            className="w-full text-lg py-0 bg-white border-b border-black focus:outline-none focus:border-indigo-500" />

                                        <div class="text-sm text-left font-bold text-gray-700 tracking-wide pt-3">
                                            PassWord
                                        </div>
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            id="exampleInputEmail1"
                                            placeholder="Enter Your Email "
                                            required
                                            className="w-full text-lg py-0 bg-white border border-black focus:outline-none focus:border-indigo-500" />
                                    </div>
                                    <div className="text-center mt-10">
                                        <button
                                            type="submit"
                                            className="uppercase px-24 md:px-20 lg:px-[110px] py-2 rounded-md font-bold text-white  hover:brightness-105  bg-gray-900 "
                                        >
                                            <span id="loading">Contact</span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* ___________________________________________footer______________________________________________ */}
            <Footer />
        </>
    )
}

export default Contact_us