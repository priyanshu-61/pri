import React, { useEffect, useState } from 'react'
import { useNavigate, } from "react-router-dom";
import axios from 'axios';
import { Select } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Option } = Select;

const AddCourse = () => {
  const [course, setCourse] = useState("");
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [selling_price, setSellingprice] = useState("");
  const [discounted_price, setDiscounted_price] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [thumnail_img, setThumnail_img] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const [user] = useState("");

  const navigate = useNavigate();

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/show_category/");
      console.log(data)
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create course function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/api/v1/course/new", {
        categories,
        title,
        selling_price,
        discounted_price,
        duration,
        description,
        thumnail_img,
        categoryId
      });

      if (data?.success) {
        //toast.error(data?.message);
        toast.success("Course Created Successfully");
        // setTimeout(() => {
        //   navigate("/dashboard/course");
        // }, 1000);
        console.log(data)
      } else {
        console.log("test")
        toast.info("Course is Already Exist");
        // navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Course is Already Exist");
    }
  };

  return (
    <>
      <div className='shadow-xl w-3/5 mx-auto  rounded-xl text-center mt-5 border border-heading'>
        <form onSubmit={handleCreate}>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-xl font-medium text-gray-900 mt-5">
                </dt>
                <Select
                  required
                  bordered={false}
                  placeholder="Select category"
                  size="large"
                  showSearch
                  className="form-select text-slate-800 w-full border border-1"
                  onChange={(value) => {
                    setCategoryId(value)
                  }}
                >
                  {categories?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.catName}
                    </Option>
                  ))}
                </Select>
              </div>

              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <dt class="text-xl font-medium text-gray-900 mt-5">
                  {user.email}
                </dt>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}

                  placeholder="Course Name"
                  required

                  className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                />
              </div>


              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <dt class="text-xl font-medium text-gray-500 mt-5">

                </dt>
                <input
                  type="number"
                  value={selling_price}
                  onChange={(e) => setSellingprice(e.target.value)}

                  placeholder="Selling Price"
                  required

                  className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                />
              </div>


              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <dt class="text-xl font-medium text-gray-500 mt-5">
                  {user.email}
                </dt>
                <input
                  type="number"
                  value={discounted_price}
                  onChange={(e) => setDiscounted_price(e.target.value)}
                  id="exampleInputEmail1"
                  placeholder="Discounted Price"
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
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  id="exampleInputEmail1"
                  placeholder="Duration"
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}

                  placeholder="Course Description"
                  required

                  className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                />
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <dt class="text-xl font-medium text-gray-500 mt-5">

                </dt>
                <label className="outline outline-1  col-md-12">
                  {thumnail_img ? thumnail_img.name : "Browse"}
                  <input
                    type="file"
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
              </div>

              <div class="mt-5 text-center mb-4 md:space-x-3 md:block flex flex-col-reverse">
                <button onClick={handleCreate} class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">Add Course </button>

              </div>
            </dl>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  )
}

export default AddCourse
