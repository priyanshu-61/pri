import { Link } from "react-router-dom";
import Mycourse from "../Mycourse/Mycourse";
function FrontendCourse() {
  return (
    <div>
      {/* <div class="min-h-screen bg-gradient-to-tr from-blue-200 to-blue-900 justify-center items-center  py-10"> */}
      <div class="min-h-screen bg-white justify-center items-center  py-10">
        <div className=" w-full h-10 bg-gray-200">
          <h1 className=" text-2xl text-center font-bold">Frontend Course</h1>
        </div>
        <div class="md:px-40 md:grid md:grid-cols-2 lg:grid-cols-3 space-y-4 md:space-y-0  py-8">
          <div class=" w-72 h-96 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 class="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3>
            <div class="relative">
              <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80" alt="Colors" />
              <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
            </div>
            <h1 class="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">HTML/CSS</h1>
            <div class="my-1">
              {/* <div class="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <p>1:34:23 Minutes</p>
        </div> */}
              <div class="flex space-x-2 text-[12px] items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <p>20 Lession</p>
              </div>

              <div class="flex space-x-1 text-[12px] items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <p>HTML Code</p>
              </div>
              <div class="flex item-center mt-2">
                <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
                <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
                <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
                <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
                <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              </div>
              <Link to='/Mycourse'>
                <button class=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg">View Lession</button></Link>
            </div>
          </div>
          <div class=" w-72 h-96 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 class="mb-3 text-xl font-bold text-indigo-600">Intermediate</h3>
            <div class="relative">
              <img class="w-full rounded-xl" src="https://cdn.wallpapersafari.com/34/42/T5SqAO.jpg" alt="Colors" />
              <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
            </div>
            <h1 class="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">Write a Gatsby plugin using script</h1>
            <div class="my-1">
              <div class="flex space-x-2 text-[12px] items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <p>12 lession</p>
              </div>
              <div class="flex space-x-1 text-[12px] items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <p>TypeScripts</p>
              </div>
              <Link to='/Mycourse'>
                <button class=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg">View Lession</button></Link>
            </div>
          </div>
          <div class=" w-72 h-96 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 class="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3>
            <div class="relative">
              <img class="w-full rounded-xl" src="https://cdn.wallpapersafari.com/34/42/T5SqAO.jpg" alt="Colors" />
              <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
            </div>
            <h1 class="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">Advanced React Native </h1>
            <div class="my-1">
              <div class="flex space-x-2 text-[12px] items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <p>10 Lession</p>
              </div>
              <div class="flex space-x-1 text-[12px] items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <p>React JS</p>
              </div>
              <Link to='/Mycourse'>
                <button class=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg">View Lession</button></Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}
export default FrontendCourse;