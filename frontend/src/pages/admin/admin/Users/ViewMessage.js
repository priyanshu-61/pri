import React, { useState, useEffect, } from "react";
import { useParams } from "react-router-dom"
import { UilEditAlt, UilTrashAlt, UilEye } from '@iconscout/react-unicons'
import axios from "axios";
import { Link, Outlet, NavLink } from "react-router-dom";
import { UilShare } from '@iconscout/react-unicons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UilNotebooks, UilBookOpen, UilTable, UilClock, UilPlay, UilRupeeSign } from '@iconscout/react-unicons'


const ViewMessage = () => {
    const [message, setMessage] = useState([]);
    //get all user
    const getAllMessage = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/v1/allMessage");
            setMessage(data.message)
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    };
    //lifecycle method
    useEffect(() => {
        getAllMessage();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `http://localhost:8000/api/v1/deleteMessage/${id}`,
            );
            getAllMessage()
            toast.success("Message Deleted Successfully");
            //navigate("/dashboard/admin/products");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <div className="flex overflow-x-scroll  md:w-[800px] w-3/4 md:scrollbar-hide scrollbar-hide flex-col ml-60 ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-12">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Sr no</th>
                                    <th scope="col" className="px-6 py-4">Email</th>
                                    <th scope="col" className="px-6 py-4">Message</th>
                                    <th scope="col" className="px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {message?.map((l, index) => (

                                    <>
                                        <tr key={l._id} className="border-b dark:border-neutral-500">
                                            <td className="px-4 py-4 font-medium">{index + 1}</td>
                                            <td className="px-4 py-4 text-gray-700">{l.email}</td>
                                            <td className="px-4 py-4 text-gray-700">{l.message}</td>
                                            <td className="px-3 py-4">
                                                <button className='bg-gray-900 text-white rounded-md text-[12px] px-1 mx-1'
                                                    onClick={() => {
                                                        handleDelete(l._id);
                                                    }}><UilTrashAlt /></button>
                                            </td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                            <ToastContainer />
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ViewMessage;

