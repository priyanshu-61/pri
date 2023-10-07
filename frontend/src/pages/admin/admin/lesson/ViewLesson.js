import React, { useState, useEffect, } from "react";
import { useParams } from "react-router-dom"
import { UilEditAlt, UilTrashAlt, UilEye } from '@iconscout/react-unicons'
import axios from "axios";
import { Link, Outlet, NavLink } from "react-router-dom";
import { UilShare } from '@iconscout/react-unicons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UilNotebooks, UilBookOpen, UilTable, UilClock, UilPlay, UilRupeeSign } from '@iconscout/react-unicons'


const ViewLesson = () => {
  const param = useParams();
  const [lesson, setLesson] = useState([]);
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  //const [Category, setCategory] = useState([]);
  const [catName, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [id, setId] = useState("");
  const [result, setCourse] = useState();
  const [courseId, setCourseId] = useState();


  // get single course
  // const getSingleCourse = async () => {
  //   // console.log(auth.token)
  //   try {
  //     const { data } = await axios.get(`http://localhost:8000/api/v1/course/${param.id}`);
  //     setCourse(data.result);
  //     // console.log(data.result);

  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   }
  // };
  // useEffect(() => {
  //   getSingleCourse();
  // }, [])

  //get all lesson
  const getAllLesson = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/show_lesson/");
      setLesson(data.lesson)
      console.log(data.lesson)
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllLesson();
  }, []);



  // Delete lesson
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/lesson/${id}`,
      );
      getAllLesson()

      toast.success("Lesson Deleted Successfully");
      //navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.put(
  //       `http://localhost:8000/api/v1/course/${param.id}/`,
  //       courseData
  //     );

  //      if (data?.success) {
  //       toast.success(`${courseData} Updated Successfully`);
  //       getAllCategory();
  //     }else {
  //       toast.error(data.message); 
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something Went Wrong");
  //   }
  // };

  return (
    <div className="flex flex-col ml-1">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-12">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Sr no</th>
                  <th scope="col" className="px-6 py-4">Leeson Name</th>
                  <th scope="col" className="px-6 py-4">Course Name</th>
                  <th scope="col" className="px-6 py-4">Description</th>
                  <th scope="col" className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {lesson && lesson?.map((l, index) => (
                  <>
                    <tr key={l._id} className="border-b dark:border-neutral-500">
                      <td className="px-4 py-4 font-medium">{index + 1}</td>
                      <td className="px-4 py-4 text-gray-700">{l.title}</td>
                      <td className="px-4 py-4 text-gray-700">{l.courseId && l.courseId.title}</td>
                      <td className="px-4 py-4 max-w-lg break-all">{l.discreption}</td>
                      <td className="px-3 py-4">
                        {/* <button classNameName='bg-gray-900 text-white rounded-md text-[12px] px-1 mx-1'
                        ><UilEditAlt /></button> */}
                        <button className='bg-gray-900 text-white rounded-md text-[12px] px-1 mx-1'
                          onClick={() => {
                            handleDelete(l._id);
                          }}><UilTrashAlt /></button>
                        <button className='bg-gray-900 text-white rounded-md text-[12px] px-1'><Link to={l.videos}><UilEye /></Link></button>
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

    // <div>
    //   <div classNameName=' w-full overflow-auto items-center'>
    //     <table classNameName='border border-1 border-gray-600 '>
    //       <tr classNameName=' justify-between  border border-1 border-gray-700 p-2'>
    //         <th classNameName=''>Sr no</th>
    //         {/* <td classNameName=''> Course Name</td> */}
    //         <th classNameName=''>Leeson Name</th>
    //         <th classNameName=''>Description</th>
    //         <th classNameName=''>Action</th>
    //       </tr>
    //       <tbody classNameName=''>
    //         {lesson?.map((p, index) => (
    //           <>
    //             <tr classNameName=' justify-between border border-1 p-2  ' >
    //               <td classNameName="px-2 mr-5">{index + 1}</td>
    //               <td classNameName=" text-left">{p.title}</td>
    //               <td classNameName=" text-left">{p.discreption}</td>
    //               <td classNameName='flex gap-1'>
    //                 <button classNameName='bg-gray-900 text-white rounded-md text-[12px] px-1'
    //                 ><UilEditAlt /></button>
    //                 {/* <button classNameName='bg-gray text-white rounded-md text-[12px] px-1'
    //               onClick={handleDelete}><UilTrashAlt/></button> */}
    //                 <button classNameName='bg-gray-900 text-white rounded-md text-[12px] px-1'
    //                   onClick={() => {
    //                     handleDelete(p._id);
    //                   }}><UilTrashAlt /></button>
    //                 <button classNameName='bg-gray-900 text-white rounded-md text-[12px] px-1'><Link to='/dashboard/lesson/showlesson'><UilEye /></Link></button>
    //               </td>
    //             </tr>
    //           </>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  )
}

export default ViewLesson;

