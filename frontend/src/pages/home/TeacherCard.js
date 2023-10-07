import React from 'react'

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

export default function TeacherCard() {

  return (
    <>
      <div className="w-full  flex justify-center py-16  bg-[url('https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <Link to="login"> <div className="w-[1000px] h-[600px] scrollbar-hide rounded-xl overflow-y-auto  shadow-inner  box-shadow: inset 0 0 10px #f8a100;d   ">
         <div className="w-80 lg:w-[900px]  md:w-[700px]  md:h-72 h-[400px] border-2  bg-[#FBCEB1] ml-6 md:ml-12  my-20 ">
            <div className="grid grid-cols-1 md:grid-cols-3  ">
              <div className=" md:ml-9  ml-16 w-48 h-48 md:mt-8 -mt-10  bg-blue-300  rounded-full">
                <div className="text-center">
                  <img
                    src='student_1.png'
                    className="  w-64 "
                    alt=""
                  />
                  <div ><p className="text-gray-800 text-xl font-semibold mt-5">
                    Roshni thakur
                  </p></div>

                </div>
              </div>
              <div className=" md:text-start text-center col-span-2 mt-6 text-gray-800">
                <p className="text-xl md:text-4xl mt-2">

                  Legend in PYTHON Programing langudge (Core/Advance)
                </p>
                <p className="mt-5">
                  I have teaching experience of 8 years at Paramount, KD in
                  Delhi,Jaipur & Varanasi. Also selected as Excise Inspector ,
                  IT experience
                </p>

                <ul className="flex justify-center gap-5 mt-0 md:mt-8 ">
                  <li>
                    <InstagramIcon />
                  </li>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <LinkedInIcon />
                  </li>
                </ul>
              </div>
            </div>
          </div> 
          <div className=" w-80 lg:w-[900px]  md:w-[700px] md:h-72 h-[400px] border-2  bg-[#FBCEB1] ml-6 md:ml-12  my-20 ">
            <div className="grid grid-cols-1 md:grid-cols-3  ">
              <div className=" md:ml-9  ml-16 w-48 h-48 md:mt-8 -mt-10  bg-blue-300  rounded-full">
                <div className="text-center">
                  <img
                    src='student_1.png'
                    className="  w-64 "
                    alt=""
                  />
                  <div ><p className="text-gray-800 text-xl font-semibold mt-5">
                    Roshni thakur
                  </p></div>

                </div>
              </div>
              <div className=" md:text-start text-center col-span-2 mt-6 text-gray-800">
                <p className="text-xl md:text-4xl mt-2">

                  Legend in PYTHON Programing langudge (Core/Advance)
                </p>
                <p className="mt-5">
                  I have teaching experience of 8 years at Paramount, KD in
                  Delhi,Jaipur & Varanasi. Also selected as Excise Inspector ,
                  IT experience
                </p>

                <ul className="flex justify-center gap-5 mt-0 md:mt-8 ">
                  <li>
                    <InstagramIcon />
                  </li>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <LinkedInIcon />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-80 lg:w-[900px]  md:w-[700px] md:h-72 h-[400px] border-2  bg-[#FBCEB1] ml-6 md:ml-12  my-20 ">
            <div className="grid grid-cols-1 md:grid-cols-3  ">
              <div className=" md:ml-9  ml-16 w-48 h-48 md:mt-8 -mt-10  bg-blue-300  rounded-full">
                <div className="text-center">
                  <img
                    src='student_1.png'
                    className="  w-64 "
                    alt=""
                  />
                  <div ><p className="text-gray-800 text-xl font-semibold mt-5">
                    Roshni thakur
                  </p></div>

                </div>
              </div>
              <div className=" md:text-start text-center col-span-2 mt-6 text-gray-800">
                <p className="text-xl md:text-4xl mt-2">

                  Legend in PYTHON Programing langudge (Core/Advance)
                </p>
                <p className="mt-5">
                  I have teaching experience of 8 years at Paramount, KD in
                  Delhi,Jaipur & Varanasi. Also selected as Excise Inspector ,
                  IT experience
                </p>

                <ul className="flex justify-center gap-5 mt-0 md:mt-8 ">
                  <li>
                    <InstagramIcon />
                  </li>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <LinkedInIcon />
                  </li>
                </ul>
              </div>
            </div>
          </div>






        </div>
        </Link>
      </div>
    </>

  )
}
