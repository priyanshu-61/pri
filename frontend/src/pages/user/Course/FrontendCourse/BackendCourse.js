import { Link } from "react-router-dom";

function BackendCourse() {
  return(
    <div>
      
      {/* <div class="min-h-screen bg-gradient-to-tr from-blue-200 to-blue-900 justify-center items-center  py-10"> */}
<div class="min-h-screen bg-white justify-center items-center  py-10">

 <div className=" w-full h-10 bg-gray-200">
  <h1 className=" text-2xl text-center font-bold">Backend Course</h1>
 </div>
  <div class="md:px-40 md:grid md:grid-cols-2 lg:grid-cols-3 space-y-4 md:space-y-0  py-8">
    <div class=" w-72 h-96 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105  transition duration-500">
      <h3 class="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3>
      <div class="relative">
        <img class="w-full rounded-xl" src="data:image/png;base64,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" alt="Colors" />
        <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
      </div>
      <h1 class="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">Java/Advanced java</h1>
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
          <p>Code</p>
        </div>
        <Link to='/Mycourse'>
        <button class=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg">View Lession</button></Link>      </div>
    </div>
    <div class=" w-72 h-96 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 class="mb-3 text-xl font-bold text-indigo-600">Intermediate</h3>
      <div class="relative">
        <img class="w-full rounded-xl" src="https://images.hdqwalls.com/wallpapers/python-logo-4k-i6.jpg" alt="Colors" />
        <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
      </div>
      <h1 class="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">Python/Advanced</h1>
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
          <p>20 lession</p>
        </div>
        <div class="flex space-x-1 text-[12px] items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </span>
          <p>python code</p>
        </div>
        <Link to='/Mycourse'>
        <button class=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg">View Lession</button></Link>      </div>
    </div>
    <div class=" w-72 h-96 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 class="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3>
      <div class="relative">
        <img class="w-full rounded-xl" src="https://cdn.wallpapersafari.com/9/5/xp1aN7.png" alt="Colors" />
        <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
      </div>
      <h1 class="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">PHP </h1>
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
          <p>10 Lession</p>
        </div>
        <div class="flex space-x-1 text-[12px] items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </span>
          <p>Code</p>
        </div>
        <Link to='/Mycourse'>
        <button class=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg">View Lession</button></Link>      </div>
    </div>
  </div>
</div>

    </div>
  )
  
}
export default BackendCourse;