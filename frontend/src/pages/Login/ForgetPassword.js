import React, { useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useAuth } from "../../context/auth";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const Forgetpassword = async (e) => {
        toast.success("Email send");
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/v1/password/forgot/", {
                email
            });
            toast.info("Check your Email!", {
                position: "top-right"
            });
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", {
                position: "top-right"
            });
        }
    };
    return (
        <>
            <div className=" ">
                <div className="flex justify-center  ">
                    <div className="block md:flex  justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] md:mt-32 mt-10 bg-white p-10">
                        <form
                            name="myfname"
                            onSubmit={Forgetpassword}
                            id="demo"
                            className="ml-0"
                            method="post"
                        >
                            <Outlet />
                            <div className="flex justify-center  shadow w-full md:w-96 md:py-10">
                                <div className="bg-white w-96 md:w-80 p-8 md:p-0  ">
                                    <div className="  space-y-2">
                                        <div className="flex-col justify-center items-center ">
                                            <h2
                                                class="text-center text-4xl text-indigo-900 font-display font-semibold  xl:text-3xl xl:text-bold"
                                            >
                                                Reset Your Password
                                            </h2>
                                        </div>

                                    </div>
                                    <div className="flex flex-col justify-center  mt-0 space-y-2 ">
                                        <div class="text-sm text-left font-bold text-gray-700 tracking-wide mt-8">
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
                                    </div>
                                    <div className="text-center mt-10">
                                        <button
                                            type="submit"
                                            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md  font-bold  text-white  hover:brightness-105  bg-gray-900 "
                                        >
                                            <span id="loading">Reset</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};
export default ForgetPassword;
