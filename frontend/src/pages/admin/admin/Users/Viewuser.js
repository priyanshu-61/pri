import React, { useState, useEffect, } from "react";
import { useParams } from "react-router-dom"
import { UilEditAlt, UilTrashAlt, UilEye } from '@iconscout/react-unicons'
import axios from "axios";
import { Link, Outlet, NavLink } from "react-router-dom";
import { UilShare } from '@iconscout/react-unicons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UilNotebooks, UilBookOpen, UilTable, UilClock, UilPlay, UilRupeeSign } from '@iconscout/react-unicons'


const Viewuser = () => {
  const param = useParams();
  const [user, setUsers] = useState([]);
  //get all user
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/admin/users");
      setUsers(data.users)
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  //lifecycle method
  useEffect(() => {
    getAllUsers();
  }, []);
  // Delete user
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/admin/user/${id}/`,
      );
     
      if (data.success) {
        toast.success(`Category Deleted successfully`);
        getAllUsers()
       } else {
         toast.error(data.msg);
       }
     } catch (error) {
       toast.error("Somtihing went wrong");
     }
    };
  return (
    <div className="flex overflow-x-scroll  md:w-[800px] w-3/4 md:scrollbar-hide scrollbar-hide flex-col ml-1">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-12">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Sr no</th>
                  <th scope="col" className="px-6 py-4">User Name</th>
                  <th scope="col" className="px-6 py-4">User Email</th>
                  <th scope="col" className="px-6 py-4">Role</th>
                  
                  <th scope="col" className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {user?.map((l, index) => (
                    
                  <>
                    <tr key={l._id} className="border-b dark:border-neutral-500">
                      <td className="px-4 py-4 font-medium">{index + 1}</td>
                      <td className="px-4 py-4 text-gray-700">{l.name}</td>
                      <td className="px-4 py-4 text-gray-700">{l.email}</td>
                      <td className="px-4 py-4 text-gray-700">{l.role}</td>
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

export default Viewuser;

