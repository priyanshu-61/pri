
import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryForm from "../../../../components/Form/CategoryForm"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateCategory = () => {
  //const [category,setCategory]=useState("")
   const [catName, setName] = useState("");


  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/api/v1/category/", {
        catName,
      });
      if (data?.success) {
        toast.success(`${catName} category is created`);
        //getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <>
    
    <CategoryForm handleSubmit={handleSubmit}
                value={catName}
                setValue={setName} />
    
    
    <ToastContainer/>
    </>
  )
}

export default CreateCategory;
