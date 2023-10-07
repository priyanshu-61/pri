import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


export default function Curriculum() {
  const param = useParams();
  const [open, setOpen] = useState(0);
  const [result, setCourse] = useState();
  const [lessons, setLesssons] = useState();
  const [firstlesson, setFirstlesson] = useState();
  const [auth, setAuth] = useAuth();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const [show, setShow] = useState(false)


  const courseData1 = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/v1/course/${param.id}`);
      setCourse(data.result); 
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const lessonData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/v1/lesson/${param.id}`);
      setLesssons(data.lessons);
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

  useEffect(() => {
    firstLesson();
    courseData1();
    lessonData();
  }, [])


  return (

    <>
      <div className="bg-gray-200 h-full overflow-auto pt-8">
        <div
          class="bg-cover w-[100%] bg-center backdrop-blur-sm  text-white py-20 px-10 mt-8"
          style={{
            "background-image":
              "url(https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg)",
            "background-repeat": "no-repeat;",
            "background-size": "10% 10%;"
          }}
        >
          <div class="md:w-1/2 -mt-6 text-left  py-5 lg:ml-9 ml-0 ">
            {/* {result&&result.map((c) => (
              <p key={c._id} class=" font-bold text-2xl uppercase -mt-4">
                {result.id}
              </p>
            ))} */}

            <p class=" font-bold">
              {result && result.title}
              {lessons && lessons.title}
            </p>
            <div className="pr-4 mt-2">
              <ul className=" list-item">
                <li className="mt-1 text-sm">Cybrom</li>
                <li className="mt-1 text-sm"> Language - English</li>
                <li className="mt-1 text-sm"> Created on {result && result.createdAt.substring(0,10)}</li>
                <li className=" mt-1 text-sm">
                  {result && result.category}
                </li>
                <li>★★★★★</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="grid lg:grid-cols-3 grid-cols-1 w-full justify-center gap-3 ">
            <div className=" col-span-2 text-left flex justify-center">
              <div className="  text-white w-full lg:w-[50rem]  mt-4 rounded-t-lg ">
                <h1 className=" rounded-t-lg bg-slate-400 text-lg font-bold py-2 px-2">
                  Course Description
                </h1>
                <div className="  py-2 px-4 bg-white rounded-b-lg">
                  <h1 className="text-black  text-lg font-bold">
                    About the Prime Pack:
                  </h1>
                  <p className="text-black font-medium">
                    {result && result.description}
                  </p>
                  <div>
                  </div>
                </div>
                <div className="h-auto bg-white">
                  <button
                    className=" items-center p-2 duration-700 rounded-lg dark:text-black"
                    onClick={() => setShow(!show)}
                  >
                    view more...
                  </button>
                  {show && <div
                    id="available_course"
                    className=" text-[12px] overflow-hidden text-black duration-500"
                  >
                  </div>}
                </div>
                <div className="  bg-white w-full lg:w-[50rem] mt-14 rounded-t-lg ">
                  <h1 className="rounded-t-lg bg-slate-400 text-lg font-bold py-2 px-2">
                    Currinculam
                  </h1>
                  {lessons && lessons.map((l) => (<>
                    <div className="py-1">
                      <div
                        className="m-2 border-2 hover  :border-black flex px-5 text-left"
                        onClick={() => handleOpen(1)}
                      >
                        <Accordion open={open === 1}>
                          <AccordionHeader className="text-black font-bold">
                            {l.title}
                            <button className="">
                              <h1 className="text-black text-3xl">+</h1>
                            </button>
                          </AccordionHeader>
                          <AccordionBody className="px-4">
                            <Link to="https://youtu.be/E7HjaoES64s">
                              <div className=" grid grid-cols-2  border-2 border-red-700 w-full p-2">
                                <h1>{l.title}</h1>
                                <h1 className="float-right">
                                  <button>View</button> 02.56
                                </h1>
                              </div>
                            </Link>
                          </AccordionBody>
                        </Accordion>
                      </div>
                    </div></>))}
                </div>
              </div>
            </div>

            <div className="z-10 sm:-mt-72 flex justify-center">
              <div className="block lg:fixed ">
                <div
                  id="whoobe-3fery"
                  class="w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col p-6"
                >
                  <img
                    src="https://res.cloudinary.com/moodgiver/image/upload/v1633344243/adventure_woman_rujic1.webp"
                    alt="img"
                    title="img"
                    class="w-full h-auto object-cover rounded-t-lg"
                    id="whoobe-ixxe5"
                  />
                  <div
                    id="whoobe-1okdg"
                    class="w-full p-4  justify-start flex flex-col"
                  > {firstlesson && firstlesson.map((l) => (<>
                    <h4 key={l._id} class="border-b-2 text-3xl" id="whoobe-3mr7n">
                      <div>
                        {l && l.title}
                      </div>
                    </h4>
                    <p class="my-4 md:my-1 px-10 " id="whoobe-950fw">
                      {l.discreption}
                    </p></>
                  ))}
                    <button
                      value="button"
                      class="my-4 px-4 py-2 md:my-1 md:px-1 text-white hover:bg-blue-700 bg-blue-500"
                      id="whoobe-jkkr2"
                    // onClick={byCourse}
                    >
                      <Link to={`/dashboard/Purchase/ByCourse/${param.id}`}>Buy Now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
