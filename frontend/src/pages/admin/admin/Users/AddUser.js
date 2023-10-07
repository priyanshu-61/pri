import React, { useEffect, useState } from 'react'
//import { useNavigate, } from "react-router-dom";
import axios from 'axios';
import { Select } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//dafsghjkhl
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";

//ghjkhl;k'
const { Option } = Select;

const Adduser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [formValues, setFormValues] = useState({ name:name, email:email, password:password, });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
  
    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
      }
    }, [formErrors]);
  
    const navigate = useNavigate();
    const location = useLocation();
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.name) {
        errors.name = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
  
      try {
        const res = await axios.post("http://localhost:8000/api/v1/register", formValues);
        console.log(res);
        if (res && res.data.success) {
          console.log(res);
          toast.success(res.data && res.data.message);
          navigate("");
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
        <div className=" ">
          <div className="flex justify-center  ">
            <div className="block md:flex  justify-center h-[35rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] md:mt-32 mt-10 bg-white py-5">
              
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
                        Don't have an account ?
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
                        type="text"
                        name="name"
                        placeholder="Username"
                        value={formValues.name}
                        onChange={handleChange}
                        className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                      />
                      <p className="text-red-500">{formErrors.name}</p>
                      <div class="text-sm text-left font-bold text-gray-700 tracking-wide md:mt-10]">
                        Email Address
                      </div>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={handleChange}
                        className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white"
                      />
                      <p className="text-red-500">{formErrors.email}</p>
  
                      <div class="text-sm text-left font-bold text-gray-700 tracking-wide pt-1">
                        Password
                      </div>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange}
                        className="w-full text-lg py-2 bg-white border-b border-black focus:outline-none focus:border-indigo-500"
                      />
                      <p className="text-red-500">{formErrors.password}</p>
                    </div>
                    <div className="text-center mt-10">
                      <button
                        type="submit"
                        className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md  font-bold  text-white  hover:brightness-105  bg-gray-900 "
                      
                      >
                        <span id="loading">SingUp</span>
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

export default Adduser
