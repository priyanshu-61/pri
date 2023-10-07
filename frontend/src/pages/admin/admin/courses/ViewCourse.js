import React, { useState, useEffect, } from "react";
import { useParams } from "react-router-dom"
import { UilEditAlt, UilTrashAlt, UilEye } from '@iconscout/react-unicons'
import axios from "axios";
import { Link, Outlet, NavLink } from "react-router-dom";
import { UilShare } from '@iconscout/react-unicons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UilNotebooks, UilBookOpen, UilTable, UilClock, UilPlay, UilRupeeSign } from '@iconscout/react-unicons'


const ViewCourse = () => {
  const param = useParams();
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  // const [catName, setName] = useState("");
  // const [visible, setVisible] = useState(false);
  // const [selected, setSelected]= useState(null);
  // const [id, setId] = useState("");
  const [result, setCourse] = useState();



  //get all courses
  const getAllCourses = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/courses/");
      setCourses(data.courses)
      console.log(data.courses)
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllCourses();
  }, []);



  // Delete Course
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/course/${id}`,

      );
      getAllCourses()
      toast.success("Course Deleted Successfully");
      //navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex flex-col ml-10">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Sr no</th>
                  <th scope="col" className="px-6 py-4">Course Name</th>
                  <th scope="col" className="px-6 py-4">Category</th>
                  <td scope='col' className="px-6 py-4">Description</td>
                  <td scope='col' className="px-6 py-4">Selling Price</td>
                  <td scope='col' className="px-6 py-4">Discounted Price</td>
                  <td scope='col' className="px-6 py-4">Duration</td>
                  <td scope='col' className="px-6 py-4">Action</td>
                </tr>
              </thead>
              <tbody>
                {courses && courses?.map((p, index) => (
                  <>
                    <tr key={p._id} className="border-b dark:border-neutral-500 ">
                      <td className="px-6 py-4 font-medium">{index + 1}</td>
                      <td className="px-6 py-4 max-w-lg break-all">{p.title}</td>
                      <td className="px-6 py-4 max-w-lg break-all">{p.categoryId.catName}</td>
                      <td className="px-6 py-4 max-w-lg break-all">{p.description}</td>
                      <td className="px-6 py-4 max-w-lg break-all">{p.selling_price}</td>
                      <td className="px-6 py-4 max-w-lg break-all">{p.discounted_price}</td>
                      <td className="px-6 py-4 max-w-lg break-all">{p.duration}</td>
                      <td className='flex gap-1'>
                        <button className='bg-gray-900 text-white rounded-md text-[12px] px-1'
                        ><Link to={"UpdateCourse/" + (p._id)}><UilEditAlt /></Link></button>
                        {/* <button className='bg-gray text-white rounded-md text-[12px] px-1'
                  onClick={handleDelete}><UilTrashAlt/></button> */}
                        <button className='bg-gray-900 text-white rounded-md text-[12px] px-1' onClick={() => {
                          handleDelete(p._id);
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

export default ViewCourse;


{/* <div className="flex flex-col ml-10">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">Sr no</th>
              <th scope="col" className="px-6 py-4">Leeson Name</th>
              <th scope="col" className="px-6 py-4">Description</th>
              <th scope="col" className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {lesson?.map((p, index) => (
              <>
                <tr className="border-b dark:border-neutral-500 ">
                  <td className="px-6 py-4 font-medium">{index + 1}</td>
                  <td className="px-6 py-4 text-gray-700">{p.title}</td>
                  <td className="px-6 py-4 max-w-lg break-all">{p.discreption}</td>
                  <td className="px-6 py-4">
                    {/* <button classNameName='bg-gray-900 text-white rounded-md text-[12px] px-1 mx-1'
                  ><UilEditAlt /></button> 
                    <button className='bg-gray-900 text-white rounded-md text-[12px] px-1 mx-1'
                      onClick={() => {
                        handleDelete(p._id);
                      }}><UilTrashAlt /></button>
                    <button className='bg-gray-900 text-white rounded-md text-[12px] px-1'><Link to='/dashboard/lesson/showlesson'><UilEye /></Link></button>
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
</div> */}