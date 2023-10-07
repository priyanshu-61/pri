import React, { useEffect, useState } from 'react'
//import { useNavigate, } from "react-router-dom";
import axios from 'axios';
import { Select } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Option } = Select;

const AddCourse = () => {
  const [courses, setCourses] = useState([]);
  //const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [discreption, setDiscreption] = useState("");
  const [videos, setVideo] = useState("");
  const [thumnail_img, setThumnail_img] = useState("");
  //const [categoryId, setCategoryId] = useState("");
  const [courseId, setCourseId] = useState("");

  const [user] = useState("");

  // //get all category
  // const getAllCategory = async () => {
  //   // try {
  //   const { data } = await axios.get("http://localhost:8000/api/v1/show_category/");
  //   console.log(data)
  //   if (data.success) {
  //     setCategories(data.category);
  //   }
  //   // } catch (error) {
  //   //   console.log(error);
  //   //   toast.error("Something wwent wrong in getting catgeory");
  //   // }
  // };

  // useEffect(() => {
  //   getAllCategory();
  // }, []);

  //get all courses
  const getAllCourses = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/courses/");
      setCourses(data.courses)
      //console.log(data.courses[0].reviews[0].name)
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllCourses();
  }, []);



  //create lesson function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/api/v1/add_lesson", {
        courses,
        title,
        discreption,
        thumnail_img,
        courseId,
        videos
      });

      if (data?.success) {
        //toast.error(data?.message);
        toast.success("Lesson Added Successfully");
        console.log(data)
      } else {
        // toast.success("Course Created Successfully");
        //navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <>
     <div className='shadow-xl w-3/5 mx-auto  rounded-xl text-center mt-5 border border-heading'>
     <form onSubmit={handleCreate}>
                  <div class="border-t border-gray-200">
                    <dl>
                      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">

                        </dt>

                        <Select
                          required
                          bordered={false}
                          placeholder="Select Course"
                          size="large"
                          showSearch
                          className="form-select text-stone-900 mb-3 border border-1"
                          onChange={(value) => {
                            setCourseId(value);
                          }}
                        >
                          {courses?.map((c) => (
                            <Option key={c._id} value={c._id}>
                              {c.title}
                            </Option>
                          ))}
                        </Select>
                      </div>


                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                          {user.email}
                        </dt>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          
                          placeholder="Lesson Name"
                          required

                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        />
                      </div>

                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                          {user.email}
                        </dt>
                        <input
                          type="text"
                          value={discreption}
                          onChange={(e) => setDiscreption(e.target.value)}
                          
                          placeholder="Lesson Description"
                          required

                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        />
                       </div>

                       <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                          {user.email}
                        </dt>
                        <input
                          type="text"
                          value={videos}
                          onChange={(e) => setVideo(e.target.value)}
                          placeholder="Video URL"
                          required
                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        />
                       </div>

                      {/* <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                          
                        </dt>
                        <label className="outline outline-1  col-md-12">
                    {thumnail_img ? thumnail_img.name : "Browse"}
                        <input
                          type="string"
                          name="thumnail_img"
                          accept="image/*"
                      onChange={(e) => setThumnail_img(e.target.files[0])}
                      hidden
                          
                          
                          required

                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        /> </label>
                      </div>
                      <div className="mb-3">
                {thumnail_img && (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(thumnail_img)}
                        alt="product_thumnail_img"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>   */}
                      
                      <div class="mt-5 text-center mb-4 md:space-x-3 md:block flex flex-col-reverse">
                        <button onClick={handleCreate} class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider
                         border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">Add Lesson </button>
                
                      </div>
                    </dl>
                  </div>
                </form>
                <ToastContainer/>
    </div>
    </>
  )
}

export default AddCourse;
