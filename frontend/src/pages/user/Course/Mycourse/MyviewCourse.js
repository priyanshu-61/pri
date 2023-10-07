import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { UilVideo } from '@iconscout/react-unicons'
import MycourseVideo from "../VideoModel/MycourseVideo";

export default function MyviewCourse() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [isOpenes, setIsOpenes] = useState(false);
  const [lessons, setLesssons] = useState();
  // const [topic, setTopic] = useState();
  const [firstlesson, setFirstlesson] = useState();
  const param = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordions = () => {
    setIsOpens(!isOpens);
  };
  const toggleAccordiones = () => {
    setIsOpenes(!isOpenes);
  };


  const lessonData = async () => {
    // console.log(auth.token)
    try {
      const { data } = await axios.get(`http://localhost:8000/api/v1/lesson/${param.id}`);
      setLesssons(data.lessons);
      console.log(data.lessons);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    };
  };



  const firstLesson = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/v1/firstLesson/${param.id}`);
      setFirstlesson(data.firstlesson);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    };
  };

  // const topics = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:8000/api/v1/topic/64843131755a0ad081db496e");
  //     setTopic(data.topic);
  //     // console.log(data.topic);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   };
  // };

  useEffect(() => {
    firstLesson();
    lessonData();
    // topics();  
  }, []);

  return (

    <div className='md:ml-80 ml-10   w-full relative mt-20 '>
      <div className='bg-gray-300 w-full h-14 font-bold text-xl'>
        <h1>My Course Start</h1>
      </div>
      <div className=''>
        {/* <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-80 h-14 py-3 rounded-lg font-bold '>
          <div>
            <h1>Course Content</h1>
          </div>
          <div className=' float-right'>
            <h1 className=''>course date/time</h1>
          </div>
        </div> */}
      </div>
      <div className=' w-full shadow-xl'>
        <div className=''>
          <button
            className=" px-4 py-2  bg-gray-100  w-full text-left"
          >
            Introduction
          </button>
          <div className=" px-1 py-2 bg-gray-100">
            <div>
              <h1 className=' text-[15px] px-4 font-bold'>INTRODUCTION </h1>
              <h1 className=' mt-4 text-[15px] px-6 font-bold'>Lession Material </h1>
              <h1 className=' mt-4 text-[15px] px-6 font-bold'>Course Announcements:- </h1>
              {firstlesson && firstlesson.map((l) => (
                <center>
                <p className=' mt-4 text-base text-gray-600 px-6 font-semibold max-w-lg text-left'>{l.discreption}</p>
                </center>
              ))}
            </div>
          </div>

        </div>
      </div>
      {lessons && lessons.map((l, i) => (
        <>
          <div key={l._id} className='mt-2'>
            <div className='w-full shadow-xl'>
              <div className=''>
                <button
                  className=" px-4 py-2  bg-gray-100  w-full text-left"
                  onClick={toggleAccordions}
                >
                  <p>{i + 1}- Lecture</p>
                </button>

                {isOpens && (
                  <div>
                    <div className=" px-4 py-2 bg-gray-100 border">
                      <div className='grid grid-cols-3 '>
                        <div><h1>{l.title}</h1></div>
                        <div> <h1></h1></div>
                        <div ><button className=' float-right'>
                          <Link to={l.videos}><UilVideo/></Link>
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div >
        </>))
      }
    </div >
   
  )
}
