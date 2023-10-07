import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
// import { useAuth } from "../../context/auth";


const Profileupdate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/v1/register", {
                name,
                email
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error("jijjj");
            }
        } catch (error) {
            console.log(error);
            toast.error("Som went wrong");
        }
    };
    return (
        <>
            <div className=" ">
                <div className="flex justify-center  ">
                    <div className="block md:flex  justify-center h-[32rem] w-[60rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] md:mt-32 mt-10 bg-white py-5">
                        <div className="mt-6">
                            <h1 className=" text-center text-4xl tracking-widest text-blue-900 font-bold ">
                                Welcome to <span className="text-red-900">Cybrom</span>
                            </h1>
                            <img src="login.jpg" className="hidden sm:block ml-8 md:ml-0 w-80 md:w-96 md:mt-5" alt="" />
                        </div>
                        <form
                            name="myfname"
                            onSubmit={handleSubmit}
                            id="demo"
                            className="ml-0 md:ml-6"
                            method="post"
                        >
                            <Outlet />
                            <div className="flex justify-center  shadow w-full md:w-96 ">
                                <div className="h-[29rem] bg-white w-96 md:w-80 p-8 md:p-0  ">
                                    <div className="  space-y-2">
                                        <div className="flex-col justify-center items-center ">
                                            <h2
                                                class="text-center text-4xl text-indigo-900 font-display font-semibold  xl:text-5xl
                    xl:text-bold"
                                            >
                                                Sign Up
                                            </h2>
                                        </div>
                                        <div className="text-right pt-3">
                                            Don't have an account ?{" "}
                                            <Link
                                                to="/Signup"
                                                className="hover:underline text-gray-900 hover:text-blue-600"
                                            >
                                                Signup
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center  mt-0 space-y-2 ">
                                        <div class="text-sm text-left font-bold text-gray-700 tracking-wide mt-8 ">
                                            Enter Name
                                        </div>
                                        <input
                                            type="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            id="exampleInputEmail1"
                                            placeholder="Enter Your Name"
                                            required
                                            className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                                        />
                                        <div class="text-sm text-left font-bold text-gray-700 tracking-wide md:mt-10]">
                                            Email Address
                                        </div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            id="exampleInputEmail1"
                                            placeholder="Enter Your Email "
                                            required
                                            className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white"
                                        />

                                        <div class="text-sm text-left font-bold text-gray-700 tracking-wide pt-11">
                                            Password
                                        </div>
                                        
                                    </div>
                                    <div className="text-center mt-10">
                                        <button
                                            type="submit"
                                            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md  font-bold  text-white  hover:brightness-105  bg-gray-900 "
                                        // onClick={loadin}
                                        >
                                            <span id="loading">SingUp</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profileupdate;
