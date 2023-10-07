import React from "react";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import TeacherCard from "./TeacherCard"
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Contact_us from "../../components/ContactUs";


export default function Lorem() {
  const firstscroll = () => {
    document.getElementById('firstcontainer').style = "background-color:red;";
  }

  return (


    <>
      {/* first section  */}

      <div id="firstcontainer" className="  grid grid-cols-1 md:grid-cols-3 bg-slate-300 h-auto md:h-[42rem] " onScroll={firstscroll}>
        <div className="mt-10">
          <p className="bg-[#066aab]    w-64  h-12 text-bold text-xl text-white flex justify-end rounded-tr-2xl  mt-8 pr-11    p-2">
            GET great solution
          </p>
          <div className=" md:text-start text-center lg:w-[450px] w-full mt-10 ml-0 md:ml-5 lg:ml-24 ">
            <h1 className="md:text-[40px] text-4xl font-bold text-[#040239]">
              <Typewriter
                options={{
                  autoStart: true,
                  delay: 80,
                  loop: true,
                  strings: [
                    "Learn Job ready skills from online courses with certificates",
                  ],
                }}
              />
            </h1>
            <br />
            <p>
              1000+ Free Courses, Live Sessions by Experts, and Job
              Opportunities from 2600+ Companies. Join 60 Lakh+ learners to
              build your dream career now!
            </p>
            {/* <button className="border-2 animate-bounce border-blue-600 bg-blue-400 text-2xl mt-8 rounded-3xl p-2 text-gray-900 font-bold">
              For Know about it...
              <span className="text-#de5e18">
                <PhoneForwardedIcon />
              </span>
            </button> */}
             <Link to="Contact_us">
              <button
              className="relative btn4 mt-12 px-10 py-5 border border-black uppercase text-blue-500 font-semibold tracking-wider leading-none overflow-hidden"
              type="button"
            >
              <span className="absolute inset-x-0 h-3 bottom-0 bg-blue-500"></span>
              For Know about it...
             
              <span className="text-#de5e18">
                <PhoneForwardedIcon />
              </span>
            </button>
            </Link>
            <div>

            </div>
          </div>

        </div>
        <div className="mt-10   col-span-2 flex justify-end md:w-[30rem] lg:w-full  lg:ml-0 md:ml-10 pb-10">
          {/* <MoveableImage/> */}

          <img src="h1.svg" className=" h-[40rem] mr-8" alt="" />
        </div>

      </div>
      <div>
        <h1 className="md:text-4xl text-2xl font-semibold text-center mt-10">
          Transforming learnings and advancing careers in tech.
        </h1>
      </div>
      {/* first end section  */}
      {/* _____________________________________second part one girl img END__________________________________________ */}

      <div className=" grid grid-cols-1 lg:grid-cols-3 mt-12">
        <div className="flex col-span-2 justify-center mt-24">
          <div className="block md:flex ">
            <div className="md:ml-0 ml-12  border-2    w-72 h-72  bg-[#de5e18]  rounded-full">
              <div>
                <img
                  src="student_3.png"
                  className=" relative -top-24  w-64 ml-4"
                  alt=""
                />
              </div>
            </div>

            <div className="md:w-[500px] w-full  border-2 bg-orange-200 h-32 rounded-none  md:rounded-r-full  mt-0 md:mt-20     md:p-8 p-2">
              <p>
                You can add the Cybrom Certificate on your Linkedin profile,
                resume and even share it over Whatsapp or any other social
                channels.
              </p>
            </div>
          </div>
        </div>
        <div className="secound lg:block md:flex justify-center">
          <h1 className="mt-16 text-4xl font-bold md:text-start text-center p-4">
            Access top notch Tech Talent
          </h1>

          <ul className="md:p-6 p-2 text-xl mt-6 list-disc ml-9">
            <li>You can add the Cybrom Certificate on your </li>
            <li>You can add the Cybrom on your </li>
            <li>You can add the Cybrom Certificate on your </li>
            <li>You can Cybrom Certificate on your </li>
            <li>You can add the Cybrom </li>
          </ul>
        </div>
      </div>
      {/* _____________________________________second part one girl img END__________________________________________ */}
      {/* _______________________________________________Educator div End here_____________________________________ */}
      <p className="text-center text-4xl font-bold my-16 ">
        Top Educators to learn from
      </p>
      <TeacherCard />

      {/* _______________________________________________Educator div End here_____________________________________ */}
      <p className="text-4xl font-bold my-20  text-center ">
        Fuel your career with our 300+ hiring partners
      </p>
      <div className="flex justify-center md:p-10 p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-400 rounded-tr-xl md:rounded-tr-[50%] md:rounded-bl-[50%] ">
          <div className=" md:p-16   p-5">
            <h1 className="md:text-4xl text-2xl  p-0 md:p-5  ">
              advice given to students to help them make educational or personal
              decisions
            </h1>
            <img
              src="https://almablog-media.s3.ap-south-1.amazonaws.com/Group_1000002116_0863fca8fa.png"
              alt=""
              className="skew-y-6 md:mt-2 mt-5"
            />
          </div>
          <div className="">
            <div className="md:mt-64 mt-10 ">
              <p className="text-2xl text-center md:text-start text-[#d8c3b7]">

                Guidelines for acts and content that are prohibited
              </p>
              <ul className="md:p-6 p-2 text-xl mt-6 list-disc ml-9 text-gray-800">
                <li>You can add the Cybrom Certificate on your </li>
                <li>You can add the Cybrom on your </li>
                <li>You can add the Cybrom Certificate on your </li>
                <li>You can Cybrom Certificate on your </li>
                <li>You can add the Cybrom </li>
              </ul>
              {/* <button className="bg-[linear-gradient(#e66465, #9198e5);]  hover:bg-orange-300 p-5 text-2xl mt-8 rounded-3xl animate-bounce  text-gray-900 font-bold ml-8">
              For Know about it...
              <span className="text-#de5e18">
                <PhoneForwardedIcon className="text-white" />
              </span>
            </button> */}
              <div className="flex justify-center">
              <Link to="Contact_us"> <button
                  className=" relative btn4   mt-12 px-10 py-5 border border-black uppercase text-#de5e18 font-semibold tracking-wider leading-none overflow-hidden"
                  type="button"
                >
                  <span className="absolute inset-x-0 h-3 bottom-0 bg-orange-400"></span>
                  For Know about it...
                  <span className="text-blue-500 ">
                    <PhoneForwardedIcon className="animate-bounce" />
                  </span>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-10  ">
        <img
          src="  https://cybrom.com/wp-content/uploads/2023/03/roadmap-min-1-1536x864.jpg"
          alt=""
          className="w-[90%] md:w-[60%]"
        />
      </div>
      <div>
        <div className="text-3xl font-bold text-center mt-10">Our Vaules</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-center mt-10  ">
          <div className="  m-auto  ">
            <div className="w-80 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]  md:ml-10 lg:ml-32 ml-0 p-2 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioQJUMTBxwm1mrtxo7zMhRIw_Bj9STxntig&usqp=CAU"
                width="80%"
                className="m-auto"
                alt=""
              />
              <div className="bg-white    p-8 rounded-lg ">
                <h1 className="text-2xl font-bold mt-4 md:mt-10 ">mision</h1>
                <p>
                  We at Whiltor are committed to bring the best in our society
                  and to remove hesitation from our youth to start a new venture
                  of thier own due lack of knowledge of a technology or
                  resources. We are continously working to .
                </p>
              </div>
            </div>
          </div>
          <div className="  m-auto  my-20    ">
            <div className="w-80 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] p-2 ">
              <img
                src="https://img.freepik.com/free-vector/business-vision-concept-illustration_114360-7130.jpg?w=360"
                width="70%"
                className="m-auto"
                alt=""
              />

              <div className="bg-white    p-8 pt-0 rounded-lg ">
                <h1 className="text-2xl font-bold mt-4 md:mt-10 ">vision</h1>
                <p>
                  We at Whiltor are committed to bring the best in our society
                  and to remove hesitation from our youth to start a new venture
                  of thier own due lack of knowledge of a technology or
                  resources. We are continously working to .
                </p>
              </div>
            </div>
          </div>
          <div className="  m-auto md:flex ">
            <div className="w-80 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] justify-center  lg:-ml-32 md:ml-64  p-2 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJyaq3rQHEesFi5VG28aM4_SFk7L_6p53WA&usqp=CAU"
                width="70%"
                className="m-auto"
                alt=""
              />
              <div className="bg-white    p-8 rounded-lg  ">
                <h1 className="text-2xl font-bold mt-4 md:mt-10 ">mision</h1>
                <p>
                  We at Whiltor are committed to bring the best in our society
                  and to remove hesitation from our youth to start a new venture
                  of thier own due lack of                 resources. We are continously working to .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
