import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
// import { useAuth } from "../../../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { UilTable, UilClock, UilPlay, UilRupeeSign } from '@iconscout/react-unicons';

const ByCourse = () => {
    const param = useParams();
    const [open, setOpen] = useState(0);
    const [result, setCourse] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const courseData1 = async () => {
        // console.log(auth.token)
        try {
            const { data } = await axios.get(`http://localhost:8000/api/v1/course/${param.id}`);
            setCourse(data.result);
            console.log(data.result);

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    useEffect(() => {
        courseData1();
    }, [])

    const courseData = [
        {
            courseName: result && result.title,
            coursePrice: result && result.selling_price,
            courseID: result && result._id,
        }
    ]
    const paymentInfo = {
        transactionId: "123452133",
        status: "success"
    };
    // console.log(result)

    const byCourse = async () => {
        try {
            const res = await axios.post("http://localhost:8000/api/v1/courseEnroll/new", {
                paymentInfo,
                courseData
            })
            final();
            toast.success("Success fully buy")
        }
        catch (error) {
            console.log(error);
            toast.error("You have already purchesed this course");
        }
        
    };
    function final() {
        setTimeout(() => {
            navigate("/dashboard")
        }, 2000);
    };
    
    const discounted = `${result && result.discounted_price}`;
    const selling = `${result && result.selling_price}`;
    const discount = ~(Number(discounted) - Number(selling));

    return (
        <>
        <ToastContainer/>
            <div className="h-[100vh] w-full  overflow-auto scrollbar-hide p-4 bg-slate-100 border border-red-600">
                <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto ">
                    <div className="flex justify-start item-start space-y-2 flex-col ">
                        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Purchase Course</h1>
                    </div>
                    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                        <div className="grid grid-cols-1      justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div className="flex flex-col   justify-start items-start  border border-black bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800" >Course Cart</p>
                                <table class="w-full p-2 text-left text-sm font-light rounded-lg  mt-4">
                                    <div className='grid grid-cols-1     items-center  '>
                                        <div className='flex   items-center'>
                                            <div class='bg-gray-600'>
                                                <img src="https://wallpapercave.com/wp/wp7420966.jpg" alt="" className=' object-cover h-24' /> </div>
                                            <div className=' w-full px-4 '>
                                                <h1 className='text-lg font-serif'>Course: &nbsp; {result && result.title} </h1>
                                                <div className='flex gap-1'><UilTable className='w-4 h-4 mt-1' />  <h1 className='text-sm font-serif '>Course Title: &nbsp; {result && result.title}</h1></div>
                                                <div className='flex gap-1'><UilClock className='w-4 h-4 mt-1' />  <h1 className='text-sm font-serif '>Course Time</h1></div>
                                                <div className='flex gap-1'><UilPlay className='w-4 h-4 mt-1' />  <h1 className='text-sm font-serif '>Total Lession</h1></div>
                                                <div className='flex'>
                                                    <UilRupeeSign UilTable className='w-4 h-4 mt-1' />
                                                    <div class="flex gap-2">
                                                        <span class=" text-red-500 line-through lg:text-sm font-bold "> {result && result.discounted_price}</span>
                                                        <span class="text-gray-600 font-bold   flex ml-2" > <UilRupeeSign UilTable className='w-4 h-4 mt-1' />{result && result.selling_price}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='text-right '>
                                            <div className="flex justify-end">
                                                <button onClick={byCourse} className='w-28 rounded-lg mt-2 bg-[#040239] text-sm font-serif hover:bg-[#040239]/80 duration-150 transition-shadow  text-white  h-8 m-2'>Buy now</button>
                                            </div>
                                        </div>
                                    </div>
                                </table>
                            </div>
                            <div className="flex  border border-black p-2  justify-center md:flex-row flex-col items-stretch w-full space-y-0 md:space-y-0 md:space-x-6 xl:space-x-8">
                                <div className="flex flex-col px-4  md:p-0 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                                    <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                        <div className="flex justify-between  w-full">
                                            <p className="text-base leading-4 text-gray-800">Selling Price</p>
                                            <p className="text-xl leading-4 text-gray-600">{result && result.discounted_price}</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base leading-4 text-gray-800">
                                                Discount
                                            </p>
                                            <p className="text-xl leading-4 text-gray-600">{discount}</p>
                                        </div>

                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                        <p className="text-xl font-semibold leading-4 text-gray-600">{result && result.selling_price}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>

                            {/* <!-- Snippet --> */}
                            <div class=" bg-gray-100 text-gray-600 md:-mt-20 mt-0  p-4">
                                <div class="h-full w-full md:w-[400px] ">
                                    {/* <!-- Pay component --> */}
                                    <div>
                                        {/* <!-- Card background --> */}
                                        <div class="px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
                                            <img class="rounded-t shadow-lg" src="https://wallpapercave.com/wp/wp7420966.jpg" width="460" height="180" alt="Pay background" />
                                        </div>
                                        {/* <!-- Card body --> */}
                                        <div class=" px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                                            <div class="bg-white px-8 pb-6 rounded-b shadow-lg">

                                                {/* <!-- Card header --> */}
                                       
                                                {/* 
                    <!-- Toggle --> */}
                                                <div class="flex justify-center mb-6 ">
                                                    <div class="relative flex w-full p-1 bg-gray-50 rounded">
                                                        <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                                                            <span class="absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out"  ></span>
                                                        </span>
                                                        <button class="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2">Pay With Card</button>
                                                        <button class="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2" >Pay With PayPal</button>
                                                    </div>
                                                </div>

                                                {/* <!-- Card form --> */}
                                                <div x-show="card">
                                                    <div class="space-y-4">
                                                        {/* <!-- Card Number --> */}
                                                        <div>
                                                            <label class="block text-sm font-medium mb-1" for="card-nr">Card Number <span class="text-red-500">*</span></label>
                                                            <input id="card-nr" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="1234 1234 1234 1234" />
                                                        </div>
                                                        {/* <!-- Expiry and CVC --> */}
                                                        <div class="flex space-x-4">
                                                            <div class="flex-1">
                                                                <label class="block text-sm font-medium mb-1" for="card-expiry">Expiry Date <span class="text-red-500">*</span></label>
                                                                <input id="card-expiry" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="MM/YY" />
                                                            </div>
                                                            <div class="flex-1">
                                                                <label class="block text-sm font-medium mb-1" for="card-cvc">CVC <span class="text-red-500">*</span></label>
                                                                <input id="card-cvc" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="CVC" />
                                                            </div>
                                                        </div>
                                                        {/* <!-- Name on Card --> */}
                                                        <div>
                                                            <label class="block text-sm font-medium mb-1" for="card-name">Name on Card <span class="text-red-500">*</span></label>
                                                            <input id="card-name" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="John Doe" />
                                                        </div>
                                                        {/* <!-- Email --> */}
                                                        <div>
                                                            <label class="block text-sm font-medium mb-1" for="card-email">Email <span class="text-red-500">*</span></label>
                                                            <input id="card-email" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="email" placeholder="john@company.com" />
                                                        </div>
                                                    </div>
                                                    {/* <!-- Form footer --> */}
                                                    <div class="mt-6">
                                                        <div class="mb-4">
                                                            <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Pay $253.00</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default ByCourse;